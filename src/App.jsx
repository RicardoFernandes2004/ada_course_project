import React from "react";
import './styles/App.css'
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import coolcat from "./assets/images/shitpost-cat.png";
import killercar from "./assets/images/killer-car.jpeg";
import cookingcat from "./assets/images/logo.jpg";
import smolcar from "./assets/images/smol-car.jpg";
import { Counter } from "./components/Counter/Counter";


class App extends React.Component {

  // método responsável por renderizar o conteúdo html do nosso componente
  render() {
    return <div className="App">

      <NavBar/>

      <section className="articles">
        <Article title="Thumbs up cat" subtitle="very cool cat" description="            The Thumbs Up Cat is a cool and charming feline known for his
            distinctive gesture of giving a thumbs-up. This unique cat has
            become an internet sensation, spreading positivity and joy with his
            paw raised and thumb extended. His sleek fur, sharp eyes, and
            confident demeanor make him a standout. Loved for his playful and
            affectionate personality, Thumbs Up Cat interacts well with fans,
            bringing smiles to everyone he meets. His thumbs-up gesture is a
            universal symbol of approval and encouragement, reminding us all to
            stay positive and appreciate life's little moments." thumbnail = {coolcat}/>
        <Article title="Cooking cat" subtitle="he cooks" description="try his pasta, he swears its good" thumbnail = {cookingcat}/>
        <Article title="smol car" subtitle="he is very smol" description="this car is so smol poor car barely 1cm tall" thumbnail = {smolcar}/>
        <Article title="killer kitty" subtitle="he is right behind you" description="run" thumbnail={killercar}/>
      </section>

      <Counter />
      

    </div>;
  }

}

export default App;
