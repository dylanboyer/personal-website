import { useEffect } from 'react';

const useTimeWidget = (locationId) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.time.is/t.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        if (window.time_is_widget) {
          initializeTimeWidget(locationId);
        }
      } catch (error) {
        console.error('Error in time widget:', error);
        window.location.reload();
      }
    };

    window.onerror = function (message, source, lineno, colno, error) {
      console.error('Global error caught:', { message, source, lineno, colno, error });
      window.location.reload();
    };

    return () => {
      document.body.removeChild(script);
      window.onerror = null; // Clean up global error handler
    };
  }, [locationId]);
};

const initializeTimeWidget = (locationId) => {
  window.time_is_widget.init({ [locationId]: { time_format: '12hours:minutes:secondsAMPM' } });
};

export default useTimeWidget;
