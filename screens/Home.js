import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { Card, ListItem, Button, List, SearchBar, Header } from 'react-native-elements';
import Menu from '../screens/Menu';
export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true};
        
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
            <View style={{ flex: 1, paddingVertical: -64 }}>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
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