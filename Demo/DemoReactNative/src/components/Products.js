import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Star from '../image/star.png';
import HalfStar from '../image/starhalf.png';
class Products extends Component {
    render() {
        const { data, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={{marginRight: 100}}>
                <View style={styles.container_component}>
                    <Image resizeMode='stretch' source={data.images} style={{width: '50%', height: '100%'}} />
                    <View style={styles.container_right}>
                        <Image source={data.imageBrand} style={{width: 80, height: 32}} />
                        <Text style={styles.text_name}>{data.name}</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.text_name}>{data.price} đ</Text>
                            {
                                data.show && <Text style={{color: '#444', marginLeft: 10, fontSize: 16}}>{data.discount}</Text>
                            }
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.text_delivery}>>>> GIAO NHANH 2H</Text>
                        </TouchableOpacity>
                        <View style={styles.container_star}>
                            <Image source={Star} style={{width: 16, height: 16}}/>
                            <Image source={Star} style={{width: 16, height: 16}}/>
                            <Image source={Star} style={{width: 16, height: 16}}/>
                            <Image source={Star} style={{width: 16, height: 16}}/>
                            <Image source={HalfStar} style={{width: 16, height: 16}}/>
                            <Text style={{fontSize: 16}}>{`(241)`}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container_component: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15
    },
    container_right: {
        marginHorizontal: 10,
        marginRight: 40
    },
    container_star: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_name: {
        fontSize: 17,
        fontWeight: "bold"
    },
    text_delivery: {
        fontSize: 17,
        color: 'green',
        padding: 0,
        margin: 0
    }
});

export default Products;