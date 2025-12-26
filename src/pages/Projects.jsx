// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard"; 
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* 页面标题 */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl">
          A selection of my work.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}