import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import avaters from "../assets/avaters.jpg"

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [confettiKey, setConfettiKey] = useState(0);

  const handleAvatarClick = () => {
    // 每次点击头像，改变 key
    setConfettiKey(prev => prev + 1);
  };

  return (
    <nav className="flex justify-center py-4 bg-white dark:bg-gray-900 transition-colors duration-500 relative">
      {/* 头像 */}
      <img
        src={avaters}
        alt="avatar"
        className="w-12 rounded-full border border-gray-100 shadow-sm absolute top-[20%] left-[95%] hover:scale-110 cursor-pointer z-10"
        onClick={handleAvatarClick}
      />

      {/* 彩带 */}
      <Confetti key={confettiKey} />

      {/* 导航栏 */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full shadow-md overflow-hidden border border-gray-300 dark:border-gray-700 transition-all duration-300">
        <button
          onClick={toggleDarkMode}
          className="p-3 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <div className="flex items-center space-x-4 px-4">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-gray-400">｜</span>
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
      </div>
    </nav>
  );
}

// 彩带组件
function Confetti() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-6 rounded-md animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 0.5}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          }}
        />
      ))}
    </div>
  );
}