const getContacts = () => JSON.parse(localStorage.getItem("contacts")) || {}

const getContactById = contactId => {
  const contacts = getContacts()
  return contacts[contactId]
}

const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  )
}

const setContacts = contacts =>
  localStorage.setItem("contacts", JSON.stringify(contacts))

const saveContact = contact => {
  const contacts = getContacts()
  if (!contact.id) contact.id = generateId()
  setContacts({ ...contacts, [contact.id]: contact })
}

const deleteContact = contactId => {
  const contacts = getContacts()
  delete contacts[contactId]
  setContacts(contacts)
}

export {
  deleteContact,
  generateId,
  getContactById,
  getContacts,
  saveContact,
  setContacts
}
