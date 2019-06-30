// First component
// parent component is rendered to an elemnt in index.html
// RETURNS JSX

class App extends React.Component {
  render(){
      return (
          <h1>React In Da BUILDING.</h1>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// can use any valid html  with in component renders return 
// class vs className
// Single JSX object
// RENDER called when component is rendered returning the JSX element
// to render to the dom

return(
  <div className="main-pokemon">
    <img src="animated/3.gif"></img>
    <h1><span>#3</span> Charizard </h1>
    <p> This guy breaths fire and is red and stuff.</p>
  </div>
  //or more
  <div className="main-pokemon">
      <img src="animated/3.gif"></img>
      <h1><span>#2</span> Venasaur </h1>
      <p> This guy breaths fire and is red and stuff.</p>
  </div>
  //but it requires one containing div
);

//can insert js into jsx with {}
<div className="main-pokemon">
  <img src="animated/3.gif"></img>
  <h1><span>{1+3}</span> {name} </h1>
  <p> This guy breaths fire and is red and stuff.</p>
</div>

//Back to NOTES--------------------------------------------------------------->
// After pokedex plan start component heirarcy
// repeating UI you can move to its own component

class MainPokemon extends React.Component  {
  render(){

    return(
      <div className="main-pokemon">
        <img src="animated/3.gif"></img>
        <h1><span>#3</span> Charizard </h1>
        <p> This guy breaths fire and is red and stuff.</p>
      </div>
    );
  }
}

// Dynamic components
// To customize components you use props
// props are to components as parameters are to functions

//passed to component
<MainPokemon name="name" number="1"></MainPokemon>

//in render
  console.log(this.props);

//can also use in jsx return 

    <div className="main-pokemon">
      <img src={`animated/${this.props.number}.gif`}></img>
      <h1><span>#3</span> {this.props.name}</h1>
      <p>{this.props.description}</p>
    </div>


//Back to Notes-------------------------------------------------------------------------->
//copy and paste from scrimba to boilerplate
//add more components in app

<Pokedex></Pokedex>

class Pokedex extends React.Component  {
  render(){
    return(
      <div className="pokedex">
        <div className="preview">
          <Pokemon ></Pokemon>
          <Pokemon ></Pokemon>
          <Pokemon ></Pokemon>
        </div>
        <MainPokemon number={1} name="ivysaur" description="green boi"></MainPokemon>
      </div>
    );
  }
}

//add pokemon component
class Pokemon extends React.Component  {
  render(){

      return(
      <div className="pokemon">
          <p>{this.props.number}</p>
          <img src={`animated/${this.props.number}.gif`}></img>
      </div>
      );
  }
}

//END LECTURE
//=====================================================================
//---------------------------------------------------------------------
//START BREAKOUT

//STATE
//in pokedex
constructor(props){
  super(props);
  this.state = {
      name : "bulbasaur",
      number: 1,
      description: "green boi"
  }
}
// add to 
<MainPokemon name={this.state.name} number={this.state.number}></MainPokemon>

// within classes functions can be declared without declarations

changePokemon(){
  this.state.number+=1;
}
//add onclick to component pass a reference to a function different from html 
//
<div onClick={this.changePokemon} className="preview">
</div>
// NOTHING??

// SETSTATE
changePokemon(){
  this.setState({
      number: this.state.number+1
  })
};
//ERROR have to bind this!
//EITHER
changePokemon = ()=>{};
//OR in constructor 
this.changePokemon = this.changePokemon.bind(this);

// pass functions down so that children can change state
<Pokemon changePokemon={this.changePokemon} name="charizard" number={1}></Pokemon>
//and in component
<div onClick={()=>{this.props.changePokemon(this.props.number)}} className="pokemon"></div>
//changePokemon function add parameter

//-----------------------------------------------------------------------

// Mapping/Looping
const pokemonArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let pokemons  = pokemonArray.map((element)=>{
  return(
      <Pokemon changePokemon={this.changePokemon} name="charizard" number={element}></Pokemon>
  );
})

//Conditional rendering
//add to pokemon components
selected={this.state.number} 
//in component
className={this.props.selected===this.props.number ? "pokemon selected" : "pokemon"}
//or 


//---------------------------------> VARRYINGWINDOW
// add start to pokedex state
pokemonArray = pokemonArray.splice(this.state.start, 4);
//
slidePreview = (int)=>{
  this.setState({start: this.state.start + int});
}

//
<div onClick={()=>{this.slidePreview(-1)}}>^</div>