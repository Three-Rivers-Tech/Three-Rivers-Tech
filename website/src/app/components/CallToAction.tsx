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
    <section className="py-12 sm:py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
          Stop Losing Money to Bad Technology
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Get a free technology assessment and see exactly how we can save you time and money
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-2xl">
          {isClient && (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cta-name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="cta-name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
                className={`w-full px-4 py-4 sm:py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-base transition-colors ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
                required
                aria-describedby={errors.name ? "cta-name-error" : undefined}
              />
              {errors.name && (
                <p id="cta-name-error" className="mt-1 text-red-300 text-sm text-left" role="alert">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="cta-email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="cta-email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                inputMode="email"
                className={`w-full px-4 py-4 sm:py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-base transition-colors ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
                required
                aria-describedby={errors.email ? "cta-email-error" : undefined}
              />
              {errors.email && (
                <p id="cta-email-error" className="mt-1 text-red-300 text-sm text-left" role="alert">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="cta-message" className="sr-only">Your Message</label>
              <textarea
                id="cta-message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-4 sm:py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-base transition-colors resize-vertical ${
                  errors.message ? "border-2 border-red-500" : ""
                }`}
                required
                aria-describedby={errors.message ? "cta-message-error" : undefined}
              ></textarea>
              {errors.message && (
                <p id="cta-message-error" className="mt-1 text-red-300 text-sm text-left" role="alert">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-primary font-semibold py-4 sm:py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[44px] text-base ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white font-semibold py-4 sm:py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[44px] flex items-center justify-center text-base"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
