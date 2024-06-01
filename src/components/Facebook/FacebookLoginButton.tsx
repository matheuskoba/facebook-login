import React, { useState } from 'react';

const FacebookLoginButton: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = () => {
    setErrorMessage(null); // Resetando a mensagem de erro
    window.FB.login((response: any) => {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
        window.FB.api('/me', { fields: 'name,email,picture' }, (userInfo: any) => {
          console.log('Good to see you, ' + userInfo.name + '.');
          console.log(userInfo);
          // Aqui você pode enviar o token e as informações do usuário para o seu backend para autenticação
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
        console.log(response);
        setErrorMessage('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email' });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Facebook</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default FacebookLoginButton;
