import React from 'react';
import { View, Text, FlatList, FormInput, ActivityIndicator } from 'react-native';
import { Card, ListItem, FormLabel, Button, Image, PricingCard } from 'react-native-elements';

class Details extends React.Component {
    render() {

        const item = this.props.navigation.state.params;

        return (
            <View style={{ flex: 1, paddingVertical: 20 }}>
                <Card title={item.nombre}>
                    <Image
                      source={{ uri: item.imagen }}
                      style={{ width: 200, height: 200 }}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                    <PricingCard
                     color="#4f9deb"
                     price="$0"
                     //info={['1 User', 'Basic Support', 'All Core Features']}
                     button={{ title: 'Pedir', icon: 'flight-takeoff' }}
                    />
                </Card>

                
            </View>
        );
    }
}

export default Details;