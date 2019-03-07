import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.peoples}
            keyExtractor={item => item.name.first}
            renderItem={({ item }) => (
                <PeopleListItem
                    keyExtractor={item => item.name.first}
                    people={item}
                    navigateToPeopleDetail={props.onPressItem} />
            )}
        >
        </FlatList>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;