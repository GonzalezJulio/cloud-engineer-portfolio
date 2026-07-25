import { about } from "@/constants/about";

export function AboutContent() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">
        {about.title}
      </h2>

      <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-slate-600">
        {about.description1}
      </p>

      <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-slate-600">
        {about.description2}
      </p>
    </div>
  );
}