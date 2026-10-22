
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
  ArgoCD: ArgocdPlain,
};

export function AboutTech() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {about.skills.map((skill) => {
        const Icon = icons[skill.name as keyof typeof icons];

        if (!Icon) return null;

        const isArgoCD = skill.name === "ArgoCD";

        return (
          <div
            key={skill.name}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 transition-colors hover:border-sky-300"
          >
            {isArgoCD ? (
              <Icon
                size={24}
                color="#0284c7"
                className="shrink-0"
              />
            ) : (
              <Icon className="shrink-0 text-2xl text-sky-600" />
            )}

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-slate-800">
                {skill.name}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-xs leading-4 text-slate-500">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
