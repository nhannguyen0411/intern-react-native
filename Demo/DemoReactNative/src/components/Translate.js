import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class InputTranslate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: `center`
            }}>
                <TextInput 
                    style={{height: 50}}
                    placeholder='Type here'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <Text style={{padding: 10, fontSize: 32}}>
                    {
                        this.state.text.split(' ').map( word => 
                            word && '🍕'    
                        ).join(' ')
                    }
                </Text>
            </View>
        )
    }
}

export default InputTranslate;