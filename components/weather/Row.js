import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import globalStyle from './../../Style'
//import moment from 'moment'
//import 'moment/locale/fr'

//moment.locale('fr')


export default class Row extends React.Component {

    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number,
    }

    icon() {
        const type = this.props.day.weather[0].main.toLower
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{date}</Text>
        )
    }

    render() {
        return (
            <View style={style.view}>
                <Text></Text>
                <Text>{this.props.day} *C</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    view: {
        backgroundColor: globalStyle.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#0d47a1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    temp: {
        color: '#FFF',

    }
})