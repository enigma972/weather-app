import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import globalStyle from './../Style'

export default class About extends React.Component {
    
    static navigationOptions = {
        title: 'About',
    };

    search() {
        this.props.navigation.navigate('Search');
    }
    
    render() {
        return (
            <View style={globalStyle.conatainer}>
                <Text style={style.title}>A propos de l'application</Text>
                <Text style={style.summary}>Cette application vous permet de connaitre la meteo de n'importe quel ville dans le monde. 
                Cette application vous permet de connaitre la meteo de n'importe quel ville dans le monde.</Text>
                <Text></Text>
                <Button title="Rechercher une ville" onPress={() => this.search()} style={style.btn} />
            </View>
        );
    }

}


const style = StyleSheet.create({
    summary: {
        textAlign: "center",
        marginBottom: 10
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        marginBottom: 20
    }
});