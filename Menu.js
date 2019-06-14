import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DailyActivity from "./DailyActivity";
import DailyCampus from "./DailyCampus";
import Main from "./Main";
import Login from "./Login";
import ViewListPeminjaman from "./ViewListPeminjaman";
import ViewDetail from "./ViewDetail";


const AppContainer = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Main: {
      screen: Main
    },
    DailyActivity: { 
      screen: DailyActivity
    },
    DailyCampus: {
      screen: DailyCampus 
    },
    ViewListPeminjaman: {
      screen: ViewListPeminjaman
    },
    ViewDetail : {
      screen: ViewDetail 
    },
  },
  {
    initialRouteName: "Main"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
