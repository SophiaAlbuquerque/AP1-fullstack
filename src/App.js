import './App.css';
import Home from './componentes/home/home';
import Logo from "./componentes/logo/index"
import user from "./imgs/user.png"

const navbarOpcoes = ['Eventos', 'Esportes', 'Sobre']
const navbarIcones = [user]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcao'>
          { navbarOpcoes.map( (texto) => (
            <li className='opcoes'> <p>{texto}</p> </li>
          ))}
        </ul>

        <ul className='icones'>
          {navbarIcones.map((icone) => (
            <li className='icone'><img src={icone} width="50" height="50"></img></li>
          ))}
        </ul>
      </header>
      <main>
        <ul className='home'>
          <Home></Home>
        </ul>
      </main>
    </div>
  );
}

export default App;
