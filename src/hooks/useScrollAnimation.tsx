import { useEffect } from "react";

/**
 * Hook to trigger CSS animation when elements scroll into view.
 * @param className The CSS class to observe
 */
export const useScrollAnimation = (className: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // triggers CSS animation
          } else {
            // Optional: remove 'active' if you want animation to replay
            // entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of element is visible
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [className]);
};
