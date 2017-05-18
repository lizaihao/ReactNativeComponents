import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ViewStyle,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Animated,
    ListView
} from 'react-native';


import ListCard from './DropComponentsSecond';


export default class DropComponents extends Component {

    constructor(props) {
        super(props);
        const dsP = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const dsC = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ...props,
            showAnim: new Animated.Value(0),
            datasourcePerson: dsP.cloneWithRows(this.props.person),
            datasourceComponents: dsC.cloneWithRows(this.props.childName),
        };
        this.showAnim = 0;
        this.showorhide = 0;

        this._showhideItems = this._showhideItems.bind(this);
    }


    _renderRowsPerson(renderData) {

        return (
            <View style={styles.headerLinePerson}>
                <View style={styles.headerRows}><Text>{renderData.name}</Text></View>
            </View>
        );

    }

    _renderRowsComponents(renderData) {
        return (
            <ListCard name={renderData.name} person={renderData.person} childName={renderData.childName}/>
        )
    }

    _showhideItems() {
        if (typeof (this.state.name) == 'undefined' || this.state.name == null) {
            return;
        }
        Animated.timing(
            this.state.showAnim,
            {
                toValue: this.showorhide == 0 ? 1 : 0
            }
        ).start();
        this.showorhide = this.showorhide == 0 ? 1 : 0;
    }

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this._showhideItems}>
                    <View style={styles.headerLine}>
                        <View style={styles.headerRows}><Text>{this.state.name}</Text></View>
                    </View>
                </TouchableOpacity>
                <Animated.View
                    style={{
                        height: this.state.showAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 300]
                        }),
                        overflow: 'hidden'
                    }
                    }
                >
                    <View style={styles.showitemContain}>
                        <ListView
                            style={styles.container}
                            dataSource={this.state.datasourcePerson}
                            renderRow={(rowData) => this._renderRowsPerson(rowData)}
                        />
                        
                        <ListView
                            style={styles.container}
                            dataSource={this.state.datasourceComponents}
                            renderRow={(rowData) => this._renderRowsComponents(rowData)}
                        />
                    </View>
                </Animated.View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    headerLine: {
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE0E5',
    },
    headerLinePerson: {
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE0E5',
    },
    lineView:{
        backgroundColor:'#EEE0E5',
        width:500,
        height:5
    },
    headerRows: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    showitemContain: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 500,

    },
});
