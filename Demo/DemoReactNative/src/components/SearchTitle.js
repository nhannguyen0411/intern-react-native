import React, { Component } from 'react';
import { TextInput, TouchableOpacity, Image, View, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import { CartContext } from '../contexts/Cart';
import Cart from '../image/cart.png';
import More from '../image/more.png';

class SearchTitle extends Component {
    state = {
        searchInput: ''
    }

    render() {
        const { searchInput } = this.state;
        const { onTrans, onCount } = this.props
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}>
                <View style={{width: '65%', height: '70%'}}>
                    <TextInput
                        style={{backgroundColor: 'white'}}
                        onChangeText={(searchInput) => this.setState({searchInput})}
                        value={searchInput}
                        placeholder='Search gì' 
                    />
                </View>
                <CartContext.Consumer>
                    {
                        ({ count }) => (
                            <TouchableOpacity onPress={onTrans}>
                                <Text>Cart ({count})</Text>
                            </TouchableOpacity>
                            // <IconBadge
                            //     onPress={this._handleOnPress}
                            //     MainElement={
                            //     <View style={{backgroundColor:'#489EFE',
                            //         width:50,
                            //         height:50,
                            //         margin:6
                            //     }}/>
                            //     }
                            //     BadgeElement={
                            //         <Text style={{color:'#FFFFFF'}}>{cartItems.length}</Text>
                            //     }
                            //     IconBadgeStyle={
                            //         <Image source={Cart} style={{width: 32, height: 32}} />
                            //     }
                            //     Hidden={this.state.BadgeCount==0}
                            // />
                        )
                    }
                </CartContext.Consumer>
                <TouchableOpacity>
                    <Image source={More} style={{width: 32, height: 32}} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchTitle;