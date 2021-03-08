import {
  CHANGE_SHOW_TODOS_TYPE,
  CHANGE_TODO_TYPE,
  COLLAPSE_TODOS,
  CREATE_TODO,
  DELETE_TODO,
} from './actions/todos'
import { collapseTodos } from './actionCreators/todos'

const initialState = {
  all: [],
  active: [],
  completed: [],
  showTodosType: 'all',
  collapseTodos: false,
}

function active(all) {
  return all.filter((todo) => todo.type === 'active')
}

function completed(all) {
  return all.filter((todo) => todo.type === 'completed')
}

function createTodo(state, post) {
  return {
    ...state,
    all: [post, ...state.all],
    active: active([post, ...state.all]),
    completed: completed([post, ...state.all]),
  }
}

function changeTodoType(state, { postType, postId }) {
  const oldAll = state.all
  const index = oldAll.findIndex((post) => post.id == postId)
  const post = oldAll[index]
  const newPost = { ...post, type: postType }

  const newAll = [...oldAll.slice(0, index), newPost, ...oldAll.slice(index + 1, oldAll.length)]

  return {
    ...state,
    all: newAll,
    active: active(newAll),
    completed: completed(newAll),
  }
}

function deleteTodo(state, postId) {
  const index = state.all.findIndex((post) => post.id == postId)

  const newAll = [...state.all.slice(0, index), ...state.all.slice(index + 1, state.all.length)]

  return {
    ...state,
    all: newAll,
    active: active(newAll),
    completed: completed(newAll),
  }
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return createTodo(state, action.payload)
    case CHANGE_TODO_TYPE:
      return changeTodoType(state, action.payload)
    case DELETE_TODO:
      return deleteTodo(state, action.payload)
    case CHANGE_SHOW_TODOS_TYPE:
      return { ...state, showTodosType: action.payload }
    case COLLAPSE_TODOS:
      return { ...state, collapseTodos: !state.collapseTodos }
    default:
      return state
  }
}
