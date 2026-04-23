const prompt = require('prompt-sync')();
const fs = require('fs');

const data = fs.readFileSync('contact.json');
const contacts = JSON.parse(data);

function displayContacts() {
    console.log("\nContact List:");
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

function deleteContact() {
    const name = prompt("Enter contact name to delete: ");
    if(contacts[name]) {
        delete contacts[name];
        fs.writeFileSync("contact.json", JSON.stringify(contacts, null, 2));
        console.log("Contact deleted successfully!");
    }
    else {
        console.log("Contact not found.");
    }
}

function main() {
    while (true) {
        console.log("\n1. Display Contacts");
        console.log("2. Add Contact");
        console.log("3. Search Contact");
        console.log("4. Delete Contact");
        console.log("5. Exit");

        const choice = prompt("Choose an option: ");
        switch (choice) {
            case '1':
                displayContacts();
                break;
            case '2':
                addContact();
                break;
            case '3':
                searchContact();
                break;
            case '4':
                deleteContact();
                break;
            case '5':
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid option, please try again.");
        }
    }
}

main();