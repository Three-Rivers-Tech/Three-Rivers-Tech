import Image from "next/image";

export default function ComputerRepair() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Computer Repair</h2>
          <p className="text-foreground-secondary mb-6">
            Fast, reliable computer repair services for all your devices.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Hardware diagnostics and repair</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Software troubleshooting</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Data recovery services</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Preventive maintenance</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Remote support options</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/service-icon-repair.png"
            alt="Computer repair services including hardware diagnostics and data recovery"
            width={400}
            height={256}
            className="rounded-xl w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
