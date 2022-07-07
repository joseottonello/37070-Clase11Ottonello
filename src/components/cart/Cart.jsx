import { useContext } from "react";
import Button from '@mui/material/Button';
import cartContext from "../../context/CartContext"

const Cart = () => {

    const {cart, removeToCart, totalCart, clearCart} = useContext(cartContext);

    return (
        <div>
            {
            cart.map((item) => 
                <div>
                    <div>
                        <img src={item.img} alt="" width="100" />
                    </div>
                    <div>
                        <p> {item.name} </p>
                        <p> ${item.price} </p>
                        <p> {item.detail} </p>
                        <p> Productos seleccionados: {item.cantidad} </p>
                        <p> subtotal: ${item.price * item.cantidad} </p>
                    </div>
                    <Button variant="contained" color="error" onClick={() => removeToCart(item.id)} >eliminar producto</Button>
                </div>)}
            <span>Total a pagar: ${totalCart().toFixed(2)} </span>
            <Button variant="cowntained" color="primary" onClick={clearCart}>Realizar compra</Button>
            <Button variant="contained" color="error" onClick={clearCart}>vaciar carrito</Button>
        </div>
    )
}

export default Cart