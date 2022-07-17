import WebShot from '../assets/images/sideshot.jpg';

export default function Already() {
    return (
      <div className="bg-zinc-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block text-zinc-900">Get Started Right Now.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  The set up process is simple and takes 10 minutes
                </p>
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-zinc-900 hover:bg-red-50"
                >
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={WebShot}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  