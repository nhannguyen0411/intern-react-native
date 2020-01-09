import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

export default class GetApi extends Component {
    state = {
        isLoading: true,
        data: []
    }

    async componentDidMount() {
        return await fetch('https://facebook.github.io/react-native/movies.json')
        .then(res => console.log(res.json()))
        .then( resJson => {
            this.setState({
                isLoading: false,
                data: resJson.movies
            })
        })

        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (this.state.isLoading && <View>
            <FlatList 
                data={this.state.data}
                renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}/>
        </View>)
    }
}