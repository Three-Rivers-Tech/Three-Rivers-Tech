"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { GoogleCalendarIframe } from "@/components/OptimizedIframe";
import { useAnalytics } from "@/components/Analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const analytics = useAnalytics();

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
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json(); // Consume the response but don't store it
        setSubmitStatus("success");
        
        // Track successful form submission
        analytics.trackFormSubmission('contact_form', true);
        
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000); // Reset after 5 seconds
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        setSubmitStatus("error");
        
        // Track form submission error
        analytics.trackFormSubmission('contact_form', false, errorData.error || 'API error');
      }
    } catch (error) {
      setSubmitStatus("error");
      
      // Track form submission error
      analytics.trackFormSubmission('contact_form', false, error instanceof Error ? error.message : 'Network error');
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
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            Get in touch with our team. We&apos;re here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Schedule a Meeting</h2>
            <div className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                Book a consultation or meeting with our team using Google Bookings scheduling.
              </p>
              {/* Google Bookings Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <GoogleCalendarIframe 
                  src="https://calendar.app.google/1EwGScdmrC1dcwMR8"
                  className="google-calendar-iframe w-full"
                  height={500}
                />
              </div>
            </div>

            {submitStatus === "error" && (
              <div 
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
                role="alert"
                aria-live="polite"
              >
                <p>
                  <strong>Error:</strong> Failed to send message. Please try again or contact us directly.
                </p>
              </div>
            )}

            {submitStatus === "success" && (
              <div 
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                role="alert"
                aria-live="polite"
              >
                <p>
                  <strong>Success:</strong> Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              <fieldset className="space-y-4 sm:space-y-6">
                <legend className="sr-only">Contact form</legend>
                
                <div>
                  <label htmlFor="name" className="block text-foreground-secondary mb-2 font-medium text-sm sm:text-base">
                    Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary text-base transition-colors min-h-[48px]"
                    placeholder="Your full name"
                    aria-describedby="name-help"
                    aria-invalid="false"
                  />
                  <div id="name-help" className="sr-only">
                    Enter your full name for us to address you properly
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground-secondary mb-2 font-medium text-sm sm:text-base">
                    Email <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary text-base transition-colors min-h-[48px]"
                    placeholder="your.email@example.com"
                    aria-describedby="email-help"
                    aria-invalid="false"
                  />
                  <div id="email-help" className="sr-only">
                    Enter a valid email address so we can respond to your message
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground-secondary mb-2 font-medium text-sm sm:text-base">
                    Subject <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary text-base transition-colors min-h-[48px]"
                    placeholder="How can we help you?"
                    aria-describedby="subject-help"
                    aria-invalid="false"
                  />
                  <div id="subject-help" className="sr-only">
                    Brief description of what you need help with
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground-secondary mb-2 font-medium text-sm sm:text-base">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background-secondary text-base transition-colors resize-vertical min-h-[120px]"
                    placeholder="Please provide details about your project or question..."
                    aria-describedby="message-help"
                    aria-invalid="false"
                  ></textarea>
                  <div id="message-help" className="sr-only">
                    Provide detailed information about your request or question
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[48px] text-base sm:text-lg"
                  aria-describedby="submit-help"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <div id="submit-help" className="sr-only">
                  {isSubmitting ? "Your message is being sent" : "Click to send your message to Three Rivers Tech"}
                </div>
              </fieldset>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Contact Information</h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 sm:p-4 mr-3 sm:mr-4 flex-shrink-0">
                  <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Phone</h3>
                  <a 
                    href="tel:+14124035559"
                    onClick={() => analytics.trackPhoneClick('(412) 403-5559')}
                    className="text-sm sm:text-base lg:text-lg text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1 -m-1"
                  >
                    (412) 403-5559
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 sm:p-4 mr-3 sm:mr-4 flex-shrink-0">
                  <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:info@threeriverstech.com"
                    onClick={() => analytics.trackEmailClick('info@threeriverstech.com')}
                    className="text-sm sm:text-base lg:text-lg text-foreground-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1 -m-1 break-all"
                  >
                    info@threeriverstech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 sm:p-4 mr-3 sm:mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Office Location</h3>
                  <address className="not-italic text-sm sm:text-base lg:text-lg text-foreground-secondary">
                    <p>124 Grant Street</p>
                    <p>Turtle Creek, PA 15145</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 sm:p-4 mr-3 sm:mr-4 flex-shrink-0">
                  <FaClock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Business Hours</h3>
                  <div className="text-sm sm:text-base lg:text-lg text-foreground-secondary space-y-1">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
