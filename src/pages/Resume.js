import { DownloadIcon } from '@heroicons/react/outline';
import BretPic from '../assets/images/bretPic.png';
import BretsResume from '../assets/documents/Bret_Johnson_Resume.pdf'

const stats = [
    { name: 'Favorite Stack', stat: 'MERN', color: 'bg-white', textcl: 'text-zinc-800'},
    { name: 'Second Favorite Stack', stat: 'MEAN', color: 'bg-white', textcl: 'text-zinc-800' },
    { name: 'Third Favorite Stack', stat: 'LAMP', color: 'bg-white', textcl: 'text-zinc-800' },
    { name: '2014-2016. Computer Science. DNG', stat: 'Boise State Univeristy', color: 'bg-blue-800', textcl: 'text-slate-50' },
    { name: 'BS, Computer and Information Systems Security', stat: 'ITT Technology Institute', color: 'bg-blue-800', textcl: 'text-slate-50' },
    { name: '2008-2016, Honerable Discharge', stat: 'US Marine Corps', color: 'bg-red-600', textcl: 'text-slate-50' },
    { name: '2018-2022, Honerable Discharge', stat: 'US Army', color: 'bg-zinc-900', textcl: 'text-slate-50' },
]
const languages = [
    { name: 'HTML', initials: 'HTML', href: '#', members: 17, bgColor: 'bg-orange-600' },
    { name: 'CSS', initials: 'CSS', href: '#', members: 17, bgColor: 'bg-blue-500' },
    { name: 'JavaScript', initials: 'JS', href: '#', members: 7, bgColor: 'bg-yellow-400' },
    { name: 'TypeScript', initials: 'TS', href: '#', members: 6, bgColor: 'bg-blue-600' },
    { name: 'PHP', initials: 'PHP', href: '#', members: 10, bgColor: 'bg-violet-700' },
    { name: 'Sass', initials: 'Saas', href: '#', members: 4, bgColor: 'bg-pink-400' },
]
const servers = [
    { name: 'MySQL', initials: 'MSQL', href: '#', members: 10, bgColor: 'bg-orange-600' },
    { name: 'NoSQL', initials: 'NSQL', href: '#', members: 6, bgColor: 'bg-red-400' },
    { name: 'Firebase', initials: 'FB', href: '#', members: 16, bgColor: 'bg-amber-400' },
    { name: 'AWS', initials: 'AWS', href: '#', members: 2, bgColor: 'bg-amber-500' },
    { name: 'MongoDB', initials: 'MDB', href: '#', members: 6, bgColor: 'bg-emerald-600' },
    { name: 'Node.js', initials: 'Node', href: '#', members: 7, bgColor: 'bg-lime-500' },
    { name: 'Apache', initials: 'APCH', href: '#', members: 10, bgColor: 'bg-gradient-to-r from-pink-600 to-violet-900' },
]
const frameworks = [
    { name: 'React.js', initials: 'React', href: '#', members: 6, bgColor: 'bg-cyan-400' },
    { name: 'Next.js', initials: 'Next', href: '#', members: 1, bgColor: 'bg-zinc-900' },
    { name: 'Angular', initials: 'ANGLR', href: '#', members: 6, bgColor: 'bg-red-700' },
    { name: 'Laravel', initials: 'LRVL', href: '#', members: 1, bgColor: 'bg-red-500' },
    { name: 'Express.js', initials: 'EXPRS', href: '#', members: 3, bgColor: 'bg-zinc-500' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Resume() {
    return (
        <div className="min-h-screen bg-zinc-800">

<div className="bg-zinc-700">
      <div className="max-w-7xl mx-auto lg:text-left text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Thank you for your Interest</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Feel free to download my resume in PDF form as well! Reach out if you have any questions. My Email is <span className='text-white font-bold'>bret@techbret.com</span>
        </p>
        <a
          href={BretsResume}
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 sm:w-auto" download={BretsResume}
        >
          Download Resume 
          <DownloadIcon className="ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
        </a>
      </div>
    </div>

            <div className="py-6">
                <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                        <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">

                            <div>
                            <h2 className="text-white text-xs font-medium uppercase tracking-wide mt-6 mb-6">Languages</h2>

                                <ul role="list" className="grid grid-cols-1 gap-5">
                                    {languages.map((project) => (
                                        <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
                                            <div
                                                className={classNames(
                                                    project.bgColor,
                                                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                                                )}
                                            >
                                                {project.initials}
                                            </div>
                                            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                                    <p className="text-gray-900 font-medium hover:text-gray-600">
                                                        {project.name}
                                                    </p>
                                                    <p className="text-gray-500">{project.members} Years Exp.</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <h2 className="text-white text-xs font-medium uppercase tracking-wide mt-6 mb-6">Database/Server Management</h2>
                                <ul role="list" className="grid grid-cols-1 gap-5">
                                    {servers.map((project) => (
                                        <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
                                            <div
                                                className={classNames(
                                                    project.bgColor,
                                                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                                                )}
                                            >
                                                {project.initials}
                                            </div>
                                            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                                    <p className="text-gray-900 font-medium hover:text-gray-600">
                                                        {project.name}
                                                    </p>
                                                    <p className="text-gray-500">{project.members} Years Exp.</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <h2 className="text-white text-xs font-medium uppercase tracking-wide mt-6 mb-6">Frameworks</h2>
                                <ul role="list" className="grid grid-cols-1 gap-5">
                                    {frameworks.map((project) => (
                                        <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
                                            <div
                                                className={classNames(
                                                    project.bgColor,
                                                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                                                )}
                                            >
                                                {project.initials}
                                            </div>
                                            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                                    <p className="text-gray-900 font-medium hover:text-gray-600">
                                                        {project.name}
                                                    </p>
                                                    <p className="text-gray-500">{project.members} Years Exp</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>




                        </nav>
                    </div>
                    <main className="lg:col-span-9 xl:col-span-6">
                    <h2 className="text-white text-xs text-center font-medium uppercase tracking-wide mt-6 mb-6">About Me and Job History</h2>

                        <div className="relative py-10 bg-white overflow-hidden rounded-lg mb-6">
                            <div className="relative px-4 sm:px-6 lg:px-8">
                                <div className="text-lg max-w-prose mx-auto">
                                    <h1>
                                        <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
                                            Full-Stack Developer
                                        </span>
                                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                            Bret Johnson
                                        </span>
                                    </h1>
                                    <p className="mt-8 text-xl text-gray-500 text-center">
                                        Full-Stack Developer, content creator, and experienced business owner. <span className='underline decoration-red-600 font-bold'>14 years’ experience</span> in software and web development. A trueprofessional highly skilled in data analysis, programming languages, and the Adobe platform. Proficient in developing databases, creating user interfaces, writing, and testing code, troubleshooting simple/complex issues, and implementing new features based on user feedback. <span className='font-extrabold text-red-600'>Active Security Clearance</span>
                                    </p>
                                </div>
                                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">

                                    <h1 className='block text-2xl text-center text-zinc-900 font-bold tracking-wide'>J&L Group</h1>
                                    <h2 className='block text-sm text-center text-red-600 font-semibold tracking-wide uppercase'>Senior Web Developer</h2>
                                    <h2 className='block text-xs text-center text-zinc-600 font-semibold tracking-wide uppercase'>2015-Present</h2>

                                    <ul className='list-disc text-lg'>
                                        <li className='my-4'>Design and establish user-friendly websites for clients, including optimized check-out pages, resulting in a 
                                            <span className="text-red-600 font-bold"> 20% increase in user clicks and subsequently 30% in customer purchases</span>.</li>
                                        <li className='my-4'>Built over 1000 Adobe products in all file formats, including “jpeg”, “SVG”, “AI”, “png”, “gif”, and “pdf”. Creating
                                            logos, website graphics, and marketing products</li>
                                        <li className='my-4'>Establish an interactive and dynamic website that guarantees high traffic, page views, and maximum user
                                            experience, generating a <span className='text-red-600 font-bold'>42% increase in the company’s sales revenue</span></li>
                                        <li className='my-4'>Built e-commerce sites natively and through the Shopify platform generating over <span className='text-red-600 font-bold'>$400,000 in sales in just one
                                            year</span>. Focusing on social media and SEO tool functionality within the sites</li>
                                    </ul>

                                    <h1 className='block text-2xl text-center text-zinc-900 font-bold tracking-wide mt-8'>Hill-Rom</h1>
                                    <h2 className='block text-sm text-center text-red-600 font-semibold tracking-wide uppercase'>Software and Bio-Technician</h2>
                                    <h2 className='block text-xs text-center text-zinc-600 font-semibold tracking-wide uppercase'>2014-2016</h2>

                                    <ul className='list-disc text-lg'>
                                        <li className='my-4'>Helped orchestrate efficient large-scale software deployments</li>
                                        <li className='my-4'>On-call rotation that involved a 24/7/365 operation, responsible for direct care and maintenance to all
                                            software-based machines</li>
                                        <li className='my-4'>Reviewed project specifications and design technology solutions that met or exceeded performance
                                            expectations</li>
                                        <li className='my-4'>Revised, modularized, and <span className='text-red-600 font-bold'>updated old code bases to modern development standards, reducing operating costs</span> and improving functionality</li>
                                    </ul>
                                    <h1 className='block text-2xl text-center text-zinc-900 font-bold tracking-wide mt-8'>National Security Agency (NSA)</h1>
                                    <h2 className='block text-sm text-center text-red-600 font-semibold tracking-wide uppercase'>Cryptologican Technician</h2>
                                    <h2 className='block text-xs text-center text-zinc-600 font-semibold tracking-wide uppercase'>2008-2014</h2>

                                    <ul className='list-disc text-lg'>
                                        <li className='my-4'>Served as a an intelligence and cryptologic technician for the National Security Agency (NSA)</li>
                                        <li className='my-4'>Responsible for installing, testing, troubleshooting, repairing, and replacing cryptological networks, physical
                                            security systems, electronic equipment, antennas, personal computers, auxiliary equipment, digital and optical
                                            interfaces, and data systems</li>
                                        <li className='my-4'>Researched and resolved issues regarding integrity of data flow into databases while <span className='text-red-600 font-bold'>targeting over 200 known targets and threats to the United States of America</span></li>
                                        <li className='my-4'>Provided comprehensive analysis and recommended solutions to address complex national security issues, using
                                            data from internal and external sources, and applied advanced analytical methods to assess factors impacting
                                            the overall security of the nation</li>
                                    </ul>
                                    <blockquote>
                                        <p>
                                            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                            pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                        </p>
                                    </blockquote>
                                    <p>
                                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                                    </p>
                                    <figure>
                                        <img
                                            className="w-full rounded-lg"
                                            src={BretPic}
                                            alt=""
                                            width={1310}
                                            height={873}
                                        />
                                        <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                                    </figure>
                                    <h2>Everything you need to get up and running</h2>
                                    <p>
                                        Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                                        volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                                        non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                                        congue erat ac. Cras fermentum convallis quam.
                                    </p>
                                    <p>
                                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </main>
                    <aside className="xl:block xl:col-span-4">
                        <div className="sticky top-6 space-y-4 "><div>
                        <h2 className="text-white text-xs text-center font-medium uppercase tracking-wide mt-6 mb-6">Stacks and Education</h2>
                            <dl className=" grid grid-cols-1 gap-5 ">
                                {stats.map((item) => (
                                    <div key={item.name} className={classNames(item.color,'px-4 py-5  shadow rounded-lg overflow-hidden sm:p-6 text-center')}>
                                        <dt className={classNames(item.textcl,'text-sm font-medium text-gray-500 truncate')}>{item.name}</dt>
                                        <dd className={classNames(item.textcl, "mt-1 text-3xl font-semibold text-gray-900")}>{item.stat}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div></div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
