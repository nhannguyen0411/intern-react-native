import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../contexts/Cart';
import Star from '../image/star.png';
import HalfStar from '../image/starhalf.png';
import HeaderDetail from '../components/HeaderDetail';
class ScreenDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: () => <HeaderDetail onTrans={navigation.getParam("onTrans")} />,
            headerStyle: {
                backgroundColor: 'rgb(33, 150, 243)'
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
    }
    state = {
        slide: []
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({ onTrans: this._handleOnPressCart});
    }

    UNSAFE_componentWillMount() {
        const navigate = this.props.navigation;
        const data = navigate.getParam("id");
        this.setState({
            slide: data.slide
        })
    }

    _handleOnPressCart = () => {
        this.props.navigation.navigate('Cart');
    }

    _handleOnChangeStatus = (index) => () => {
        let i = 0;
        let img = Star;
        this.state.slide.map( item => {
            i++;
            if(i === index + 1) {
                item.focus = true;
                img = item.slideImage
            } else {
                item.focus = false;
            }
        });
        this.setState({slide: this.state.slide, currentImage: img});
    }

    render() {
        const navigate = this.props.navigation;
        const data = navigate.getParam("id");
        const { slide } = this.state;
        return (
            <ScrollView>
                <Image resizeMode="stretch" source={ this.state.currentImage ? this.state.currentImage : data.slide[0].slideImage} style={{width: 'auto', height: 420, marginBottom: 10}}/>
                <View style={styles.container_slideImage}>
                    {
                        slide.map( (item, index) => (
                            <TouchableOpacity key={index} onPress={this._handleOnChangeStatus(index)} style={[{marginHorizontal: 1}, item.focus && styles.borderIconImage]}>
                                <Image source={item.slideImage} style={{width: 40, height: 40}} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{marginHorizontal: 10}}>
                    <View style={styles.container_chooseColor}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Màu: Chưa chọn</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize: 17, color: "blue"}}>CHỌN ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={data.imageBrand} style={{width: 65, height: 26}}/>
                        <Text style={[styles.fontText, {marginLeft: 10, marginRight: 80}]}>{data.name}</Text>
                    </View>
                    <View style={styles.container_star}>
                        <Image source={Star} style={{width: 16, height: 16}}/>
                        <Image source={Star} style={{width: 16, height: 16}}/>
                        <Image source={Star} style={{width: 16, height: 16}}/>
                        <Image source={Star} style={{width: 16, height: 16}}/>
                        <Image source={HalfStar} style={{width: 16, height: 16}}/>
                        <Text style={{color: 'blue', fontSize: 16}}>{`(XEM 241 NHẬN XÉT)`}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.fontText}>{data.price} đ</Text>
                        {
                            data.show && <View style={{marginLeft: 10, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 16, color: '#444', textDecorationLine: 'line-through'}}>{data.discountPrice}</Text>
                                <Text style={{marginLeft: 10, fontSize: 16, color: '#444'}}>{data.discount}</Text>
                            </View>
                        }
                    </View>
                    <Text style={[styles.fontText, {color: 'green'}]}>>>> GIAO NHANH 2H</Text>
                    <CartContext.Consumer>
                        {
                            ({ addToCart }) => (
                                <TouchableOpacity onPress={() => addToCart(data)} style={styles.btn}>
                                    <Text style={styles.text_btn}>Chọn Mua</Text>
                                </TouchableOpacity>
                            )
                        }
                    </CartContext.Consumer>
                </View>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    container_slideImage: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    container_chooseColor: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#DEE',
        padding: 10,
        backgroundColor: '#CCC',
        borderRadius: 5
    },
    container_star: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fontText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        width: 'auto', 
        backgroundColor: 'red', 
        borderRadius: 5,
        marginVertical: 20
    },
    text_btn: {
        fontSize: 17, 
        textAlign: 'center', 
        color: 'white', 
        paddingVertical: 10
    },
    borderIconImage: {
        borderColor: '#AAA', 
        borderWidth: 1, 
        borderStyle: 'solid', 
        borderRadius: 5, 
        paddingVertical: 5, 
        paddingHorizontal: 2
    }
});
export default ScreenDetail;