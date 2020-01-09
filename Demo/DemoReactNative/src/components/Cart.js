import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

class Cart extends Component {

    _changeFormat(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    render() {
        const { data, remove, increase, total } = this.props;
        return (
            <View style={styles.container}>
                {
                    data.map( (item, index) => (
                        <View key={index} style={styles.container_component}>
                            <Image resizeMode='stretch' source={item.images} style={{width: '50%', height: '90%', flexGrow: 1}}/>
                            <View style={styles.container_right}>
                                <View style={styles.container_quantity}>
                                    <Button color='rgb(33, 150, 243)' title='-' onPress={() => remove(item)} />
                                    <Text>{item.quantity}</Text>
                                    <Button color='rgb(33, 150, 243)' title='+' onPress={() => increase(item)} />
                                </View>
                                <Text style={styles.price}>{this._changeFormat(item.quantity * parseFloat(item.price.split('.').join('')))} VNĐ</Text>
                            </View>
                        </View>
                    ))
                }
                {
                    total === 0 ? <Text>Mua hàng đi anh ơi</Text> : 
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>{this._changeFormat(total)} VNĐ</Text>
                        <TouchableOpacity style={{width: '100%', backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 10}}>
                            <Text style={styles.price}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    container_component: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 250,
        borderRadius: 5,
        marginBottom: 15,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    container_right: {
        justifyContent: 'center',
        alignItems: 'stretch',
        flexGrow: 20,
        height: '100%',
        justifyContent: 'center'
    },
    container_quantity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexGrow: 15
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    price: {
        flexGrow: 5,
        textAlign: 'center'
    }
})

export default Cart;