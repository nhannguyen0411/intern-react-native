import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Button, AsyncStorage } from 'react-native';
import axios from 'axios';

class ScreenTask extends Component {
    state = {
        data: [
            {
                url: require('../image/buffet.jpg'),
                urlImage: require('../image/click.png'),
                title: `[2711] Huyền Merchant`,
                description: `[2911] Share 2 Earn - Network redeem`,
                note: 'Share to Earn'
            },
            {
                url: require('../image/buffet.jpg'),
                urlImage: require('../image/click.png'),
                title: `[2711] Huyền Merchant`,
                description: `[2911] Share 2 Earn - Network redeem`,
                note: 'Share to Earn'
            }
        ],
        user: {}
    }

    componentDidMount = async () => {
        const _id = await AsyncStorage.getItem('_id');
        console.log(this.props.navigation);
        await axios.get('https://jy5qp.sse.codesandbox.io/data')
        .then(res => {
            const user = res.data.find(item => item._id === _id);
            this.setState({
                user
            })
        })
    }

    _handleLogOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        const { data, user } = this.state;
        return (
            <ScrollView>
                <Text style={{textAlign: 'center'}}>{user.name}</Text>
                <Button onPress={this._handleLogOut} title="LogOut"/>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 22, fontWeight: "bold"}}>Ưu đãi mới</Text>
                        <TouchableOpacity style={{opacity: .9}} onPress={() => this.props.navigation.navigate('Login')}>
                            <Image source={require('../image/menu.png')} style={styles.icon_image}/>
                        </TouchableOpacity>
                    </View>
                    {
                        data.map( (item, index) => (
                            <View style={styles.container_component}>
                                <View style={styles.container_image}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Image style={{width: 'auto', height: 250, borderRadius: 10}} source={item.url} />
                                    </TouchableOpacity>
                                    <View style={styles.container_image_text}>
                                        <Image style={{borderRadius: 50, width: 50, height: 50}} source={item.url} />
                                        <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'white'}}>{item.title}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={styles.container_text}>
                                        <Text style={styles.text}>{item.description}</Text>
                                        <Text style={styles.text_mute}>{item.note}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        position: "relative",
        backgroundColor: '#DDD'
    },
    container_component: {
        marginTop: 20
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    container_image: {
        position: "relative",
    },
    icon_image: {
        width: 26,
        height: 26
    },
    container_image_text: {
        position: "absolute",
        bottom: 10,
        left: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_text: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '700'
    },
    text_mute: {
        fontSize: 18,
        paddingVertical: 10,
        color: '#888'
    }
});
export default ScreenTask;