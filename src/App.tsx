import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacebookLogin from 'react-facebook-login';

function App() {
  const [count, setCount] = useState(0)

  const responseFacebook = (response: never) => {
      console.log(response);
      // Aqui você pode enviar o token para o seu backend para autenticação
  };


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FacebookLogin
        appId="979624796900913"
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </>
  )
}

export default App
