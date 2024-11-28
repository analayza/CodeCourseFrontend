import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button';
import MyInput from './components/Input';
import MyArrowBack from './components/ArrowBack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyArrowBack/>
        <MyInput 
                textLabel="Nome" 
                typeInput="text" 
                placeholder="Digite seu nome" 
            />
            <MyInput 
                textLabel="Senha" 
                typeInput="password" 
                placeholder="Digite sua senha" 
            />
        <MyButton colorButton="black" text="Cadastrar"/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
