import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import About from '../components/About';
import Search from '../components/Search';
import List from '../components/List';

const SearchStackNavigator = createStackNavigator({
    Search: { screen: Search },
    List: { screen: List }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: false,
        showLabel: true,
        pressColor: "#FF0000"
    }
});

const AppTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator
    },
    About: {
        screen: About
    }
})

export default createAppContainer(AppTabNavigator);