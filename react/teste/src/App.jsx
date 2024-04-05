
import Card from './components/Cards'
import './App.css'
import zeldaimg from "./assets/zelda.png";
import marioimg from "./assets/mario.png";
import sonicimg from "./assets/sonic.png";

function App() {

  const zeldatext = "The Legend of Zelda é um jogo eletrônico que se passa no reino de Hyrule, no qual o jovem guerreiro Link tem a missão de salvar seu povo, a Princesa Zelda e proteger a Triforce, símbolo deixado por deusas capaz de trazer ao mundo uma era de harmonia e prosperidade";
  const mariotext = "Mario é uma série de jogos eletrônicos de plataforma, criada pela Nintendo, baseada e estrelada pelo encanador fictício Mario.";
  const sonictext = "Sonic the Hedgehog é um jogo de videogame que conta a história de Sonic, um ouriço azul que corre em alta velocidade para impedir os planos do Dr. Ivo “Eggman” Robotnik de dominar o mundo.";

  return (
    <>
      <div className='Container'>
        <div>
          <Card title="The Legend of Zelda " img={zeldaimg} text={zeldatext} value={"R$ 234,55"}></Card>
          <Card title="Super Mario Bross" img={marioimg} text={mariotext} value={"R$ 134,55"}></Card>
        </div>
        <div>
          <Card title="Sonic Game" img={sonicimg} text={sonictext} value={"R$ 334,55"}></Card>
          <Card title="Sonic Game" img={sonicimg} text={sonictext} value={"R$ 334,55"}></Card>
        </div>
      </div>
    </>
  )
}


Card.defaultProps = {
  title: "Nenhum títuto foi adicionado",
  text: "Nenhum texto foi adicionado",
};

export default App
