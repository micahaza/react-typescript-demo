const fs = require('fs')
const faker = require('faker')
const GENERATE_AMOUNT = 10000
let contacts = []

for(let x = 0; x < GENERATE_AMOUNT; x++) {
    const contact = {
        name: faker.name.findName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    }
    contacts.push(contact)
}

fs.writeFile('../frontend/public/contacts.json', JSON.stringify(contacts), 'utf-8', function(err){
    if(err) {
        console.log(err.message)
    } else {
        console.log('Contacts write was successful')
    }
})