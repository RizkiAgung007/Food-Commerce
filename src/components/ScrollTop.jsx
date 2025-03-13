import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 bg-green-500 p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all hover:bg-green-700 flex items-center justify-center 
      ${visible ? "block" : "hidden"}`}>
      <FaArrowUp className="text-white text-xl" />
    </button>
  );
}

export default ScrollToTop;
