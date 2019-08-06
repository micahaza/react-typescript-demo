const fs = require('fs');
const fsPromises = fs.promises;
const faker = require('faker');

const GENERATE_AMOUNT = 10000;

const contacts = [];

for(let x = 0; x < GENERATE_AMOUNT; x++) {
  const contact = {
    name: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email()
  };

  contacts.push(contact);
}

fsPromises.writeFile(`${__dirname}/../frontend/public/contacts.json`, JSON.stringify(contacts))
.then(() => {
  console.log('Wrote Contacts!');
}).catch((err) => {
  console.log('Error occurred: ', err.message);
});