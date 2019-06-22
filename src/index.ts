function main() {
    Logger.log('start');
    const contacts = ContactsApp.getContacts();
    for (const contact of contacts) { 
    //   Logger.log(contact.getFamilyName());
        Logger.log(`name : ${contact.getFullName()}`);
        for (const phone of contact.getPhones()) {
            Logger.log(`phone : ${phone.getLabel()}, ${phone.getPhoneNumber()}`);
        }
    }
    Logger.log('end');
}

function collectPhoneLabel() {
    for (const contact of ContactsApp.getContacts()) {
        for (const phone of contact.getPhones()) {
            Logger.log(`FullName : ${contact.getFullName()}, Phone Label : ${phone.getLabel()}, Phone Number : ${phone.getPhoneNumber()}`);
        }
    }
}
