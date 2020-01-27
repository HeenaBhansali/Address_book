import { shallowMount } from "@vue/test-utils"
import ContactForm from "../ContactForm.vue"

test("Render First Name Label", () => {
  const wrapper = shallowMount(ContactForm)
  console.log("wrapper", wrapper)
  expect(wrapper.text()).toContain("First Name")
})

test("Render Email Id Label", () => {
  const wrapper = shallowMount(ContactForm)
  console.log("wrapper", wrapper)
  expect(wrapper.text()).toContain("Email Address")
})
