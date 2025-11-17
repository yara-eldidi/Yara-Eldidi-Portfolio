import { useEffect } from "react";

export default function ThreeBackground() {
  useEffect(() => {
    // Check if gradient already exists
    let gradient = document.querySelector('.animated-gradient');
    if (!gradient) {
      gradient = document.createElement("div");
      gradient.className = "animated-gradient";
      document.body.appendChild(gradient);
    }

    // Check if style already exists
    let style = document.getElementById('animated-gradient-style');
    if (!style) {
      style = document.createElement("style");
      style.id = 'animated-gradient-style';
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
    }

    // Function to update background based on dark mode
    const updateBackground = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        gradient.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1a1f35, #222637, #2a2f45);
          background-size: 400% 400%;
          z-index: -2;
          animation: moveGradient 10s ease infinite;
          overflow: hidden;
        `;
      } else {
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
      }
    };

    // Initial update
    updateBackground();

    // Watch for dark mode changes
    const observer = new MutationObserver(updateBackground);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
