import React, {useState, useContext} from "react"
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native"

import {Feather} from '@expo/vector-icons'
import Products from '../../components/Products'
import { useNavigation } from '@react-navigation/native'
import {CartContext} from '../../contexts/CartContexts'

export default function Home(){
    const { cart } = useContext(CartContext);

    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Cola Cola',
            price: 19.90
        },
        {
            id: '2',
            name: 'Chocolate',
            price: 5.50
        },
        {
            id: '3',
            name: 'Queijo 500G',
            price: 15.90
        },
        {
            id: '4',
            name: 'Batata frita 1Kg',
            price: 22.90
        },
        {
            id: '5',
            name: 'Guarana lata',
            price: 6.00
        },
    ])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de produtos</Text>

                <TouchableOpacity 
                style={styles.cartButton} 
                onPress={ () => navigation.navigate('Cart') }
                >
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>
                            {cart?.length}
                        </Text>
                    </View>
                    <Feather name="shopping-cart" size={33} color='#000' />
                </TouchableOpacity>

            </View>

            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <Products data={item} /> }
            />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fafafa',
        paddingEnd: 10,
        paddingStart: 10,
    },
    cartContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: 24,
        marginBottom: 24
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4
    },
    dotText:{
        fontSize: 12
    }
})