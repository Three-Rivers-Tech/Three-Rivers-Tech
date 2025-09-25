"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your Web3Forms access key
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - Get in Touch with Three Rivers Tech",
            "description": "Contact Three Rivers Tech for technology solutions. Reach out to our team for software development, IT consulting, SaaS products, or computer repair services.",
            "url": "https://threeriverstech.com/contact",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://threeriverstech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://threeriverstech.com/contact"
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Get in touch with our team. We{`'`}re here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            {submitSuccess ? (
              <div className="bg-green-100 border-green-40 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your message! We{`'`}ll get back to you soon.</p>
              </div>
            ) : null}

            {submitError ? (
              <div className="bg-red-10 border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <p>{submitError}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground-secondary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground-secondary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground-secondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaPhoneAlt className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-foreground-secondary">(412) 403-5559</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaEnvelope className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-foreground-secondary">info@threeriverstech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaMapMarkerAlt className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Location</h3>
                  <p className="text-foreground-secondary">124 Grant St</p>
                  <p className="text-foreground-secondary">Turtle Creek, PA 15145</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <FaClock className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-foreground-secondary">Monday - Friday: 9am - 5pm</p>
                  <p className="text-foreground-secondary">Saturday: 9am - 5pm</p>
                  <p className="text-foreground-secondary">Sunday: 10am - 2pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
