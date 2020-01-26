import { shallowMount } from "@vue/test-utils"
import Vue from "vue"
import ContactForm from "../ContactForm.vue"

test("Render First Name Label", () => {
  const wrapper = shallowMount(ContactForm)
  console.log("wrapper", wrapper)
  expect(wrapper.text()).toContain("First Name")
})
