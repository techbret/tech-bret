import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import LightBulb from '../assets/icons/light-bulb.svg'
import Business from '../assets/icons/business.svg'
import Success from '../assets/icons/success.svg'
import ContentPricing from '../components/ContentPricing'
import SEO from '../components/SEO'
import Special from '../components/Special'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'



const incentives = [
  {
    name: 'Idea and Design Strategy',
    imageSrc: LightBulb,
    description: "I will connect with you with your preferred method so that I can better understand your requirements and business needs. I then start the creative design journey. Once I understand the idea, I will develop the UX strategy.",
  },
  {
    name: 'Development',
    imageSrc: Business,
    description: "I will then work with you in an iterative process ensuring your feedback is incorporated and we develop a great website together. If you prefer to stay more hands off (I know you're busy) I will make sure to deliver a quality product.",
  },
  {
    name: 'Success',
    imageSrc: Success,
    description:
      "I continue to improve your site through revisions to ensure a successful roll out. I believe your success is mine as well. Once you approve of the final design I will push it to your production line so that it goes live",
  },
]


export default function Home() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const date = Date();

  const navigate = useNavigate();

  function handleSubmitInformation(e) {
    e.preventDefault();
    try {
      addDoc(collection(db, 'wantInfo'), {
        name: name,
        company: company,
        email: email,
        phone: phone,
        website: website,
        date: date
      });
      console.log(name)
      navigate('/thank-you')
    }
    catch (err) {
      console.log(err);
      alert('Im sorry there has been an error. Please Call me at 719-318-4101. Thank you!')
    }
  }

  return (
    <div className="relative bg-zinc-800 overflow-hidden">
      <div className="max-w-screen-2xl hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-zinc-600 lg:top-0 lg:mt-12 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-0 pb-16 sm:pb-24">

        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center text-center">
                <div>
                  <Link
                    to="/resume"
                    className="inline-flex items-center text-white bg-zinc-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-600 rounded-full">
                      Want me full time?
                    </span>
                    <span className="ml-4 text-sm">Visit my resume page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </Link>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Get your Website</span>{' '}
                    <span className="text-red-600 md:block">for only $199</span>
                  </h1>
                  <p className="mt-3 text-base text-zinc-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    With my $199 package you will get a mobile responsive website with unlimited round of revisions. I have over 15 different designs to choose from and I guarantee a 24-48 hour turnaround time.
                  </p>
                  <br></br>
                  <Link to="/monthly-special" className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>Start Now</Link>


                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-2xl font-extrabold text-zinc-800 text-center">Want more information?</p>


                    </div>



                    <div className="mt-6">
                      <form className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-zinc-400 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Email
                          </label>
                          <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Email"
                            required
                            className="block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-zinc-400 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number
                          </label>
                          <input
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            type="text"
                            name="mobile"
                            id="mobile"
                            autoComplete="phone"
                            placeholder="Mobile number"
                            required
                            className="block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-zinc-400 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Company Name
                          </label>
                          <input
                            onChange={e => setCompany(e.target.value)}
                            value={company}
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="company"
                            placeholder="Company"
                            className="block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-zinc-400 rounded-md"
                          />
                        </div>
                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Website Address
                          </label>
                          <input
                            onChange={e => setWebsite(e.target.value)}
                            value={website}
                            type="text"
                            name="website"
                            id="website"
                            autoComplete="url"
                            placeholder="Website Address"
                            className="block w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-zinc-400 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                          onClick={handleSubmitInformation} 
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Get more info sent to your Email
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>
        <div className="bg-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="bg-zinc-50 rounded-2xl px-6 py-16 sm:p-16">
              <div className="max-w-xl mx-auto lg:max-w-none">
                <div className="text-center">
                  <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    How My Process Works
                  </p>
                </div>
                <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                  {incentives.map((incentive) => (
                    <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                      <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                          <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 className="text-xl font-medium text-red-600">{incentive.name}</h3>
                        <p className="mt-2 text-md text-gray-500">{incentive.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Special />

        <ContentPricing />

        <SEO />
      </div>
    </div>
  )
}
