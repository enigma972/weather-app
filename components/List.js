import React from 'react'
import { Text, ActivityIndicator, View } from 'react-native'
import globalStyle from './../Style'
import axios from 'axios'
import WeatherRow from './weather/Row'

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null,
            isLoading: true
        }

        this.search(this.state.city);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
            headerStyle: globalStyle.header,
            headerTitleStyle: globalStyle.headerTitle
        }
    }

    search(city) {
        // https://samples.openweathermap.org/data/2.5/forecast?q=kinshasa&appid=4cde7aba345f1afe5014d86a0f10b463
        return fetch('https://api.dev')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.list,
                });
                console.log(responseJson.list)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{marginTop: 20}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
            
        return (
            <View style={globalStyle.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item, j, k  }) => <WeatherRow day={item} index={k} />}
                    keyExtractor={(item) => item.dt.toString()}
                />
            </View>
        );
    }
}