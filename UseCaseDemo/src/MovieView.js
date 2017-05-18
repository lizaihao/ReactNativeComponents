import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
    NetInfo
} from 'react-native';


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var WEATHER_URL = 'http://wthrcdn.etouch.cn/weather_mini?city=成都';
const NOT_NETWORK = "网络不可用，请稍后再试";
const checkNetworkState = (callback) => {
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}

class getJSONDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
            loaded: false,
        }

    }

    componentDidMount() {
        if (checkNetworkState) {
            this.fetchData();
        }
    }

    fetchData() {
        fetch(WEATHER_URL)
            .then((response) => response.json())
            .then((responseData) => { this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData.data.forecast), loaded: true }); })
            .done();
    }

    renderLoading() {
        return (
            <View style={styles.container}>
                <Text>Loading moves</Text>
            </View>
        );
    }

    renderRowMovie(data) {
        return (
            <View style={styles.container}>
                
                <View style={styles.rightContainer}>
                    <Text style={styles.year}>日期：{data.date}</Text>
                    <Text style={styles.year}>风向:{data.fengxiang}</Text>
                    <Text style={styles.year}>风级:{data.fengli}</Text>
                    <Text style={styles.year}>最高温度:{data.high}</Text>
                    <Text style={styles.year}>天气:{data.type}</Text>
                    <Text style={styles.year}>最低温:{data.low}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoading();
        }



        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRowMovie}
                style={styles.listView}
            >
            </ListView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:65,
        marginBottom:10
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = getJSONDemo; 