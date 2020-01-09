import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
class ScreenRegister extends Component {
    state = {
        data: [],
        username: '',
        password: '',
        phone: '',
        isLogin: false,
        err: ''
    }

    componentDidMount() {
        axios.get('https://jy5qp.sse.codesandbox.io/data')
        .then(res => {
            this.setState({data: res.data})
        })
    }

    onLogin = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        const { username, password, phone } = this.state;
        return (
            <ScrollView>
                <View>
                    <View style={styles.container_header_top}>
                        <Text style={{color: 'white', fontSize: 20}}>Đăng nhập / Đăng ký</Text>
                    </View>
                    <View style={styles.container_header_bottom}>
                        <TouchableOpacity onPress={this.onLogin} style={styles.container_header_login} activeOpacity={0.6}>
                            <Text>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container_header_login} activeOpacity={0.6}>
                            <Text>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container_body}>
                    <View style={styles.container_formInput}>
                        <TextInput
                        value={username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'Username'}
                        style={styles.input}
                        />
                        <TextInput
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                        />
                        <TextInput
                        value={phone}
                        onChangeText={(phone) => this.setState({ phone })}
                        placeholder={'Phone number'}
                        style={styles.input}
                        />
                        <Button
                            style={styles.btnRegister}
                            title={'Register'}
                            onPress={this.onRegisterAccount}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container_header_top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(33, 150, 243)',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    container_header_bottom: {
        flex: 1,
        flexDirection: 'row'
    },
    container_header_login: {
        paddingVertical: 12,
        paddingHorizontal: 75,
        backgroundColor: '#bbb'
    },
    container_body: {
        paddingHorizontal: 10
    },
    container_formInput: {

    },
    input: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: '#bbb'
    },
    btnLogin: {
        paddingVertical: 20,
        fontSize: 18,
        fontWeight: '700',
        backgroundColor: '#f00',
        color: 'red'
    },
    container_loginOther: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    text: {
        textAlign: 'center', 
        paddingVertical: 10
    },
    buttonOther: {
        backgroundColor: '#49a8f9',
        paddingVertical: 12,
        paddingHorizontal: 48
    },
    iconImage: {
        width: 32,
        height: 32
    }
});
export default ScreenRegister;