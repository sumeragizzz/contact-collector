function main() {
    Logger.log('start');

    const contacts = ContactsApp.getContacts();
    let c  = ContactsApp.getContactById('');

    var a = SpreadsheetApp.getActiveSheet();
    a.getActiveRange();

    for (const contact of contacts) { 
    //   Logger.log(contact.getFamilyName());
        Logger.log(`name : ${contact.getFullName()}`);
        for (const phone of contact.getPhones()) {
            Logger.log(`phone : ${phone.getLabel()}, ${phone.getPhoneNumber()}`);
        }
    }
  
    Logger.log('end');
}
