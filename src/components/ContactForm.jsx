import React from "react";

const ContactForm = () => {
  return (
    <section className="py-12 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display text-center text-hotpops-primary font-bold mb-8">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-hotpops-gray text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded-hotpops-radius-md w-full py-2 px-3 text-hotpops-gray leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-hotpops-gray text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-hotpops-radius-md w-full py-2 px-3 text-hotpops-gray leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-hotpops-gray text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded-hotpops-radius-md w-full py-2 px-3 text-hotpops-gray leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
