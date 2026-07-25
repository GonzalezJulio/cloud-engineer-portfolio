import deployPython from "../assets/images/deploy_python_aws.png";
import cicdPython from "../assets/images/cicd-python.png";
import devopsPlatform2 from "../assets/images/DevOps-platform-2.png";
import devopsPlatform3 from "../assets/images/Argo-DevOps-pĺatform.png";
import worldops from "../assets/images/WorldOps.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "WorldOps 2026 - Cloud Native Voting Platform",
    description:
      "Designed and deployed an end-to-end cloud-native voting platform on AWS using Kubernetes, Terraform, GitHub Actions, ArgoCD, and a complete observability stack with Prometheus and Grafana, following modern DevOps and GitOps practices.",
    image: worldops,
    github: "https://github.com/GonzalezJulio/worldops-2026",
    demo: "",
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    id: 2,
    title: "Cloud Native Observability Platform",
    description:
      "Built a cloud-native observability platform with Kubernetes, GitOps, Prometheus, Grafana, Loki, and ArgoCD, implementing automated deployments, rolling updates, centralized logging, and production-style monitoring.",
    image: devopsPlatform3,
    github: "https://github.com/GonzalezJulio/devops-platform-gitops",
    demo: "",
    technologies: [
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },

  {
    id: 3,
    title: "Cloud Native DevOps Platform",
    description:
      "Designed and implemented a cloud-native DevOps platform using Docker, Kubernetes, GitHub Actions, ArgoCD, and Prometheus, demonstrating infrastructure automation, GitOps workflows, observability, and continuous delivery practices.",
    image: devopsPlatform2,
    github: "https://github.com/GonzalezJulio/devops-platform",
    demo: "",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitOps",
      "ArgoCD",
      "GitHub Actions",
      "Prometheus",
    ],
  },

  {
    id: 4,
    title: "Automated CI/CD Pipeline",
    description:
      "Implemented an automated CI/CD pipeline for a Python application using GitHub Actions, Docker, and AWS EC2, enabling continuous integration, containerized deployments, and automatic application updates through Watchtower.",
    image: cicdPython,
    github: "https://github.com/GonzalezJulio/devops-cicd-docker",
    demo: "",
    technologies: [
      "Python (Flask)",
      "Docker",
      "GitHub",
      "GitHub Actions",
      "Docker Hub",
      "AWS EC2",
      "Watchtower",
    ],
  },

  {
    id: 5,
    title: "DevOps Python App Deployment",
    description:
      "Built and deployed a containerized Python application on AWS EC2 using Docker, demonstrating core DevOps concepts including containerization, cloud deployment, Linux administration, and remote server management.",
    image: deployPython,
    github: "https://github.com/GonzalezJulio/devops-python-ci-cd",
    demo: "",
    technologies: [
      "AWS EC2",
      "Docker",
      "Python",
      "Linux (Amazon Linux 2023)",
      "Docker Hub",
      "SSH",
    ],
  },
];