import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Products from '../components/Products';
import Filter from '../image/filter.png';
import Order from '../image/order.png';
import Tiki from '../image/tiki.jpg';
import Location from '../image/location.png';
class ScreenProducts extends Component {
    state = {
        data: []
    }

    _handleOnCheck = () => {
        const { isChecked, data } = this.state;
        if(isChecked) {
            this.setState({data: this.props.data, isChecked: !isChecked});
        } else {
            const filter = data.filter( item => item.show === !isChecked );
            this.setState({ data: filter, isChecked: !isChecked})
        }
    }

    componentDidMount() {
        const { data } = this.props;
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
        const { onNavigate } = this.props;
        return (
            <ScrollView>
                <View style={styles.container_header}>
                    <View style={styles.component_header}>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>
                            <Image source={Order} style={{width: 32, height: 32}} />
                            <Text>Sắp xếp: </Text>
                            <Text style={{color: 'blue'}}>Bán chạy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Image source={Filter} style={{width: 32, height: 32}} />
                            <Text>Lọc</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.component_header}>
                        <Image source={Location} style={{width: 24, height: 24}} />
                        <Text style={{textDecorationLine: 'underline'}}>Phường 03, Quận Bình Thạn... </Text>
                        <Image resizeMode='stretch' source={Tiki} style={{width: '30%', height: '80%'}} />
                        <CheckBox
                            onValueChange={this._handleOnCheck}
                            value={this.state.isChecked}
                        />
                    </View>
                </View>
                <FlatList 
                    style={styles.container}
                    data={data}
                    renderItem={({item}) => <Products onPress={onNavigate(item)} data={item} order={item.id} />}
                    keyExtractor={(item) => `${item.id}`}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    container_header: {
        marginHorizontal: 20, 
        marginVertical: 20
    },
    component_header: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        paddingVertical: 10, 
        borderBottomWidth: 1, 
        borderColor: '#BBB', 
        borderStyle: 'solid'
    }
});
export default ScreenProducts;