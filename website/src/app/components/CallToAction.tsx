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
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Ready to Transform Your Business Technology?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Schedule a comprehensive technology consultation to discover how our expert solutions can optimize your operations and drive growth
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 animate-scale-in animation-delay-400">
          {isClient && (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className={`w-full px-4 py-4 rounded-xl bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white text-base transition-all duration-300 border-2 ${
                  errors.name ? "border-red-400" : "border-transparent hover:border-white/30"
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
                className={`w-full px-4 py-4 rounded-xl bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white text-base transition-all duration-300 border-2 ${
                  errors.email ? "border-red-400" : "border-transparent hover:border-white/30"
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
                className={`w-full px-4 py-4 rounded-xl bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white text-base transition-all duration-300 resize-vertical border-2 ${
                  errors.message ? "border-red-400" : "border-transparent hover:border-white/30"
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
              className={`w-full bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-h-[48px] text-lg ${
                isSubmitting ? "opacity-70 cursor-not-allowed transform-none" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Request Consultation"}
            </button>
          </form>
          )}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-lg backdrop-blur-sm"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
