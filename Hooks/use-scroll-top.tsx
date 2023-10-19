import { useState, useEffect } from 'react'

export default function useScrollTop(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
        console.log("Scrolled:", scrolled);
      } else {
        setScrolled(false);
        console.log("Scrolled:", scrolled);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [threshold]);
  
  return scrolled;
}