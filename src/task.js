import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {icon, icons} from './icons';
import IconButton from './component/iconButton';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    /* background-color: ${({theme})=> theme.itemBackground}; */
    border-radius: 10px;
    padding : 5px;
    margin : 3px 0;
`;

const Contents = styled.Text`
    flex:1;
    font-size : 24px;
    color : ${({theme, completed})=> completed ? theme.done : theme.text};
`;

const Task = ( { item, deleteTask, toggleTask }) =>{
    return (
        <Container>
            <IconButton 
                icon = {item.completed ? icons.check : icons.uncheck}
                item = { item}
                onPress = {toggleTask}
            />
            <Contents completed = {item.completed}>{item.text}</Contents>
            {item.completed || <IconButton icon = {icons.edit}/> }
            <IconButton 
                icon = {icons.delete}
                item = { item}
                onPress = {deleteTask}
            />
        </Container>
    )
}

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask : PropTypes.func.isRequired,
}

export default Task;