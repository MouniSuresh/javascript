
let contacts = [
    {
        name: "jhon",
        phone: "5469845126",
        email: "jhon@gmail.com",
        displayInfo: function () {
            
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    },
    {
        name: "Bob",
        phone: "4569874125",
        email: "bob@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
];


console.log("Dot notation:", contacts[0].name);
console.log("Bracket notation:", contacts[0]["email"]);


console.log("\nAll Contacts:");
contacts.forEach(contact => contact.displayInfo());


function addContacts(...newContacts) {
    contacts.push(...newContacts);
}

addContacts(
    {
        name: "Charlie",
        phone: "4569874125",
        email: "charlie@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    },
    {
        name: "samuktha",
        phone: "4521639874",
        email: "samyuktha@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
);

console.log("\nAfter Adding New Contacts:");
contacts.forEach(contact => contact.displayInfo());


let moreContacts = [
    {
        name: "sridevi",
        phone: "1236547899",
        email: "sridevi@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
        }
    }
];

contacts = [...contacts, ...moreContacts];

console.log("\nAfter Merging Contact Arrays:");
contacts.forEach(contact => contact.displayInfo());


let displayContact = function () {
    const { name, phone, email } = this;
    console.log(`(Borrowed Method) Name: ${name}, Phone: ${phone}, Email: ${email}`);
};

let extraContact = { name: "subashree", phone: "1547896512", email: "subashree@gmail.com" };

console.log("\nUsing call():");
displayContact.call(extraContact);

console.log("\nUsing apply():");
displayContact.apply(extraContact);

console.log("\nUsing bind():");
let boundDisplay = displayContact.bind(extraContact);
boundDisplay();