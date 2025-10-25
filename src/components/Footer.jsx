import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-grey-0 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* 左侧文字 */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Cherno’s Portfolio</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* 中间导航 */}
        <div className="flex items-center space-x-4 px-4">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* 右侧社交图标 */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a
            href="https://github.com/zoya-Heyan"
            target="_blank"
            className="text-[#181717] hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCCIV8A48isLB5z-rBFo5sUQ"
            target="_blank"
            className="text-[#FF0000] hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="mailto:chenjinhe300@gmail.com"
            className="text-[#EA4335] hover:scale-110 transition-transform duration-300"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
