import { CheckIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const hobbyFeatures = [
  'Extension and Theme update',
  'Extension Installation',
  'Cloud Backups (1 Daily)',
  'Monthly 1-on-1',
  'General Tech',
  'Google Analytics Intigration',
  'Hosting'
]
const scaleFeatures = [
  '24/7 Priority Support',
  'Unlimited 24/7 Website Edits',
  'Development & designing',
  'Performance optimization',
  'Malware Investigations',
  'Firewall Setup and DDoS protection',
  'My SEO Package',
  'Ecommerce Customizable',]
const growthFeatures = [
    '4 Hours development & designing',
    'Development & designing',
    'Speed and Performance optimization',
    'Malware Scans and Investigations',
    'Google Site Map and Local Listing Submission',
    'Customizations',
    'Firewall Setup and DDoS protection',
    'Google Business Maintenance',
    'My SEO Package',
    'Ecommerce Customizable',
    'Email Account Administrator',
    'Cancel Anytime'
]

export default function ContentPricing() {
  return (
    <div className="bg-zinc-800">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Content Management Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Already Have a Website?
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Hire me to <span className='text-red-400 font-extrabold'>maintain your website</span>. We all know keeping a website up-to-date can be time consuming and take time away from your business. I offer three content management services for all sizes and all companies.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-zinc-800 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                          Hobby
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-1">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <Link
                            to="/hobby"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-red-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                        Growth
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">199</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul className="space-y-1">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <Link
                          to="/growth"
                          className="block w-full text-center rounded-lg border border-transparent bg-red-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-red-700"
                          aria-describedby="tier-growth"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Scale
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">599</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-1">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <Link
                            to="/scale"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
