import React from 'react';
import {View} from 'react-native';
/* import About from './components/About';
import List from './components/List'
import Search from './components/Search'; */
import Navigation from './Navigation/Navigation';
/* import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; */

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}



/* const MainNavigator = createStackNavigator({
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

const App = createAppContainer(MainNavigator);

export default App;
 */