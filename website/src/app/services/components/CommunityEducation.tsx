import OptimizedImage from "@/components/OptimizedImage";

export default function CommunityEducation() {
  return (
    <section className="py-16 bg-background-secondary rounded-2xl p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Community Education & Learning Center</h2>
          <p className="text-foreground-secondary mb-6">
            We believe technology should be accessible to everyone in our community. That&apos;s why we offer free workshops and educational programs specifically designed for Turtle Creek residents and local small businesses.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Free Workshops & Training</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Basic Computer Skills:</strong> Perfect for beginners and seniors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Online Safety Training:</strong> Protect yourself from scams and viruses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Smartphone & Tablet Training:</strong> Get comfortable with your devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Email & Internet Basics:</strong> Stay connected with family and friends</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Small Business Digital Marketing</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Social Media for Local Shops:</strong> Facebook, Instagram basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Google My Business:</strong> Get found by local customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Simple Website Management:</strong> Update your own content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Online Reviews & Reputation:</strong> Build trust with customers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-2">Learning Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Downloadable Guides:</strong> Step-by-step tutorials you can keep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Video Tutorials:</strong> Watch and learn at your own pace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="bg-white/90 dark:bg-white/80 text-foreground px-2 py-0.5 rounded shadow-sm inline-block"><strong>Tech Tips Newsletter:</strong> Monthly helpful hints and updates</span>
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
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-4 rounded-xl relative overflow-hidden">
            {/* Education/Learning themed animated elements */}
            <div className="absolute top-6 right-5 w-7 h-8 bg-indigo-200/40 rounded animate-pulse [animation-delay:0.3s]">
              <div className="w-full h-1 bg-indigo-400/60 mt-1"></div>
              <div className="w-5 h-1 bg-indigo-300/40 mt-1"></div>
              <div className="w-4 h-1 bg-indigo-300/40 mt-1"></div>
              <div className="w-6 h-1 bg-indigo-300/40 mt-1"></div>
              <div className="w-3 h-1 bg-indigo-300/40 mt-1"></div>
            </div>
            <div className="absolute bottom-7 left-5 w-6 h-6 bg-blue-300/30 rounded animate-bounce [animation-delay:1.8s] [animation-duration:2.6s] border border-blue-400/40">
              <div className="absolute inset-1 bg-blue-400/30 rounded"></div>
              <div className="absolute top-2 left-2 w-2 h-1 bg-blue-500/60"></div>
            </div>
            <div className="absolute top-1/2 left-8 w-8 h-5 bg-indigo-300/50 rounded animate-ping [animation-delay:2.2s]">
              <div className="flex justify-between items-center h-full p-1">
                <div className="w-1 h-3 bg-indigo-400/60"></div>
                <div className="w-1 h-2 bg-indigo-400/60"></div>
                <div className="w-1 h-4 bg-indigo-400/60"></div>
                <div className="w-1 h-1 bg-indigo-400/60"></div>
              </div>
            </div>
            <OptimizedImage
              src="/community_ed.png"
              alt="Community Education & Learning Center - Free technology workshops and training for Turtle Creek residents"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              priority={false}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}