import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            loading: true,
            error: false
        }
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?nat=br&results=150');
            this.setState({ loading: false, peoples: data.results });
        } catch (e) {
            this.setState({ loading: false, error: true });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading
                    ? <ActivityIndicator size="large" color="#6ca2f7" />
                    : this.state.error
                        ? <Text style={styles.error}>Ops... algo deu errado =(</Text>
                        : <PeopleList
                            peoples={this.state.peoples}
                            onPressItem={pageParams => {
                                this.props.navigation.navigate('PeopleDetail', pageParams);
                            }} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18
    }
});