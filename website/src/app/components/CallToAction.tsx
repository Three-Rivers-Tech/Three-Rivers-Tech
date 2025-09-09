"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CallToAction() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          // Reset form after successful submission
          setFormData({ name: "", email: "", message: "" });
          alert("Thank you for your message! We'll get back to you soon.");
        } else {
          alert(`Error: ${result.error || 'Failed to send message'}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while sending your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-foreground-secondary mb-10 max-w-3xl mx-auto">
          Let&apos;s discuss how our technology solutions can help you achieve your goals
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
          {isClient && (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-red-300 text-sm text-left">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-red-300 text-sm text-left">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? "border-2 border-red-500" : ""
                }`}
                required
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-300 text-sm text-left">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          )}
        </div>

        <div className="mt-8 flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
