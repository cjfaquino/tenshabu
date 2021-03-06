import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== '/' ? window.scrollTo(0, 400) : window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
