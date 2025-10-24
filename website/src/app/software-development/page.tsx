import { ServiceIcon } from "@/components/OptimizedImage";
import { generateServicePageMetadata, generateLocalSeoMetadata } from "@/lib/metadata-generators";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export const metadata = generateLocalSeoMetadata(generateServicePageMetadata("software-development"));

export default function SoftwareDevelopmentSkillsPage() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("service", {
        name: "Software Development Skills - Three Rivers Tech",
        description: "Comprehensive software development expertise including web applications, mobile apps, API development, and cutting-edge technology solutions.",
        url: "https://threeriverstech.com/software-development",
        breadcrumbs: [
          { name: "Home", url: "https://threeriverstech.com" },
          { name: "Services", url: "https://threeriverstech.com/services" },
          { name: "Software Development", url: "https://threeriverstech.com/software-development" }
        ],
        serviceName: "Custom Software Development",
        serviceDescription: "Professional custom software development services including web applications, mobile apps, APIs, and enterprise software solutions."
      })} />
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Development Expertise</h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Technical Skills</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-foreground-secondary">
                  Creating responsive, interactive user interfaces using modern frameworks like React, Next.js, Vue.js, and Angular.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-foreground-secondary">
                  Building robust server-side applications with Node.js, Python, Java, and .NET, ensuring scalability and performance.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-foreground-secondary">
                  Developing cross-platform mobile applications using React Native, Flutter, and native iOS/Android technologies.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                <p className="text-foreground-secondary">
                  Expertise in SQL and NoSQL databases including PostgreSQL, MySQL, MongoDB, and Redis for optimal data management.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ServiceIcon 
              service="dev"
              size="large"
              className="rounded-xl w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        <div className="bg-background-secondary rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Development Methodologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-lg">
              <div className="text-primary text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
              <p className="text-foreground-secondary">
                Iterative approach with continuous feedback and improvement cycles
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg">
              <div className="text-primary text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">DevOps Practices</h3>
              <p className="text-foreground-secondary">
                CI/CD pipelines, automated testing, and deployment strategies
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg">
              <div className="text-primary text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-foreground-secondary">
                Comprehensive testing including unit, integration, and end-to-end testing
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">TypeScript</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">React</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Next.js</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Node.js</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Python</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Java</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">C#</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">PostgreSQL</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">MongoDB</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-foreground-secondary mb-8">
              Our team stays current with the latest technologies and best practices to deliver innovative solutions that drive your business forward.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
