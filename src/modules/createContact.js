import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';

export function createContact(obj) {
    const contact = addDoc(collection(db, 'test'), {
        firstName: obj.firstName,
        lastName: obj.lastName,
        company: obj.company,
        email: obj.email,
        phone: obj.phone,
        message: obj.message,
        agreed: obj.agreed
    }); console.log(contact)
}