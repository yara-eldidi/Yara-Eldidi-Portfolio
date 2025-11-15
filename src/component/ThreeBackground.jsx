import { useEffect } from "react";

export default function ThreeBackground() {
  useEffect(() => {
    // 🔮 إنشاء الخلفية المتدرجة الأصلية
    const gradient = document.createElement("div");
    gradient.className = "animated-gradient";
    document.body.appendChild(gradient);

    gradient.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg,#f7f9d5 , #fff,#cad4f6);
      background-size: 400% 400%;
      z-index: -2;
      animation: moveGradient 10s ease infinite;
      overflow: hidden;
    `;

    // ✨ الأنماط
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes moveGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
