import { ArrowUpRight, Box, GitBranch, Server } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Box,
    title: "Dockerization",
    description:
      "Package your application into Docker containers for a more consistent and portable deployment environment.",
    features: [
      "Dockerfile configuration",
      "Docker Compose setup",
      "Environment variables configuration",
    ],
    price: "US$50–100",
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
    price: "US$100–180",
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
    price: "US$150–300",
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
            DevOps Services
          </p>

          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Infrastructure. Automation. Delivery.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Practical deployment and automation solutions to help you run
            your applications with a more reliable and repeatable workflow.
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
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
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

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Indicative price
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-800">
                    {service.price}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Final pricing depends on project scope and requirements.
                  </p>
                </div>

                <a
                  href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Discuss your project
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
          Prices are estimates in USD. Cloud infrastructure, domains,
          hosting and other third-party services are billed separately.
          Every project is reviewed before a final quote is provided.
        </p>
      </div>
    </section>
  );
}