import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function CreateContact(props) {  


    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState(Date());
    const [industry, setIndustry] = useState('');
    const [website, setWebsite] = useState('');
    const [subject, setSubject] = useState('');
    const data = props.name;

    const navigate = useNavigate();

    function handleProjectSubmit(e) {
        e.preventDefault();
        try {
            addDoc(collection(db, data), {
                first: first,
                last: last,
                company: company,
                email: email,
                phone: phone,
                message: message,
                date: date,
                industry: industry,
                website: website,
                subject: subject
            });
            navigate('/thank-you')
        } catch (err) {
            console.log(err);
            alert(`Im sorry there was an error ${err}`)
        }
    }
    
    return (
        <form  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-zinc-900">
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={e => setFirst(e.target.value)}
                                            value={first}
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-zinc-900">
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={e => setLast(e.target.value)}
                                            value={last}
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-900">
                                            Phone
                                        </label>
                                        <span id="phone-optional" className="text-sm text-zinc-500">
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                        onChange={e => setPhone(e.target.value)}
                                        value={phone}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                            aria-describedby="phone-optional"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-zinc-900">
                                        Company Website
                                    </label>
                                    <div className="mt-1">
                                        <input
                                        onChange={e => setWebsite(e.target.value)}
                                        value={website}
                                            type="text"
                                            name="website"
                                            id="website"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-zinc-900">
                                        Industry
                                    </label>
                                    <div className="mt-1">
                                        <input
                                        onChange={e => setIndustry(e.target.value)}
                                        value={industry}
                                            type="text"
                                            name="industry"
                                            id="industry"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-900">
                                        Company Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                        onChange={e => setCompany(e.target.value)}
                                        value={company}
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-900">
                                        Subject
                                    </label>
                                    <div className="mt-1">
                                        <input
                                        onChange={e => setSubject(e.target.value)}
                                        value={subject}
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border-zinc-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-zinc-900">
                                            Tell Me About Your Project
                                        </label>
                                        <span id="message-max" className="text-sm text-zinc-500">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                        onChange={e => setMessage(e.target.value)}
                                        value={message}
                                            id="message"
                                            name="message"
                                            rows={10}
                                            className="py-3 px-4 block w-full shadow-sm text-zinc-900 focus:ring-red-500 focus:border-red-500 border border-zinc-300 rounded-md"
                                            aria-describedby="message-max"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                    onClick={handleProjectSubmit}
                                        type="button"
                                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
    )


}