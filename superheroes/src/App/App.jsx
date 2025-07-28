
import './App.scss'
import Item from "../Components/Item/Item";
import heroes from '../data/heroes.json';


function App() {
    return (
      <>
      {heroes.map((item, index) => (
    <Item content={item} key={index}/>
    ))}
    </>
    );
}

export default App;
