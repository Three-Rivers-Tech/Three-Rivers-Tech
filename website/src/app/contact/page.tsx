import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { GoogleCalendarIframe } from "@/components/OptimizedIframe";

export default function ContactPage() {

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed px-2">
            {`We're your hometown tech partners here in Turtle Creek. Request a free assessment of your tech needs - we're here to help with simple, affordable solutions.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Book Your Visit</h2>
            <div className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary mb-4 sm:mb-6 leading-relaxed">
                {`Schedule a free assessment with our local team. We'll come to your home or business in Turtle Creek and surrounding areas. Contact us via email or schedule a visit below.`}
              </p>
              {/* Google Bookings Embed */}
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <GoogleCalendarIframe 
                  src="https://calendar.app.google/1EwGScdmrC1dcwMR8"
                  className="google-calendar-iframe w-full"
                  height={500}
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Ready to Get Started?</h3>
                <p className="text-blue-700 mb-4">
                  {`The easiest way to get help is to call us directly or schedule a visit using the calendar below. We'll discuss your tech needs and provide a free assessment.`}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-800 mr-2">📞</span>
                    <span className="text-blue-700">Call us: (412) 403-5559</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-800 mr-2">📧</span>
                    <a 
                      href="mailto:info@threeriverstech.com?subject=Tech Help Request&body=Hi! I need help with:%0D%0A%0D%0ADevice Type: %0D%0AProblem: %0D%0A%0D%0APlease contact me to schedule a visit.%0D%0A%0D%0AThank you!"
                      className="text-blue-700 hover:text-blue-900 underline"
                    >
                      Email us: info@threeriverstech.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-800 mr-2">📅</span>
                    <span className="text-blue-700">Or schedule below using our calendar</span>
                  </div>
                </div>
              </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Response Time</h3>
              <p className="text-green-700 text-sm">
                We typically respond to all emails within 24 hours during business days. 
                For urgent issues, please call us directly at (412) 403-5559.
              </p>
            </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">Contact Information</h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 sm:p-4 mr-3 sm:mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Phone</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground-secondary">
                    <a 
                      href="tel:+1Shop Number Coming Soon!"
                      className="text-primary hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-1 -m-1"
                    >
                      (412) 403-5559
                    </a>
                  </p>
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
