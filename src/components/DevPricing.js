/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'Hobby',
    href: '#',
    priceMonthly: 12,
    description: 'All the basics for starting a new business',
    includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
  },
  {
    name: 'Freelancer',
    href: '#',
    priceMonthly: 24,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 32,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 32,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
]

export default function DevPricing() {
  return (
    <div className="bg-zinc-800">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-zinc-400 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="border bg-white border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-red-600 border border-transparent shadow-sm rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-800"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
