import { ServiceIcon } from "@/components/OptimizedImage";

export default function CommunityEducation() {
  return (
    <section className="py-16 bg-background-secondary rounded-2xl p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Community Education & Learning Center</h2>
          <p className="text-foreground-secondary mb-6">
            We believe technology should be accessible to everyone in our community. That's why we offer free workshops and educational programs specifically designed for Turtle Creek residents and local small businesses.
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Free Workshops & Training</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Basic Computer Skills:</strong> Perfect for beginners and seniors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Online Safety Training:</strong> Protect yourself from scams and viruses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Smartphone & Tablet Training:</strong> Get comfortable with your devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Email & Internet Basics:</strong> Stay connected with family and friends</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Small Business Digital Marketing</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Social Media for Local Shops:</strong> Facebook, Instagram basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Google My Business:</strong> Get found by local customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Simple Website Management:</strong> Update your own content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Online Reviews & Reputation:</strong> Build trust with customers</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Learning Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Downloadable Guides:</strong> Step-by-step tutorials you can keep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Video Tutorials:</strong> Watch and learn at your own pace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Tech Tips Newsletter:</strong> Monthly helpful hints and updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg mb-6">
            <p className="text-sm font-medium text-primary">
              📍 Workshops held monthly at Turtle Creek Senior Center and our Grant Street location. All workshops are FREE for community members!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/learning-center"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              View Workshop Schedule
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact?service=community-education"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Sign Up for Classes
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <ServiceIcon 
            service="education"
            size="large"
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}