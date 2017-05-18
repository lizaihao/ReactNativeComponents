import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Main from './Main';  
import DropComponentsView from './DropComponentsView'; //下拉组件DropComponentsView
import JSONListView from './MovieView'; //网络获取数据listview




export default class App extends Component {

    render() {
        return( 
            
        <Router> 

            <Scene key="main" component={Main} initial title="系统界面布局" />
         
            <Scene key="dropComponents" component={DropComponentsView} title="下拉组件"/>


            <Scene key="movieListView" component={JSONListView} title="数据传输"/>
        </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});