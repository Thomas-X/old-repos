import React, {Component} from 'react';
import {
    AppRegistry, Image, ListView, Text, View, ActivityIndicator,
    DrawerLayoutAndroid, ToolbarAndroid
} from 'react-native';
import {getColors, getStyle} from './colors.js';

let colors = getColors();
let styles = getStyle();

export default class AwesomeProject extends Component {


    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.getMovies();
    }

    getMovies() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return fetch('https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=80919f8518c74ea08a0e68dbe1aee195')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('getMovies() called and executed!');
                this.setState({
                    textData: ds.cloneWithRows(responseJson.articles),
                    loading: false
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );

        if (this.state.loading != false) {
            return (
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <View style={styles.centerItems}>
                        <ActivityIndicator
                            animating={this.state.loading}
                            size="large"
                            color={colors.mainColour}
                        />
                    </View>
                </DrawerLayoutAndroid>

            )
        } else {
            return (
            <View title="<ToolbarAndroid/>" style={{flex: 1}}>

                {/*//TODO fix this*/}
                <ToolbarAndroid
                    logo={require('./react.png')}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', icon: require('./react.png'), show: 'always'}]}/>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <View style={{flex: 1}}>
                        <ListView dataSource={this.state.textData}
                                  style={{flex: 1}}
                                  renderRow={ function (rowData) {
                                      return (
                                          <View style={{flex: 4}}>
                                              <Image source={{uri: rowData.urlToImage}}
                                                     style={styles.imageContainer}>
                                                  <View>
                                                      <Text style={styles.title}>{rowData.title}</Text>
                                                  </View>
                                              </Image>

                                              <Text style={styles.description}>{rowData.description}</Text>
                                              <Text style={styles.author}>{rowData.author}</Text>
                                          </View>
                                      )
                                  }}
                        />
                    </View>
                </DrawerLayoutAndroid>
            </View>
            );
        }
    }
}

// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
