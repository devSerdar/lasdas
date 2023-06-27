import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Michroma } from "next/font/google";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  const aosInitializedRef = useRef(false);

  useEffect(() => {
    if (!aosInitializedRef.current) {
      AOS.init({ duration: 1000 });
      aosInitializedRef.current = true;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentForm = e.target;
    emailjs
      .sendForm(
        "service_af3iwxt",
        "template_e51v8g9",
        currentForm, // Form elementini kullanarak gönderim yapın
        "XDcJR2QP-ar3bCTaf"
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div
      id="contact"
      className="lg:mx-24 overflow-y-hidden mx-4 mt-14 grid lg:grid-cols-2 grid-cols-1"
    >
      <div className="flex" data-aos="fade-up">
        <Image
          className="mx-auto"
          src="/phone.png"
          width={333}
          height={630}
          alt="phone"
        />
      </div>

      <div className="flex">
        <div className="my-auto">
          <p
            className={`${michroma.className} text-5xl leading-tight text-white`}
          >
            Need a creative NFTs?
          </p>
          <p className="mt-6 text-white opacity-50">Feel free to contact!</p>
          <form id="myForm" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row mt-8">
              <input
                name="name"
                className="input lg:my-0 my-3"
                placeholder="First name"
              />
              <input
                name="email"
                className="input lg:my-0 my-3"
                placeholder="Email"
              />
            </div>
            <button
              type="submit"
              className="bg-[#d4a90f] transition-all duration-150 hover:bg-transparent hover:border-white hover:text-white lg:mt-9 mt-5 px-[25px] py-[10px] border-2 rounded-[30px] border-[#d4a90f] text-[#111111]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
