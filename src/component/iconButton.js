import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, View} from 'react-native';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {icons} from '../icons';

const Icon = styled.Image`
    width : 30px;
    height : 30px;
    margin : 10px;
    tint-color : ${({theme, completed})=> completed ? theme.done : theme.text}
`;

const IconButton = ({icon , onPress, item }) =>{
    const _onPress = () =>{
        onPress(item.id);
    }
    return (
        <TouchableOpacity onPress = {_onPress}>
            <View>
                <Icon source = {icon} completed = {item.completed} ></Icon>
            </View>
        </TouchableOpacity>
    );
};

IconButton.defaultProps = {
    item: {completed: false},
}

IconButton.PropTypes = {
    icon: PropTypes.oneOf(Object.values(icons)).isRequired,
    onPress: PropTypes.func,
    item : PropTypes.object,
}

export default IconButton;