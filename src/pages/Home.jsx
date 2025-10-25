import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="page-container text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mr. Chen</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          A Computer Science Student passionate about{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">AI</span> &{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">Quantitative Finance</span>.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
          >
            View My Projects <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="border border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 md:px-20 bg-yellow-50 dark:bg-gray-800 transition-all duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm currently studying Computer Science at UNNC. My interests include Machine Learning,
            Web Development, and Financial AI. I enjoy creating modern web applications and exploring
            how data can empower decision-making.
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-all duration-500">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Weather App",
              desc: "A Flask-based web app displaying real-time weather data.",
            },
            {
              title: "Stock Predictor",
              desc: "Machine learning model predicting stock trends using Python.",
            },
            {
              title: "Poker Game GUI",
              desc: "A Python Tkinter game featuring animations and smart logic.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
              <Link
                to="/projects"
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-950 transition-all duration-500">
        <h2 className="text-3xl font-bold text-center mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          {[
            "Python",
            "C / C++",
            "React",
            "TailwindCSS",
            "Flask",
            "Git & GitHub",
            "Docker",
            "VS Code",
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300"
            >
              <p className="font-medium text-gray-800 dark:text-gray-200">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 text-center transition-all duration-500">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to collaboration or interesting discussions about AI, finance, and web dev.
        </p>
        <a
          href="mailto:your_email@example.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}