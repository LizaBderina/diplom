import { useEffect, useRef } from "react";

export default function useRevealOnScroll(threshold = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          node.classList.add("active");
          obs.unobserve(node);
        }
      },
      { threshold }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
