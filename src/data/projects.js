// src/data/projects.js
import draw from "../assets/drawer.jpg";
import trans from "../assets/trans.jpg";
import search from "../assets/searchEngine.png";


export const projects = [ 
  {
    title: "!Let's draw!",
    description: "",
    tech: ["cpp", "cmake", "makefile"],
    image: draw,
    github: "https://github.com/zoya-Heyan/Draw-your-own-painting",
  },
  {
    title: "static page for transforming",
    description: "png --> jpg or jpg --> png",
    tech: ["html", "CSS", "javascript"],
    image: trans,
    github: "https://github.com/zoya-Heyan/Static-websites-realise-format-conversion",
  },
  {
    title: "mini search engine linked to a database",
    description: "",
    tech: ["java", "spring boot", "mySQL"],
    image: search,
    github: "https://github.com/zoya-Heyan/websearch"
  },
];