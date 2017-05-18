import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

import ListCards from './DropComponents';

import listData from './data/componentsJSON';

class ListContent extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(listData.components),
        };
    }

    _renderRows(rowData) {
        return (
            <ListCards name={rowData.name} person={rowData.person} childName={rowData.childName} />
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRows(rowData)}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65,
        backgroundColor: 'white',
    },
});

module.exports = ListContent; 