import { useEffect, useState, RefObject } from "react";

const useInView = <T extends HTMLElement>(ref: RefObject<T | null>, threshold = 0.1): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current; // Store in a variable to avoid potential null issues

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        /*if (entry.isIntersecting) {
            observer.disconnect(); // Stop observing once it becomes visible
          }*/
        
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, threshold]);

  return isVisible;
};

export default useInView;
