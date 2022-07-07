import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList"
import { getProducts } from "../../service/firebase";

const ItemListContainer = () => {  

    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        getProducts()
            .then((resolve) => {
                setProducts(resolve);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ItemList key={products} props={products} />
    )
}

export default ItemListContainer