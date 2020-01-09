import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';


class Task extends Component {
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
        ]
    }
    render() {
        const { data } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 22, fontWeight: "bold"}}>Ưu đãi mới</Text>
                        <TouchableOpacity style={{opacity: .9}} onPress={() => this.props.navigation.navigate('Home')}>
                            <Image source={require('../image/menu.png')} style={styles.icon_image}/>
                        </TouchableOpacity>
                    </View>
                    {
                        data.map( (item, index) => (
                            <View style={styles.container_component}>
                                <View style={styles.container_image}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Image style={{width: 100, height: 100, borderRadius: 10}} source={item.url} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View  style={styles.container_text}>
                                        <View>
                                            <Text style={styles.text}>{item.description}</Text>
                                            <Text style={styles.text_mute}>{item.note}</Text>
                                        </View>
                                        <View style={styles.container_image_text}>
                                            <Image style={{borderRadius: 50, width: 32, height: 32}} source={item.url} />
                                            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '700', color: '#555'}}>{item.title}</Text>
                                        </View>
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
        position: "relative"
    },
    container_component: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    icon_image: {
        width: 26,
        height: 26
    },
    container_image_text: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_text: {
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingVertical: 8
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    },
    text_mute: {
        fontSize: 16,
        paddingVertical: 5,
        color: '#888'
    }
});
export default Task;