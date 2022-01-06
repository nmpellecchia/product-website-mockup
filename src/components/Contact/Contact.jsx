import React from 'react';

function Contact() {
  return (
    <section className="bg-yellow-100 p-5 text-xl flex flex-col gap-10">
      <h1 className="text-5xl font-title text-center underline m-b-10">
        contact us
      </h1>
      <div className="min-h-screen flex flex-col gap-10 lg:items-center">
        <ContactCard />
        <MessageUs />
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <article className="bg-yellow-400 flex flex-col gap-2 p-2 shadow-xl rounded-2xl lg:w-3/4">
      <h1 className="font-title text-center text-3xl text-yellow-100">
        get in touch
      </h1>
      <ul className="flex justify-between items-start">
        <li className="flex flex-col items-center">
          <i className="fas fa-map-marker-alt text-pink-600"></i>
          <p>Fake Street 332,</p>
          <p>False City,</p>
          <p>False Country</p>
        </li>
        <li className="hidden lg:block lg:w-1/2 lg:flex lg:flex-col lg:items-center">
          <i class="fas fa-share-alt text-pink-600 mb-5"></i>
          <ul className="w-full flex justify-around cursor-pointer text-xl">
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-facebook"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-linkedin-in"></i>
            </li>
            <li>
              <i class="fab fa-youtube"></i>
            </li>
          </ul>
        </li>
        <li className="flex flex-col items-center">
          <i className="fas fa-phone-alt text-pink-600"></i>
          <p>+00-1234-5678</p>
          <p>+15-0011-2233</p>
        </li>
      </ul>
    </article>
  );
}

function MessageUs() {
  return (
    <article className="bg-yellow-200 border-4 border-yellow-300 shadow-xl lg:w-3/4">
      <h1 className="font-title text-center text-5xl">message us</h1>
      <form action="" className="flex flex-col gap-2 m-3">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          required
          className="w-3/4 border-b-2 bg-yellow-200 border-yellow-500 focus:outline-none focus:border-pink-500"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          required
          className="w-3/4 border-b-2 bg-yellow-200 border-yellow-500 focus:outline-none focus:border-pink-500"
        />
        <label htmlFor="msg">Message</label>
        <textarea
          name=""
          id="msg"
          cols="25"
          rows="7"
          className="w-full h-full border-2 bg-yellow-200 border-yellow-500 focus:outline-none focus:border-pink-500 rounded-xl"
        ></textarea>
        <button className="uppercase text-yellow-700 border-4 border-yellow-700 rounded-full py-2">
          send
        </button>
      </form>
    </article>
  );
}

export default Contact;
