import { ServiceIcon } from "@/components/OptimizedImage";

export default function CommunityEducation() {
  return (
    <section className="py-16 bg-background-secondary rounded-2xl p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Community Education & Workshops</h2>
          <p className="text-foreground-secondary mb-6">
            We believe technology should be accessible to everyone in our community. That's why we offer free workshops and educational programs specifically designed for Turtle Creek residents and local small businesses.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Free monthly workshops at Turtle Creek Senior Center</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Basic computer skills for beginners and seniors</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Online safety and security training</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Smartphone and tablet training sessions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Digital marketing for local businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Downloadable guides and resources</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <a
              href="/learning-center"
              className="inline-flex items-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              View Workshop Schedule
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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