import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Tawk.to widget script
    const tawkPropertyId = import.meta.env.VITE_TAWK_PROPERTY_ID;
    const tawkWidgetId = import.meta.env.VITE_TAWK_WIDGET_ID;

    if (!tawkPropertyId || !tawkWidgetId) {
      console.warn('Tawk.to credentials not configured');
      return;
    }

    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Cleanup
    return () => {
      // Remove Tawk.to widget on unmount
      const tawkWidget = document.getElementById('tawkId');
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LiveChat;
