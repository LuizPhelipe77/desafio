import React, {useState, createContext} from "react";

export const CartContext = createContext({})

function CartProvider({ children }){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    function addItemCart(newItem){
        //ver se esse item ja esta no seu carrinho e ai adicionamos +1 quantidade
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            //se entrou aqui quer dizer que temos que adicionar +1 porque ele ja esta na lista

            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            totalResultCart(cartList)

            return;
        }
        //adicionamos no carrinho
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)
        //quando tiver mais que um diminuida quntidade
        if(cart[indexItem]?.amount > 1){
            let cartList = cart;
                //diminui a quantidade
            cartList[indexItem].amount = cartList[indexItem].amount - 1;
                //recalcula o total
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList)
            return;
        }
        // se for igual a um, remove da lista
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultCart(removeItem)

    }
            //acc = acululador
            //obj = obejeto 'item'
    function totalResultCart(items){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)

        setTotal(result.toFixed(2));
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;