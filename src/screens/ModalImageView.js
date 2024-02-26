import * as React from 'react';
import {  Text } from 'react-native-paper';
import { dataview } from '../styles/Dataview';
import { View } from 'react-native-web';

const ModallImageView = ({ title, src }) => (
    <View style={{margin:"0 auto"}}>
        <Text variant="bodyMedium">{title}</Text>
        <img style={dataview.img} src={src} alt="link chalana"></img>
    </View>
);

export default ModallImageView;