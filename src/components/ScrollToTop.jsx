import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Отключаем автоматическое восстановление скролла браузера
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Небольшая задержка для полного рендера DOM
    const timeoutId = setTimeout(() => {
      if (hash) {
        // Если есть hash (якорь), прокручиваем к элементу
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      } else {
        // Иначе прокручиваем в начало страницы
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
