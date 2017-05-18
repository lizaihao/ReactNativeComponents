import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Flex, WhiteSpace } from 'antd-mobile';

export default class Main extends Component {

    render() {
        return (

            <ScrollView style={styles.container}>

                <WhiteSpace />
                <Button onClick={() => {
                    Actions.dropComponents()
                }}>下拉组件</Button>
                <WhiteSpace />

                <WhiteSpace />
                <Button onClick={() => {
                    Actions.movieListView()
                }}>获取网络数据</Button>
                <WhiteSpace />


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    }
});
