export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*1000);

export const findById = (id, list) =>  list.find(item => item.id=== id)    


export const toggleToDo = (todo) => ({...todo, isComplete: !todo.isComplete})


export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item=> item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
         updated,
        ...list.slice(updatedIndex+1)
    ]
}

export const removeTodo = (list, id) => {    
    const paramId = id;
    const deleteIndex = list.findIndex((item) => item.id == paramId)         
    // return [
    //     ...list.slice(0, deleteIndex),
    //     ...list.slice(deleteIndex+1)
    // ]
    return list.filter(function(item) {
        return item.id !== deleteIndex+1  
    });    
}