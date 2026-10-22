
import { useState } from "react";
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

const formspreeEndpoint = "https://formspree.io/f/meaajpdk";

const inputClasses =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

export function ServicioSection() {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  function openForm(service: string) {
    setSelectedService(service);
    setStatus("idle");

    setTimeout(() => {
      document.getElementById("service-contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service: selectedService,
          message,
          _replyto: email,
          _subject: `New portfolio inquiry: ${selectedService}`,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="services" className="scroll-mt-24 bg-slate-50 px-6 py-24">
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
                  <button
                    type="button"
                    onClick={() => openForm(service.title)}
                    className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700"
                  >
                    Discuss your project
                  </button>
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

        {selectedService && (
          <div
            id="service-contact-form"
            className="mx-auto mt-16 max-w-2xl scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9"
          >
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Let's talk
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-800">
                Discuss your project
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell me a little about what you need. I'll review your
                requirements and get back to you by email.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-800"
              >
                <p className="font-semibold">Message sent successfully!</p>
                <p className="mt-1">
                  Thank you for reaching out. I'll get back to you as soon
                  as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService("");
                    setStatus("idle");
                  }}
                  className="mt-4 font-semibold underline underline-offset-4"
                >
                  Close form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Full name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={120}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-slate-700"
                  >
                    Service *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other / Not sure yet">
                      Other / Not sure yet
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Project details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="What are you trying to deploy, automate, or improve?"
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong while sending your message. Please
                    try again or email me directly at
                    {" "}gonzalezjuliodev@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  Your information will only be used to respond to your
                  project inquiry.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
