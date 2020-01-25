export const getContacts = () =>
  JSON.parse(localStorage.getItem("contacts")) || {}

export const setContacts = contacts =>
  localStorage.setItem("contacts", JSON.stringify(contacts))

export const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  )
}
