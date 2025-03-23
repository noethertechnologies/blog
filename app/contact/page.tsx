"use client";

import React, { useState } from "react";
import Head from "next/head";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, option: e.target.id });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Send form data to API
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your enquiry! Your message has been sent.");
      } else {
        alert(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an issue sending your message. Please try again later.");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      option: "",
      message: "",
    });
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Us | Questions, Complaints & Feedback | Noether Technologies</title>
        <meta
          name="description"
          content="Reach out to Noether Technologies for any inquiries related to tech, finance, trading, and AI news. Submit your questions, complaints, or feedback via email."
        />
        <meta
          name="keywords"
          content="tech support, finance queries, AI feedback, trading complaints, contact Noether Technologies, technology news, AI updates, trading news, finance updates, customer support, feedback"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.breakthroughsdaily.com/contact" />

        {/* Open Graph Meta Tags for social sharing */}
        <meta
          property="og:title"
          content="Contact Us | Questions, Complaints & Feedback | Noether Technologies"
        />
        <meta
          property="og:description"
          content="Submit your questions, complaints, or feedback on tech, finance, trading, and AI news at Noether Technologies. We're here to help."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.breakthroughsdaily.com/contact" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Noether Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {/* Contact Info Section */}
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg font-bold text-black">
                Have any questions, complaints, or feedback regarding tech, finance, trading, or AI news? 
                Reach out to us using the email below or submit the form.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:noethertechnologies@gmail.com"
                  className="font-bold text-black"
                >
                  noethertechnologies@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Options: Question, Complaint, Feedback */}
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Question"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 font-bold text-black hover:border-black"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Question"
                        type="radio"
                        name="option"
                        onChange={handleOptionChange}
                        checked={formData.option === "Question"}
                      />
                      <span className="text-sm">Question</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Complaint"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 font-bold text-black hover:border-black"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Complaint"
                        type="radio"
                        name="option"
                        onChange={handleOptionChange}
                        checked={formData.option === "Complaint"}
                      />
                      <span className="text-sm">Complaint</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Feedback"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 font-bold text-black hover:border-black"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Feedback"
                        type="radio"
                        name="option"
                        onChange={handleOptionChange}
                        checked={formData.option === "Feedback"}
                      />
                      <span className="text-sm">Feedback</span>
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
