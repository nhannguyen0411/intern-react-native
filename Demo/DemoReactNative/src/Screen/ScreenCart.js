import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CartContext } from '../contexts/Cart';
import Cart from '../components/Cart';
class ScreenCart extends Component {
    
    render() {
        return (
            <CartContext.Consumer>
                {
                    ({ cartItems, removeFromCart, countIncrease, sum }) => (
                        <ScrollView style={styles.container}>
                            <Cart data={cartItems} remove={removeFromCart} increase={countIncrease} total={sum} />
                        </ScrollView>
                    )
                }
            </CartContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    }
})

export default ScreenCart;