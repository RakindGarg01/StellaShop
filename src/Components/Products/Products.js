import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";


const Products = ({onAddItem , onRemoveItem}) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);
    const [presentItems , setpresentItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://stella-shop-fbfbb-default-rtdb.firebaseio.com/.json')
                const data = response.data
                console.log(data)
                const transformedData = data.items.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                setItems(transformedData)
            }
            catch (error) {
                console.log("Error : ", error)
                // alert("Some Error Occurred");
            }
            finally{
                setLoader(false);
            }
        }

        fetchItems();
    }, [])


    const handleAddItem = id => {
        if(presentItems.indexOf(id) > -1){
            return;
        }
        setpresentItems([...presentItems , id]);
        onAddItem();
    }

    const handleRemoveItem = id => {
        let index = presentItems.indexOf(id);
        if(index >-1){
            let items = [...presentItems]
            items.splice(index , 1)
            setpresentItems([...items]);

        }
        onRemoveItem();
    }

    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {/* <ListItem data={ items[0] }></ListItem>

                    <ListItem data={ items[1] }></ListItem>

                    <ListItem data={ items[2] }></ListItem>

                    <ListItem data={ items[3] }></ListItem>

                    <ListItem data={ items[4] }></ListItem> */}

                    {
                        items.map(item => {
                            return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />)
                        })
                    }
                </div>    
            </div>
            {loader && <Loader/>}
        </>)
}
export default Products;