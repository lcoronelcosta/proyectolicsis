import React from 'react';
import { View, Text, FlatList, FormInput } from 'react-native';
import { Card, ListItem, FormLabel, Button } from 'react-native-elements';

class Details extends React.Component {
    render() {

        const item = this.props.navigation.state.params;

        return (
            <View style={{ flex: 1, paddingVertical: 20 }}>
                <Card title='Prueba'>
                    <Text>Name</Text>
                </Card>
            </View>
        );
    }
}

export default Details;