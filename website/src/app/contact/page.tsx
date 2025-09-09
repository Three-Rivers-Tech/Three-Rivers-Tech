"use client";

import { useState } from "react";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Failed to send message. Please try again.");
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
                  className="w-full px-4 py-2 border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary"
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 05.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-foreground-secondary">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 02.22 0L21 8M5 19h14a2 2 0 02-2-2V7a2 2 0 0-2-2H5a2 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-foreground-secondary">info@threeriverstech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 0 11-6 0 3 3 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office</h3>
                  <p className="text-foreground-secondary">123 Technology Drive</p>
                  <p className="text-foreground-secondary">Pittsburgh, PA 15203</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 0 1-18 0 9 9 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-foreground-secondary">Monday - Friday: 9am - 5pm</p>
                  <p className="text-foreground-secondary">Saturday: 10am - 2pm</p>
                  <p className="text-foreground-secondary">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
