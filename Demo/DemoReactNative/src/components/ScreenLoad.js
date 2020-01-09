import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

class ScreenLoad extends Component {

    _loadData = async() => {
        const _id = await AsyncStorage.getItem('_id');
        console.log(_id);
        this.props.navigation.navigate( _id ? 'Task' : 'Login')
    }

    componentWillMount() {
        this._loadData();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Loading</Text>
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#DDD'
    }
});
export default ScreenLoad;