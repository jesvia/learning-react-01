// import logo from './logo.svg';
// import './App.css';
// this is the parent compnonent, so everythin is imported to this
import Header from './Header'; //no need to add .js
// this Header is a custom element
import Content from './Content';
import Footer from './Footer';
function App() {
  // in this 'return' it looks like html file but it is jsx, it is returning jsx
  // jsx - js is xml -- resembles html -- not quite the same + allows us to put js expressions
  // like instead of class there is className
  // anything simply written in jsx will be rendered as text
  // but if you use {"x"} now it is rendered as a string with value x
  // arrays allowed {[1, 2, 3]}
  // like now it is an expression with a value , CANT RENDER OBJECTS THO
  // like {{a:1, b:1}} -- will give error
  // BOOLEANS also not rendered
  return (
    <div className="App">
      <Header/> 
      {/* here see, the Header is a custom element */}
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
