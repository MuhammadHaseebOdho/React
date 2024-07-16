import { useContext } from "react"
import React from "react"


const TodoContext=React.createContext({
    todos:[{
        id: 1,
        todoMsg:"Todo Project",
        completed : false
    }],

     addTodo: ()=>{},
     updateTodo: ()=>{},
     deleteTodo: ()=>{},
     toggleComplete: ()=>{}
     

})

export const TodoContextProvider=TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}