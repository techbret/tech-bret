import { CheckCircleIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const includedFeatures = [
  '150 keyphrases optimized',
  '15 pages optimized',
  '6 content, outreach, UX, or CRO assets per quarter',
  'Phone call, lead, and revenue tracking dashboard',
]

export default function SEO() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Want someone to take care of your SEO?</h2>
            <p className="mt-4 text-xl text-gray-600">
              If you're not satisfied with your current provider, or need an SEO manager, contact me and I'll hook you up.
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
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Monthly SEO Service</h3>
                <p className="mt-6 text-base text-gray-500">
                  Your website SEO is one of the most crucial and important aspects of your website. I want you listed first on Search Engines, let me help you get you there!
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-red-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
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
                <p className="text-lg leading-6 font-medium text-gray-900">SEO is one of the most important types of digital marketing</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$349</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">/per month</span>
                </div>
                <p className="mt-4 text-sm">
                  <Link to="seo-package" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </Link>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      to="/seo-package"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
                    >
                      Get Access
                    </Link>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <Link to="/projects" className="font-medium text-gray-900">
                    See why my SEO service works <span className="font-normal text-gray-500">(67% increase)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
