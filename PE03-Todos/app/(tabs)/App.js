import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All', // 'All' | 'Completed' | 'Incomplete'
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  submitTodo() {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === '') return;

    const newTodo = {
      title: inputValue,
      complete: false,
      todoIndex: todoIndex++,
    };

    const updatedTodos = [...todos, newTodo];
    this.setState({
      todos: updatedTodos,
      inputValue: '',
    });
  }

  setType(type) {
    this.setState({ type });
  }

  render() {
    const { inputValue, todos, type } = this.state;

    let filteredTodos = todos;
    if (type === 'Completed') {
      filteredTodos = todos.filter((todo) => todo.complete);
    } else if (type === 'Incomplete') {
      filteredTodos = todos.filter((todo) => !todo.complete);
    }

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.content}
        >
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />

          <View style={styles.filterContainer}>
            <TouchableOpacity onPress={() => this.setType('All')}>
              <Text style={type === 'All' ? styles.selectedFilter : styles.filter}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setType('Completed')}>
              <Text style={type === 'Completed' ? styles.selectedFilter : styles.filter}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setType('Incomplete')}>
              <Text style={type === 'Incomplete' ? styles.selectedFilter : styles.filter}>Incomplete</Text>
            </TouchableOpacity>
          </View>

          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={() => this.submitTodo()}
              color="#000"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    shadowOpacity: 0.1,
    marginBottom: 40,
    marginLeft: 100,
    marginRight: 100,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  filter: {
    fontSize: 18,
    color: 'gray',
  },
  selectedFilter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default App;
