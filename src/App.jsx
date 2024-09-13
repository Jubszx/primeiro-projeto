import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import Kishimoto from './assets/kenji.webp'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';


function App() {
  const n = 15
  const classeDiferente = false


  return (
    <div className="App">
      {/*<FirstComponent />
      <TemplateExpressions/>
      <MyComponent/>*/}

        <ComponentORemake/>

      <h1>Olha só um Texto</h1>

      {/*Css no proprio madulo*/}  
      <OutroComponent />

        {/*css inline*/}
      <p style={{color:"red", padding:"25px", backgroundColor:"blanchedalmond", fontSize:"40px"}}>Este parágrafo é do App.jsx</p>


      <h3 style={n > 10 ? ({color:'pink', backgroundColor: 'blueviolet',}) : ({color:'black', backgroundColor:'gray'}) }>AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO</h3>

      <h3 style={n < 10 ? ({color:'pink', backgroundColor: 'blueviolet',}) : ({color:'black', backgroundColor:'gray'}) }>AQUI TEM UM TEXTO COM O SEGUNDO ESTILO</h3>

      <h2 className={classeDiferente ? "red-title" : "normal-title"}>TEXTO COM CLASSE DIFERENTE 1</h2>


      {/*Importação pela pasta public*/ }
      <img src="./aaron.webp" width={900} height={500} />


      <img src={Kishimoto} alt="Imagem do Kenji Kishimoto" width={900} height={600} />
    </div>
  );
}

export default App;
