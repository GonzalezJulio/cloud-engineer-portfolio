import MundosE from "@/assets/images/education/certificado-mundose.jpg";
import coderhouse from "@/assets/images/education/desarrollador-fullstack-coderhouse.png";
import udemy from "@/assets/images/education/python-udemy.png";


export interface Education {
  id: number;
  title: string;
  provider: string;
  image: string[];
  status: string;
  year: string;
  credential?: string;
  skills: string[];
}

export const education: Education[] = [
         {
                  id:1,
                  title: "DevOps Engineering Diploma",
                  provider: "Universidad Nacional de Córdoba & MundosE",
                  image: [MundosE],
                  status: "Completed",
                  year: "2024-2025",
                  credential: "https://certificados.mundose.com/?i=bW9kZT1QREYmcmVjb3JkPTM5eDMwMDkyODI=",
                  skills: [
    "Linux",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions",
    "Jenkins",
    "CircleCI",
    "Prometheus",
    "Grafana",
  ],
         },
         {
         id: 2,

         title: "Full Stack Web Development Career",

         provider: "CoderHouse",

         image: [coderhouse],

         status: "Completed",

         year: "2022-2024",
         skills: [
         "HTML5",
         "CSS3",
         "JavaScript",
         "React",
         "Node.js",
         "Express.js",
         "MongoDB",
         "REST APIs",
         "Git",
         "Responsive Design"
         ]
         },
         {
         id: 3,

         title: "Universidad Python – From Zero to Expert",

         provider: "Udemy | Global Mentoring",

         image: [udemy],

         status: "In Progress",

         year: "2025",
         skills: [
         "Python",
         "Flask",
         "Django",
         "FastAPI",
         "REST APIs",
         "SQLAlchemy",
         "PostgreSQL",
         "MySQL",
         "React",
         "Object-Oriented Programming"
         ]
         }
         ]
  