import { Box, GitBranch, Server } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Box,
    title: "Dockerization",
    description:
      "Package your application into Docker containers for a consistent and portable deployment environment.",
    features: [
      "Dockerfile configuration",
      "Docker Compose setup",
      "Environment variables configuration",
    ],
  },
  {
    id: 2,
    icon: Server,
    title: "VPS / AWS Deployment",
    description:
      "Deploy your application to a VPS or AWS EC2 instance with the essential configuration to get it running.",
    features: [
      "Linux server setup",
      "Application deployment",
      "Basic HTTPS and networking configuration",
    ],
  },
  {
    id: 3,
    icon: GitBranch,
    title: "CI/CD Automation",
    description:
      "Automate your application's build and deployment process with a practical GitHub Actions workflow.",
    features: [
      "GitHub Actions pipeline",
      "Automated build and validation",
      "Deployment workflow configuration",
    ],
  },
];

export function ServicioSection() {
  const contactEmail = "gonzalezjuliodev@gmail.com";

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Cloud & DevOps Services
          </p>

          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Infrastructure. Automation. Delivery.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Practical deployment and automation services tailored to your
            application's requirements, with a focus on clear configuration
            and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const subject = encodeURIComponent(
              `Project inquiry: ${service.title}`
            );

            const body = encodeURIComponent(
              `Hi Julio,\n\nI'm interested in your ${service.title} service.\n\nProject details:\n`
            );

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-1 text-sky-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <a
                    href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
                    className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700"
                  >
                    Discuss your project
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
          Each project is evaluated individually. Scope, deliverables,
          timeline and pricing are agreed upon before work begins.
          Infrastructure, hosting, domains and third-party services
          are billed separately.
        </p>
      </div>
    </section>
  );
}