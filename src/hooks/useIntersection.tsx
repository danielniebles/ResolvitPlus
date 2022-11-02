import { useEffect, useRef, useState } from "react";

const useIntersection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const onChange = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return { containerRef, isVisible };
};

export default useIntersection;
