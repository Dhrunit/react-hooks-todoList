import React, {useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  const initialTodos = [{
    id:1,task:"Clean Fishtank",completed:false
  },
  {
    id:2,task:"Clean tank",completed:false
  },
  {
    id:3,task:"Clean Fish",completed:false
  }]
  const [todos,setTodos]=useState(initialTodos);
  const addTodo = newTodoText => {setTodos([...todos,{id:4, task:newTodoText, completed:false}])}
  return(
    <Paper style={{padding:0,margin:0,backgroundColor:'#fafafa,height:100vh'}} elevation={0}>
      <AppBar color='primary' position='static' style={{height:"64px"}}>
        <Toolbar>
          <Typography color='inherit'>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </Paper>
  )
}
export default TodoApp;
