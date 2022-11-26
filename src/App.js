import './App.css';
import Products from './Components/Products/Products';
// import ListItem from './Components/Products/ListItems/ListItem';
import Navbar1 from './Components/Navbar1';
import SubHeader from './Components/SubHeader';
import {useState} from "react";
function App() {

  const [cartItem , setcartItem] = useState(0);

  const handleAddItem = () =>{
    setcartItem(cartItem + 1)
  }

  const handleRemoveItem = () =>{
    setcartItem(cartItem - 1)
  }

  return (
    <>
    <Navbar1 count={cartItem}/>
    <SubHeader/>
    <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}></Products>
    
    
    
    </>
  );
}

export default App;
