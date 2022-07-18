/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import ContentPricing from '../components/ContentPricing'
import { CheckIcon } from '@heroicons/react/outline'
import SEO from '../components/SEO'
import Special from '../components/Special'


const includedFeatures = [
    '6 Pages 100% Custom Website Design',
    'Complete Website Development',
    'Mobile Responsive',
    '100% Ownership Rights',
    'Unlimited Revisions',
    'Google Friendly Sitemap',
  ]

  const tiers = [
    {
      name: 'Basic',
      href: '#',
      priceMonthly: 299,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
    {
      name: 'Startup',
      href: '#',
      priceMonthly: 499,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
    {
        name: 'Pro',
        href: '#',
        priceMonthly: 799,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        features: [
          'Pariatur quod similique',
          'Sapiente libero doloribus modi nostrum',
          'Vel ipsa esse repudiandae excepturi',
          'Itaque cupiditate adipisci quibusdam',
        ],
      },
  ]

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Web Solutions to Fit your Needs</h2>
            <p className="mt-4 text-xl text-gray-600">
              Scroll down to see all our packages and discounts
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">One Time No Commitment Pricing</h3>
                <p className="mt-6 text-base text-gray-500">
                  If you don't need someone to upkeep your say and take care of hosting, then this is the perfect deal for you and your business.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-red-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Pay once, own it forever</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-zinc-800">
                  <span>$499</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Check out our other No Commitment Pricing Models
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-900"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="px-4 sm:px-6 lg:px-8 lg:pb-8 ">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-red-600 uppercase tracking-wider">Save Money on Set Up Costs</h2>
          <p className="mt-2 text-3xl font-extrabold text-zinc-800 sm:text-4xl lg:text-5xl">
            Save money by letting me handle your monthly upkeep
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-zinc-800 sm:mt-5 sm:text-2xl">
            You can get my <span className='font-bold text-red-600'>$499 deal for ONLY $199 </span> when you sign up for my monthly maintenance plan
          </p>
        </div>
      </div>
      <Special />
      <div className="bg-zinc-800">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The right price for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-zinc-800" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-red-600 text-zinc-50"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">/setup</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-zinc-600">
                  Get full access to any featured package with a discount of <span className="font-semibold text-zinc-900">$300 off</span> when you sign up for any of my monthly content management services.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-white hover:bg-zinc-50"
                >
                  Apply Discount
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <ContentPricing />
      <SEO />
      
      <div className="bg-red-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-800 sm:text-4xl">
          <span className="block">Dont See What You are Looking For?</span>
          <span className="block text-white">Tell me what I can do for you.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-zinc-900"
            >
              Message Me
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-zinc-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
