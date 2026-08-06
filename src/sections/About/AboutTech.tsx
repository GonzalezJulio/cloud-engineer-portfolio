import { about } from "@/constants/about";
import { FaAws } from "react-icons/fa";
import ArgocdPlain from "devicons-react/icons/ArgocdPlain";
import {
  
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiLinux,
  SiGithubactions,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

const icons = {
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Linux: SiLinux,
  "GitHub Actions": SiGithubactions,
  Ansible: SiAnsible,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  "ArgoCD": ArgocdPlain,
};

export function AboutTech() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {about.skills.map((skill) => {
        const Icon = icons[skill.name as keyof typeof icons];
        const isArgoCD = skill.name === "ArgoCD";

        return (
          <div
            key={skill.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
          >
            {isArgoCD ? (
              <Icon size={48} color="#0284c7" className="mx-auto mb-4" />
            ) : (
              <Icon className="mx-auto mb-4 text-5xl text-sky-600" />
            )}

            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="mt-2 text-sm text-slate-500">{skill.description}</p>
          </div>
        );
      })}
    </div>
  );
}