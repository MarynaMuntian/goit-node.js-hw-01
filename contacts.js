const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return contacts;
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts
}