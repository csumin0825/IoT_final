import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, useWindowDimensions} from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor : theme.main,
}))`
    width : ${({width}) => width -40}px;
    height : 69px;
    margin : 3px 0;
    padding : 15px 20px;
    border-radius: 10px;
    font-size: 25px;
    background-color: ${({theme}) => theme.itemBackground};
    color : ${({theme})=> theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing})=> {
    //const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;
    return <StyledInput width = {width} 
        placeholder = {placeholder}
        maxLength = {50}
        autoCapitalize = "none"  // 첫 글자가 대문자로 바뀌지 않도록
        autoCorrect = {false}  // 자동으로 틀린 글자 수정되지 않도록
        returnKeyType = "done"  // (ios) enter부분
        value = {value}
        onChangeText = {onChangeText}
        onSubmitEditing = {onSubmitEditing}
        />
}

Input.propTypes = {
    placeholder : PropTypes.string, // 문자열만 가능
    value : PropTypes.string.isRequired, // 문자열만, 필수
    onChangeText: PropTypes.func.isRequired, // 함수만, 필수
    onSubmitEditing : PropTypes.func.isRequired,
}
export default Input;