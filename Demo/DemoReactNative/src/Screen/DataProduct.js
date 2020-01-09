import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import Vsmart from '../image/vsmart.jpg';
import iPhone from '../image/ip11promax.png';
import iPhone_Edge from '../image/iphong_edge.jpg';
import iPhone_Behind from '../image/iphone_behind.jpg';
import iPhone_Under from '../image/iphone_under.jpg';
import iPhone_Face from '../image/iphone_face.jpg';
import iPhone_Front from '../image/iphone_infrontof.jpg';
import Vsmart_behind from '../image/vsmart-behind.jpg';
import Vsmart_rightEdge from '../image/vsmart-edgeright.jpg';
import Vsmart_leftEdge from '../image/vsmart-edgeleft.jpg';
import Vsmart_face from '../image/vsmart-face.jpg';
import Tiki from '../image/tiki.jpg';
import SearchTitle from '../components/SearchTitle';
import ScreenProduct from './ScreenProduct';
class DataProduct extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: () => <SearchTitle onTrans={navigation.getParam("onTrans")} />,
            headerStyle: {
                backgroundColor: 'rgb(33, 150, 243)'
            }
        }
    }
    state = {
        data: [
            {
                id: 1,
                name: `Điện thoại Vsmart Live (64GB/6GB) - Hàng chính hãng`,
                price: `2.000.000`,
                images: Vsmart,
                imageBrand: Tiki,
                description: "abc",
                info: [
                    {
                        color: "red",
                        date: 2019
                    }
                ],
                slide: [
                    { slideImage: Vsmart, focus: true }, 
                    { slideImage: Vsmart_face, focus: false }, 
                    { slideImage: Vsmart_behind, focus: false }, 
                    { slideImage: Vsmart_leftEdge, focus: false },
                    { slideImage: Vsmart_rightEdge, focus: false }
                ],
                discount: '-58%',
                discountPrice: `8.000.000`,
                show: true
            },
            {
                id: 2,
                name: `Điện thoại Vivo Y17 - Hàng chính hãng`,
                price: `4.390.000`,
                images: Vsmart,
                imageBrand: Tiki,
                description: "abc",
                info: [
                    {
                        color: "red",
                        date: 2019
                    }
                ],
                slide: [
                    { slideImage: Vsmart, focus: true }, 
                    { slideImage: Vsmart_face, focus: false }, 
                    { slideImage: Vsmart_behind, focus: false }, 
                    { slideImage: Vsmart_leftEdge, focus: false },
                    { slideImage: Vsmart_rightEdge, focus: false }
                ],
                show: false
            },
            {
                id: 3,
                name: `IPhone 11 Pro Max 64GB - Hàng chính hãng`,
                price: `2.000.000`,
                images: iPhone,
                imageBrand: Tiki,
                description: "abc",
                info: [
                    {
                        color: "red",
                        date: 2019
                    }
                ],
                slide: [
                    { slideImage: iPhone, focus: true }, 
                    { slideImage: iPhone_Front, focus: false }, 
                    { slideImage: iPhone_Face, focus: false }, 
                    { slideImage: iPhone_Behind, focus: false },
                    { slideImage: iPhone_Edge, focus: false },
                    { slideImage: iPhone_Under, focus: false }
                ],
                discount: '-21%',
                discountPrice: `33.990.000`,
                show: true
            },
            {
                id: 4,
                name: `Điện thoại OPPO A5 (2020) 64GB - Hàng chính hãng`,
                price: `3.990.000`,
                images: Vsmart,
                imageBrand: Tiki,
                description: "abc",
                info: [
                    {
                        color: "red",
                        date: 2019
                    }
                ],
                slide: [
                    { slideImage: Vsmart, focus: true }, 
                    { slideImage: Vsmart_face, focus: false }, 
                    { slideImage: Vsmart_behind, focus: false }, 
                    { slideImage: Vsmart_leftEdge, focus: false },
                    { slideImage: Vsmart_rightEdge, focus: false }
                ],
                show: false
            },
            {
                id: 5,
                name: `Điện thoại iPhone 11 Pro 256GB - Hàng chính hãng`,
                price: `2.000.000`,
                images: Vsmart,
                imageBrand: Tiki,
                description: "abc",
                info: [
                    {
                        color: "red",
                        date: 2019
                    }
                ],
                slide: [
                    { slideImage: Vsmart, focus: true }, 
                    { slideImage: Vsmart_face, focus: false }, 
                    { slideImage: Vsmart_behind, focus: false }, 
                    { slideImage: Vsmart_leftEdge, focus: false },
                    { slideImage: Vsmart_rightEdge, focus: false }
                ],
                discount: '-7%' ,
                discountPrice: `34.990.000`,
                show: true
            }
        ]
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({ onTrans: this._handleOnPressCart});
    }

    _handleOnPressDetail = (value) => () => {
        this.props.navigation.navigate('DetailProduct', {id: value});
    }

    _handleOnPressCart = () => {
        this.props.navigation.navigate('Cart');
    }

    _handleLogOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        const { data } = this.state;
        return (
            <ScrollView>
                <ScreenProduct onNavigate={this._handleOnPressDetail} onLogOut={this._handleLogOut} data={data} />
            </ScrollView>
        )
    }
}
export default DataProduct;