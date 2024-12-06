import { useContext } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import {CartContext} from '../../contexts/CartContexts'
import CardItem from "../../components/CartItem"

export default function Cart(){
    const { Cart, addItemCart, removeItemCart } = useContext(CartContext)

    return(
        <View style={styles.container}>
            <FlatList 
                data={Cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={ () =><Text>Nenhum item na lista</Text>}
                renderItem={ ({item}) =>  (
                    <CardItem 
                        data={item}
                        addAmount={ () => addItemCart(item) }
                        removeAmount={ () => removeItemCart(item) }
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fafafa',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    }
})