import { useContext } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import {CartContext} from '../../contexts/CartContexts'
import CardItem from "../../components/CartItem"

export default function Cart(){
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

    return(
        <View style={styles.container}>
            <FlatList 
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={ () =><Text style={styles.noCart}>Adicione itens a lista...</Text>}
                renderItem={ ({item}) =>  (
                    <CardItem 
                        data={item}
                        addAmount={ () => addItemCart(item) }
                        removeAmount={ () => removeItemCart(item) }
                    />
                )}
                ListFooterComponent={() => <Text style={styles.total}>Total R$: {total} </Text>}
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
    },
    noCart:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    total:{
        fontSize:18,
        fontWeight: 'bold',
        marginBottom: 24
    }
})