import { Helmet } from 'react-helmet-async';

export const GoogleAnalytics = () => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KUMPH47XF"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KUMPH47XF');
        `}
      </script>
    </Helmet>
  );
};