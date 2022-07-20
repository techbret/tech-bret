import { CalendarIcon, CheckIcon, DatabaseIcon, DesktopComputerIcon, DeviceMobileIcon, PlusIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Custom Website',
    icon: DesktopComputerIcon,
    description:
      'Get 5 pages 100% Custome Website Design, Complete Web Development, and Unlimited Revisions.',
  },
  {
    name: 'Mobile Friendly',
    icon: DeviceMobileIcon,
    description:
      'All my websites come fully functional for all devices and for all browsers. Stay up to date with the latest industry standards and never let your site be outdated',
  },
  {
    name: 'Complete Deployment',
    icon: DatabaseIcon,
    description:
      '100% Ownership rights, money back guarantee with a complete deployment. I wll take you from start to finish making your site live and accessible to all!',
  },
  {
    name: 'Monthly Content Meetings',
    icon: CalendarIcon,
    description:
      'Every month we will sit down and go over your website and look for ways to improve it and get you the traffic you deserve',
  },
]
const checklist = [
  'Unlimited revisions',
  'No per user fees',
  'Unlimited storage',
  '24-48 hour turnover time',
  'Cancel any time',
  'Brand New Website',
]

export default function Special() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-red-600" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">Full-featured</h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Everything you need to get your business started
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center bg-red-600 rounded-md">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-red-600 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold text-white tracking-tight">$199</span>
                  <span className="mt-2 text-base font-medium text-red-200">Setup fee</span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <PlusIcon className="h-6 w-6 text-red-300" aria-hidden="true" />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">$79</span>
                    <span className="mt-2 text-base font-medium text-red-200">Per month</span>
                  </span>
                </span>
              </p>
            </div>
            <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="bg-red-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white"
                >
                  <CheckIcon className="h-6 w-6 text-red-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/monthly-special"
              className="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-red-600 hover:bg-red-50 md:px-10"
            >
              Get started today
            </Link>
            <Link to="/standard-deal" className="block text-center text-base font-medium text-white hover:text-white">
              Just want a website built?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
