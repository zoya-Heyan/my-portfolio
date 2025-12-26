import { Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105">
      <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover"/>
      <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} target="_blank" className="text-gray-600 hover:text-blue-600">
          <Github size={20}/>
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" className="text-gray-600 hover:text-green-500 font-semibold">
            Live
          </a>
        )}
      </div>
    </div>
  );
}

console.log("image:", project.image);