import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    todos = todos.map((todo) => {
        return (
            <Todo
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              key={todo.todoIndex}
              todo={todo}
            />
        );
    });
    return (
        <View>
            {todos}
        </View>
    );
}

export default TodoList;
