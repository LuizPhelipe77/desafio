import React, {useState, createContext} from "react";

export const CartContext = createContext({})

function CartProvider({ children }){
    const [cart, setCart] = useState([]);

    function addItemCart(newItem){
        //ver se esse item ja esta no seu carrinho e ai adicionamos +1 quantidade
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            //se entrou aqui quer dizer que temosque adicionar +1 porque ele ja esta na lista

            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            return;
        }
        //adicionamos no carrinho
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
       
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;