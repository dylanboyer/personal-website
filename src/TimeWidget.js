import { useEffect } from 'react';

const useTimeWidget = (locationId) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.time.is/t.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.time_is_widget) {
        initializeTimeWidget(locationId);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [locationId]);
};

const initializeTimeWidget = (locationId) => {
  window.time_is_widget.init({ [locationId]: { time_format: '12hours:minutes:secondsAMPM' } });
};

export default useTimeWidget;
