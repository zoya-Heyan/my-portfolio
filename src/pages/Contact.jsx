
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n5fuu39",   // <-- 替换
        "template_lwj0r2g",  // <-- 替换
        form.current,
        "MOEuZgWGXUM1fdY3O"    // <-- 替换
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* 左侧介绍卡 */}
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-6 bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>

          <h1 className="text-4xl font-extrabold text-blue-600">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
            I’d love to hear from you! Whether it’s about collaboration,
            programming, or just saying hi — feel free to reach out anytime.
          </p>

          <div className="flex gap-6 text-gray-600 dark:text-gray-300">
            <a
              href="mailto:youremail@example.com"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <Instagram size={26} />
            </a>
          </div>
        </div>

        {/* 右侧表单卡 */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl flex flex-col gap-5 border border-gray-100 dark:border-gray-700 transition-all"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Send a Message 💌
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-grey-100 dark:bg-grey-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            {sent ? "✅ Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}