import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Comprehensive Technology Solutions
        </h1>
        <p className="text-xl text-foreground-secondary mb-10 max-w-3xl mx-auto">
          Software Development • IT Consulting • SaaS Products • Computer Repair
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
          <Link
            href="/portfolio"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
