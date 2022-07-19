import { ChevronRightIcon } from '@heroicons/react/solid'
import LightBulb  from '../assets/icons/light-bulb.svg'
import Business from '../assets/icons/business.svg'
import Success from '../assets/icons/success.svg'
import ContentPricing from '../components/ContentPricing'
import SEO from '../components/SEO'
import Special from '../components/Special'



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
                  <a
                    href="/resume"
                    className="inline-flex items-center text-white bg-zinc-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-600 rounded-full">
                      Want me full time?
                    </span>
                    <span className="ml-4 text-sm">Visit my resume page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Get your Website</span>{' '}
                    <span className="text-red-600 md:block">for only $199</span>
                  </h1>
                  <p className="mt-3 text-base text-zinc-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  With my $199 package you will get a mobile responsive website with unlimited round of revisions. I have over 15 different designs to choose from and I guarantee a 24-48 hour turnaround time.
                  </p>
                <br></br>
                  <button className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>Start Now</button>
                  

                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-gray-700 text-center">Create an account and get started!</p>

                      <div className="mt-1 grid grid-cols-3 gap-3">
                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with Facebook</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.5,20c-0.4,0-0.8,0-1.3,0c0,0-0.1,0-0.1,0c-0.3,0-0.6-0.1-1-0.1c-2.5-0.4-4.5-1.6-6.1-3.5c-2-2.4-2.6-5.2-2.1-8.2
	C0.5,6,1.4,4.2,3,2.8c2.8-2.6,6-3.4,9.7-2.4c1.3,0.4,2.5,1.1,3.6,1.9c0,0,0,0.1,0,0.1c0,0.2-0.1,0.3-0.2,0.4
	c-0.8,0.8-1.6,1.6-2.4,2.4c-0.2,0.2-0.3,0.2-0.6,0.1c-1.3-0.9-2.7-1.2-4.3-1C6.1,4.8,4.2,7,4,9.7c-0.1,1.7,0.5,3.2,1.7,4.4
	c1.4,1.4,3,1.9,4.9,1.6c2.1-0.3,3.6-1.5,4.5-3.4c0,0,0-0.1,0-0.1c-0.1,0-0.1,0-0.2,0c-1.7,0-3.4,0-5,0c-0.4,0-0.4-0.1-0.4-0.4
	c0-1.1,0-2.1,0-3.2c0-0.3,0.2-0.5,0.5-0.5c3.1,0,6.3,0,9.4,0c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.3,0.3c0,0.1,0,0.3,0.1,0.4
	c0,0.3,0.1,0.6,0.1,0.8c0,0.3,0,0.6,0,0.8c0,0,0,0.1,0,0.1c0,0.4-0.1,0.8-0.1,1.1c-0.4,2.1-1.3,3.9-2.9,5.4
	c-1.6,1.6-3.5,2.5-5.7,2.8C11,20,10.7,20,10.5,20z"/>
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with GitHub</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Mobile number or email"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Create your account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
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
