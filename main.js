const prompt = require('prompt-sync')();
const fs = require('fs');

const data = fs.readFileSync('contact.json');
const contacts = JSON.parse(data);

function displayContacts() {
    console.log("Contact List:");
    for (const name in contacts) {
        console.log(`${name}: ${contacts[name].phone}, ${contacts[name].email}`);
    }
}

function addContact() {
    const name = prompt("Enter contact name: ");
    const phone = prompt("Enter contact phone number: ");
    const email = prompt("Enter contact email: ");

    contacts[name] = { phone, email };
    fs.writeFileSync("contact.json", JSON.stringify(contacts, null, 2));
    console.log("Contact added successfully!");
}

function searchContact() {
    const name = prompt("Enter contact name to search: ");
    if(contacts[name]) {
        console.log(`${name}: ${contacts[name].phone}, ${contacts[name].email}`);
    } else {
        console.log("Contact not found.");
    }
}


