import React from 'react';
import {View, TextInput, StyleSheet, StatusBar, Button} from 'react-native';
import globalStyle from './../Style'

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: 'Kinshasa'
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
        headerStyle: globalStyle.header,
        headerTitleStyle: globalStyle.headerTitle,
    };

    setCity(city) {
        this.setState({city})
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={style.view}>
                <StatusBar hidden={true} />
                <TextInput  style={style.input} placeholder='Saisissez le nom de la ville' onChangeText={(text) => this.setCity(text)} />
                <Button title="RECHERCHER" onPress={() => navigate('List', {city: this.state.city})} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    view: {
        margin: 20
    }
});