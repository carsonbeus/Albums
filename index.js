// index.ios.js - place code here for ios

// import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a component
const App = () => (
    <View>
    <Header headerText={'ALBUMS'} />
    <AlbumList />
    </View>

);


// render it to the device

AppRegistry.registerComponent('albums', () => App);