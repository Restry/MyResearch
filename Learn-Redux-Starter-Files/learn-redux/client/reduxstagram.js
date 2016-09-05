import React from 'react'
import { render } from 'react-dom'
import { compose, map, prop } from 'ramda'
const List = (items) => <ul>{items}</ul>
const Item = (todo) => <li key={todo.id}>{todo.text}</li>
const getTodos = prop('todos')
const TodoList = compose(List, map(Item), getTodos)

const props = {todos: [{id: 1, text: 'foo'}, {id: 2, text: 'bar'}]}


render(<TodoList {...props} />, document.getElementById('root'))

