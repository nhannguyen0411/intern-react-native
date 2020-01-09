import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage, Button } from 'react-native';
import Chat from '../image/chat.png';
import axios from 'axios';
class ScreenLogin extends Component {
    state = {
        data: [],
        username: '',
        password: '',
        isLoginName: false,
        isLoginPass: false,
        err: '',
        hidden: true,
        isLabelName: true,
        isLabelPass: true
    }

    componentDidMount() {
        axios.get('https://jy5qp.sse.codesandbox.io/data')
        .then(res => {
            this.setState({
                dataDemo:res.data
            })
        })
    }

    onRegis = () => {
        this.props.navigation.navigate('Register');
    }

    onLogin = async () => {
        if(!this.state.username && !this.state.password) {
            this.setState({
                isLoginName: true,
                isLoginPass: true,
                isLabelName: false,
                isLabelPass: false,
                err: 'Vui lòng nhập tài khoản mật khẩu'
            })
        }
        else {
            if(!this.state.username) {
                this.setState({
                    isLoginName: true,
                    isLoginPass: false,
                    err: 'Vui lòng nhập tài khoản'
                })
            }
            else if(!this.state.password) {
                this.setState({
                    isLoginPass: true,
                    isLoginName: false,
                    err: 'Vui lòng nhập mật khẩu'
                })
            }
            else {
                let find = this.state.dataDemo.find( value => value.name.toLowerCase() === this.state.username.toLowerCase());
                if(find) {
                   
                    if(find.pass === String(this.state.password)) {
                        this.props.navigation.navigate('Product');
                        await AsyncStorage.setItem('_id', find._id);
                    }
                    else {
                        if(this.state.isLoginPass) {
                            this.setState({
                                isLoginName: false,
                                err: 'Mật khẩu sai'
                            })
                        }
                        else {
                            this.setState({
                                isLoginName: false,
                                err: 'Mật khẩu sai'
                            })
                        }
                    }
                }
                else {
                    if(this.state.isLoginName && this.state.isLoginPass) {
                        this.setState({
                            isLoginName: true,
                            isLoginPass: true,
                            err: 'Tài khoản và mật khẩu sai hoặc không tồn tại'
                        })
                    }
                    else {
                        if(this.state.isLoginName === false && this.state.isLoginPass === true) {
                            this.setState({
                                isLoginName: true,
                                err: 'Tài khoản và mật khẩu sai hoặc không tồn tại'
                            })
                        }
                        else if (this.state.isLoginName === false && this.state.isLoginPass === false) {
                            this.setState({
                                isLoginName: true,
                                isLoginPass: true,
                                err: 'Tài khoản và mật khẩu sai hoặc không tồn tại'
                            })
                        }
                        else {
                            this.setState({
                                isLoginPass: true,
                                err: 'Tài khoản và mật khẩu sai hoặc không tồn tại'
                            })
                        }
                    }   
            }
            
                
            }
        }
        
    }

    // shouldComponentUpdate() {

    // }
    _handleOnPressName = () => {
        if(this.state.username !== '') {
            this.setState({isLabelName: false})
        }
        else {
            if(this.state.isLabelName === false) {
                this.setState({isLabelName: false})
            }
            else {
                this.setState({isLabelName: !this.state.isLabelName})
            }
        }
    }

    _handleOnPressPass = () => {
        if(this.state.password !== '') {
            this.setState({isLabelPass: false})
        }
        else {
            if(!this.state.isLabelPass) {
                this.setState({isLabelPass: false})
            }
            else {
                this.setState({isLabelPass: !this.state.isLabelPass})
            }
            
        }
        
    }

    onInputLabelPressed = () => {
        this.setState({ hidden: !this.state.hidden });
    };

    render() {
        const { username, password, err, isLoginPass, isLoginName, hidden, isLabelName, isLabelPass} = this.state;
        return (
            <ScrollView>
                <View>
                    <View style={styles.container_header_top}>
                        <Text style={{color: 'white', fontSize: 20}}>Đăng nhập / Đăng ký</Text>
                    </View>
                    <View style={styles.container_header_bottom}>
                        <TouchableOpacity style={styles.container_header_login} activeOpacity={0.6}>
                            <Text>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onRegis} style={styles.container_header_login} activeOpacity={0.6}>
                            <Text>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container_body}>
                    
                    <View style={styles.container_formInput}>
                        <View style={{position: "relative", marginTop: 10}}>
                            <Text style={[isLabelName && styles.label, !isLabelName && styles.labelFocus]} for='username'>Username</Text>
                            <TextInput
                            id='username'
                            value={username}
                            onFocus={this._handleOnPressName}
                            onBlur={this._handleOnPressName}
                            onChangeText={(username) => this.setState({ username })}
                            style={[styles.input, , !isLabelName && styles.inputFocus]}
                            />
                        </View>
                        { isLoginName && <Text style={[styles.text, {color: "red"}]}>{err}</Text>}
                        <View style={styles.viewStyle}>
                            <Text style={[isLabelPass && styles.label, !isLabelPass && styles.labelFocus]} for='password'>Password</Text>
                            <TextInput
                                id='password'
                                value={password}
                                onFocus={this._handleOnPressPass}
                                onBlur={this._handleOnPressPass}
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={ hidden ? true : false}
                                style={[styles.inputPass, , !isLabelPass && styles.inputFocus]}
                            />
                            <TouchableOpacity style={{position: 'absolute', right: 0, bottom: 15}} onPress={this.onInputLabelPressed}>
                                <Text>
                                    {hidden ? 'Show' : 'Hide'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        { isLoginPass && <Text style={[styles.text, {color: "red"}]}>{err}</Text>}
                        <TouchableOpacity style={styles.btnLogin} onPress={this.onLogin} activeOpacity={0.7}>
                            <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Login</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.text, {color: 'rgb(33, 150, 243)'}]}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Hoặc đăng nhập với</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.container_loginOther}>
                        <TouchableOpacity style={styles.buttonOther}>
                            <Image style={styles.iconImage} source={Chat} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOther}>
                            <Image style={styles.iconImage} source={Chat} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOther}>
                            <Image style={styles.iconImage} source={Chat} />
                        </TouchableOpacity>
                    </View>
                    <Button title='Product' onPress={() => this.props.navigation.navigate('Product')} />
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
    input: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: '#bbb'
    },
    inputFocus: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        borderStyle: "solid"
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: 10
    },
    label: {
        position: 'absolute',
        bottom: 15,
        left: 5
    },
    labelFocus: {
        position: 'absolute', 
        top: -5, 
        left: 5
    },
    inputPass: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 23,
        flex: 2
    },
    btnLogin: {
        marginTop: 10,
        paddingVertical: 12,
        fontWeight: '700',
        backgroundColor: '#f00'
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
export default ScreenLogin;