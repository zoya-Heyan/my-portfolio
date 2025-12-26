import { useRef, useEffect, useState } from "react";
import Travel1 from "../assets/Travel1.jpg"
import Travel2 from "../assets/Travel2.jpg"
import travel3 from "../assets/travel3.jpg"
import travel4 from "../assets/travel4.jpg" 

export default function About() { 
  const photos = [
    { src: Travel1, title: "St. andrews" },
    { src: Travel2, title: "Hong Kong" },
    { src: travel3, title: "Edingberh" },
    { src: travel4, title: "Scotland" },
  ];

  // 迷你高尔夫状态
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    let ball = { x: 100, y: height / 2, radius: 10, vx: 0, vy: 0, moving: false };
    let hole = {
  x: width - 50,
  y: height / 2,
  radius: 15,
};
    let dragging = false;
    let dragStart = { x: 0, y: 0 };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 背景
      ctx.fillStyle = "#c0f0c0";
      ctx.fillRect(0, 0, width, height);

      // 洞口
      ctx.beginPath();
      ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#333";
      ctx.fill();
      ctx.closePath();

      // 小球
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.closePath();

      // 拖动指示线
      if (dragging) {
        ctx.beginPath();
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(dragStart.x, dragStart.y);
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      }
    };

    const update = () => {
      if (ball.moving) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // 摩擦力
        ball.vx *= 0.98;
        ball.vy *= 0.98;

        // 边界碰撞
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -0.5;
        }
        if (ball.x + ball.radius > width) {
          ball.x = width - ball.radius;
          ball.vx *= -0.5;
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -0.5;
        }
        if (ball.y + ball.radius > height) {
          ball.y = height - ball.radius;
          ball.vy *= -0.5;
        }

        // 球停止
        if (Math.abs(ball.vx) < 0.1 && Math.abs(ball.vy) < 0.1) {
          ball.moving = false;
          ball.vx = 0;
          ball.vy = 0;
        }

        // 命中洞口
        const dx = ball.x - hole.x;
        const dy = ball.y - hole.y;
        if (Math.sqrt(dx * dx + dy * dy) < ball.radius + hole.radius) {
          setScore((prev) => prev + 1);
          showScoreEffect("+1");
          resetBall();
        }
      }

      draw();
      requestAnimationFrame(update);
    };

    const resetBall = () => {
      ball.x = 50;
      ball.y = height / 2;
      ball.vx = 0;
      ball.vy = 0;
      ball.moving = false;
    };

    const showScoreEffect = (text) => {
      const effect = document.getElementById("score-effect");
      effect.innerText = text;
      effect.style.opacity = 1;
      effect.style.transform = "translateY(-20px)";
      setTimeout(() => {
        effect.style.opacity = 0;
        effect.style.transform = "translateY(-40px)";
      }, 600);
    };

    const mouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dx = mx - ball.x;
      const dy = my - ball.y;
      if (Math.sqrt(dx * dx + dy * dy) <= ball.radius) {
        dragging = true;
        dragStart = { x: mx, y: my };
      }
    };

    const mouseMove = (e) => {
      if (dragging) {
        const rect = canvas.getBoundingClientRect();
        dragStart = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }
    };

    const mouseUp = (e) => {
      if (dragging) {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        ball.vx = (ball.x - mx) / 5; // 力度
        ball.vy = (ball.y - my) / 5;
        ball.moving = true;
        dragging = false;
      }
    };

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", mouseUp);

    update();

    return () => {
      canvas.removeEventListener("mousedown", mouseDown);
      canvas.removeEventListener("mousemove", mouseMove);
      canvas.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-black text-center mb-6">About Me</h1>
      <p className="text-lg leading-relaxed mt-4 md:mt-6 text-center">
        Hi! I'm Cherno, a computer enthusiast currently studying at UNNC. 
        I enjoy exploring web development, AI, and quantitative trading.
      </p>

      <div className="border-t-2 border-gray-200 border-dashed my-8"></div>

      <div className="text-4xl md:text-5xl text-center mb-10 font-semibold">
        in my free time
      </div>

      <p className="text-2xl mb-4">Travelling:</p>
      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative w-full md:w-1/4 overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-64 object-cover rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2 opacity-0 hover:opacity-100 transition-opacity duration-500">
              {photo.title}
            </div>
          </div>
        ))}
      </div>

      <p className="text-2xl mb-4 mt-4">Coding:</p>
      <div className="mt-6 bg-black text-green-400 font-mono rounded-2xl p-6 shadow-lg w-full md:w-3/4 mx-auto">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-3 text-gray-400">Fake Terminal</span>
        </div>
        <div id="terminal-output" className="h-56 overflow-y-auto">
          <p>&gt; Welcome to Cherno Terminal. Type <span className="text-blue-400">'help'</span> to begin.</p>
        </div>
        <div className="flex items-center mt-3">
          <span className="text-green-500 mr-2">$</span>
          <input
            id="terminal-input"
            type="text"
            placeholder="type a command..."
            className="bg-transparent border-none outline-none text-green-400 flex-1"
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                const input = e.target.value.trim();
                const output = document.getElementById("terminal-output");

                const line = document.createElement("p");
                line.innerHTML = `<span class='text-green-500'>$</span> ${input}`;
                output.appendChild(line);

                let response = "";
                switch (input.toLowerCase()) {
                  case "help":
                    response =
                      "Available commands:\nhelp - show this message\nrun code - simulate code execution\nclear - clear the terminal\nabout - about Cherno";
                    break;
                  case "run code":
                    response = "💻 Running code...\n✅ Code executed successfully!";
                    break;
                  case "about":
                    response =
                      "Cherno is a developer who loves AI, web dev, and building cool stuff.";
                    break;
                  case "clear":
                    output.innerHTML = "";
                    e.target.value = "";
                    return;
                  default:
                    response = "❌ Unknown command. Type 'help' to see options.";
                }

                const typeLine = async (text) => {
                  const p = document.createElement("p");
                  output.appendChild(p);
                  for (let i = 0; i < text.length; i++) {
                    p.innerHTML += text[i] === "\n" ? "<br/>" : text[i];
                    output.scrollTop = output.scrollHeight;
                    await new Promise((r) => setTimeout(r, 25));
                  }
                };

                await typeLine(response);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>

      <p className="text-2xl mb-4 mt-4">Sports:</p>
      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Mini Golf ⛳</h3>
        <canvas
          ref={canvasRef}
          className="border-2 border-gray-300 rounded-md cursor-pointer bg-green-200"
          width={600}
          height={300}
        />
        <p className="mt-2 text-lg relative">
          Score: <span className="font-bold">{score}</span>
          <span
            id="score-effect"
            className="absolute text-yellow-400 font-bold text-xl ml-2 opacity-0 transition-all"
          ></span>
        </p>
        <p className="text-gray-400 text-sm">
          Drag the ball to set direction and power, release to shoot!
        </p>
      </div>
    </div>
  );
}