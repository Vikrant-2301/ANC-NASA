"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 py-10 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have a question? We're here to help. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <ContactDetail
                icon={<MapPin className="h-6 w-6 text-gray-600" />}
                title="Location"
                details={
                  <>
                    Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411
                  </>
                }
              />

              <ContactDetail
                icon={<Phone className="h-6 w-6 text-gray-600" />}
                title="Phone"
                details={
                  <>
                    <span className="block">+91 6300622169</span>
                  </>
                }
              />

              <ContactDetail
                icon={<Mail className="h-6 w-6 text-gray-600" />}
                title="Email"
                details="z187@nasaindia.co"
              />

              <ContactDetail
                icon={<Clock className="h-6 w-6 text-gray-600" />}
                title="Know More About"
                details={
                  <>
                    NASA:{" "}
                    <a
                      href="https://nasaindia.co"
                      className="text-gray-800 font-medium"
                      target="_blank"
                    >
                      nasaindia.co
                    </a>{" "}
                    <br />
                    LPU:{" "}
                    <a
                      href="https://lpu.in"
                      className="text-gra-800 font-medium"
                      target="_blank"
                    >
                      lpu.in
                    </a>
                  </>
                }
              />
            </div>
          </div>

          {/* Right: Map */}
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md border border-gray-300">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.3465357337987!2d75.7008074760028!3d31.25460957423459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a50f5fffdc7%3A0xa4140b2b505d52a3!2s7P43%2B5W%20Phagwara%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Contact Detail Component
const ContactDetail = ({ icon, title, details }) => {
  return (
    <div className="flex items-start space-x-4">
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-700">{details}</p>
      </div>
    </div>
  );
};

export default Contact;
