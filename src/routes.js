import ContactForm from "./components/ContactForm.vue"
import ContactDetails from "./components/ContactDetails.vue"
import ContactList from "./components/ContactList.vue"

export const routes = [
  { path: "/", component: ContactList },
  { path: "/add-contact", component: ContactForm },
  {
    path: "/contact-details",
    name: "contact-details",
    component: ContactDetails,
    props: route => {
      console.log(route.params)
      return route.params
    }
  }
]
