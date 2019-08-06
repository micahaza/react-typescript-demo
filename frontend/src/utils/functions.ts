import { Contact } from "../models/Contact";

export function mapContacts(contacts: any[]) {
    return contacts.map((x: Contact, i: number) => ({
        label: `${x.name} (${x.phoneNumber}), ${x.email}`,
        value: i
    }))
}
