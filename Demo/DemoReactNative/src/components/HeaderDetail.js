import React, {Component} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { CartContext } from '../contexts/Cart';
import IconBadge from 'react-native-icon-badge';
import Home from '../image/home.png';
import More from '../image/more.png';
import Cart from '../image/cart.png';
import Search from '../image/search.png';
class HeaderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ["..image/home.png", Home,  Cart,  More]
        }
    }

    _handleOnPress = () => {
        this.props.navigation.navigate('Cart');
    }

    render() {
        const {data} =this.state;
        const { onTrans } = this.props;
        return (
            <View style={styles.container}>
                {/* {
                    data.map( (item, index) => {
                        <TouchableOpacity>
                            <Image key={index} source={require(""+item)} style={{width: 32, height: 32}}/>
                        </TouchableOpacity>
                    })
                } */}
                <TouchableOpacity>
                    <Image source={Search} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Home} style={styles.iconImage}/>
                </TouchableOpacity>
                <CartContext.Consumer>
                    {
                        ({ count }) => (
                            <TouchableOpacity onPress={onTrans}>
                                <Text>Cart ({count})</Text>
                                {/* <IconBadge
                                    
                                    MainElement={
                                    <View style={{backgroundColor:'#489EFE',
                                        width:50,
                                        height:50,
                                        margin:6
                                    }}/>
                                    }
                                    BadgeElement={
                                    <Text style={{color:'#FFFFFF'}}>{cartItems.length}</Text>
                                    }
                                    IconBadgeStyle={
                                    {width:30,
                                    height:30,
                                    backgroundColor: '#FF00EE'}
                                    }
                                    Hidden={this.state.BadgeCount==0}
                                /> */}
                            </TouchableOpacity>
                            
                        )
                        // <TouchableOpacity>
                        //     <Image source={Cart} style={styles.iconImage}/>
                        // </TouchableOpacity>
                    }
                </CartContext.Consumer>
                <TouchableOpacity>
                    <Image source={More} style={styles.iconImage}/> 
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    iconImage: {
        width: 32,
        height: 32,
        marginHorizontal: 10
    }
})

export default HeaderDetail;