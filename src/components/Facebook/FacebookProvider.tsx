import React, { useEffect } from 'react';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const FacebookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      console.log('Initializing Facebook SDK');
      window.FB.init({
        appId: '979624796900913',
        cookie: true,
        xfbml: true,
        version: 'v9.0',
      });
      console.log('Facebook SDK initialized');
    };

    (function (d, s, id) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
        console.log('Facebook SDK script inserted before');
      } else {
        d.head.appendChild(js); // Como fallback, adicione o script no head se fjs ou fjs.parentNode for nulo
        console.log('Facebook SDK script added to head');
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return <>{children}</>;
};

export default FacebookProvider;
