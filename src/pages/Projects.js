import L2L from '../assets/images/lyrics2learn.png'
import Lexample from '../assets/images/l2lexample.png'
import FB from '../assets/images/freshbeards.png'
import fexample from '../assets/images/fbexample.png'
import GK from '../assets/images/gutterkings.png'
import Jeremy from '../assets/images/jeremyProfile.jpg'
import { ShoppingCartIcon, SparklesIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'


const files = [
    {
        title: 'Lyrics2Learn',
        size: 'Ed-Tech Company',
        source: L2L,
        href: 'https://lyrics2learn.com'
    },
    {
        title: 'Fresh Beards',
        size: 'Ecommerce Beard Product Company',
        source: FB,
        href: 'https://freshbeards.com'
    },
    {
        title: 'The Gutter Kings',
        size: 'Gutter Installation Company',
        source: GK,
        href: 'https://raingutterkings.com'
    },

]

export default function Projects() {
    return (

        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Portfolio</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                        Check out some of my work
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-zinc-500 lg:mx-auto">
                        Here are three different styles to show the range you can have. From Ecommerce, to Tech Software, to Static Landing sites.
                    </p>
                </div>

                <ul className="py-6 grid  gap-x-4 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-zinc-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-zinc-100 focus-within:ring-red-500 overflow-hidden">
                                <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />

                                <a href={file.href} type="button" className="absolute inset-0 focus:outline-none" rel="noreferrer" target="_blank">
                                    <span className="sr-only">View details for {file.title}</span>
                                </a>
                            </div>
                            <p className="mt-2 block text-sm font-medium text-zinc-900 truncate pointer-events-none text-center">{file.title}</p>
                            <p className="block text-sm font-medium text-zinc-500 pointer-events-none text-center">{file.size}</p>

                        </li>
                    ))}
                </ul>

                <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Ecommerce Solutions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  I have been creating ecommerce websites since 2010. I can build you a 100% custom ecommerce site, or I can use a CMS platform, and get you set up (saves you money). Even if you don't go with me I highly recommend looking into <a className='text-red-600' href="https://shopify.com" rel="noreferrer" target="_blank">Shopify</a> as they are the leading industry standard for ecommerce platforms. 
                </p>
                <div className="mt-6">
                  <Link
                    to="/ecommerce"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
                      </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={fexample}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-red-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Proven concepts in design theory
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  I have a wide background in design, and I use that in every aspect possible when designing websites. Design and creation are the reason I got into this industry, and I put it to reality in my work
                </p>
                <div className="mt-6">
                  <Link
                    to="/pro"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;The site looks amazing Bret. It was fun working with you and look forward to working with you again!&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={Jeremy}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Jeremy Spartz, CEO of Lyrics2Learn</div>
                  </div>
                </footer>
              </blockquote>
            </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Lexample}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


            </div>
        </div>


    )
}
