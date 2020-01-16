import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { Card, ListItem, Button, List, SearchBar } from 'react-native-elements';

const list = [
    { id: 1, name: 'user1', email: 'user1@test.com', memo: 'memo1' },
    { id: 2, name: 'user2', email: 'user2@test.com', memo: 'memo2' },
    { id: 3, name: 'user3', email: 'user3@test.com', memo: 'memo3' },
    { id: 4, name: 'user4', email: 'user4@test.com', memo: 'memo4' },
    { id: 5, name: 'user5', email: 'user5@test.com', memo: 'memo5' },
]

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://hierrodiseno.com/mipedido/public/api/getsubcategorias')
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              isLoading: false,
              dataSource: responseJson.data,
            }, function(){
              console.error(responseJson.data);
            });

          })
          .catch((error) =>{
            console.error(error);
        });
    }

    render() {
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
        return (
            <View style={{ flex: 1, paddingVertical: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                          roundAvatar
                          title={item.nombre}
                          subtitle={item.nombre}
                          leftAvatar={{ source: { uri: item.imagen } }}
                          containerStyle={{ borderBottomWidth: 0 }}
                          onPress={() => this.handleItemClick(item)}
                          bottomDivider
                          chevron
                        />
                      )}
                />
            </View>
        );
    }

    handleItemClick = (item) => {
        this.props.navigation.navigate('Details', item);
    }
}