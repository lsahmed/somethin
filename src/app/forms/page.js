"use client"

import React from "react";
import { useForm, ValidationError } from "@formspree/react"
import { useRouter } from "next/navigation";
import Link from "next/link";


function ContactForm() {
  const router = useRouter()
  const [state, handleSubmit] = useForm("xzzvljqn");
  const afterSubmit = () => {
    alert("Form Submitted!");
    router.push('/');
  }
  if (state.succeeded) {
    return afterSubmit()
  }

  return (
    <div className="bg-[#f5f6fa] min-h-screen flex flex-col justify-center py-12">
      <form className="max-w-lg w-full mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 bg-[#f5f6fa] font-medium"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError
            prefix="name"
            field="name"
            errors={state.errors}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 bg-[#f5f6fa] font-medium"
            type="email"
            id="email"
            name="email"
            placeholder="you@email.com"
            required
          />
          <ValidationError
            prefix="email"
            field="email"
            errors={state.errors}
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 bg-[#f5f6fa] font-medium"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
          />
          <ValidationError
            prefix="phone"
            field="phone"
            errors={state.errors}
          />
        </div>

        {/* Designation */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="designation">
            Designation
          </label>
          <input
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 bg-[#f5f6fa] font-medium"
            type="text"
            id="designation"
            name="designation"
            placeholder="Your Designation"
          />
          <ValidationError
            prefix="designation"
            field="designation"
            errors={state.errors}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Submit
        </button>
        <Link href="/">
        <p className="block text-gray-700 font-semibold mb-2">-- Back to Home</p>
        </Link>
      </form>
    </div>
  );
}

export default ContactForm;
