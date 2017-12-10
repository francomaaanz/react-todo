import {addTodo, findById, toggleToDo, updateTodo} from './TodoHelper'

test('addTodo Le paso un valor correcto de array', () => {
    const startTodo = [
        {name: 'one', isComplete: false},
        {name: 'two', isComplete: false}
    ];

    const newTodo = {name: 'three', isComplete: false};

    const expected = [
        {name: 'one', isComplete: false},
        {name: 'two', isComplete: false},
        {name: 'three', isComplete: false}
    ];

    const results = addTodo(startTodo, newTodo);

    expect(results).toEqual(expected)

});

test('addTodo Le paso un valor diferente de array', () => {
    const startTodo = [
        {name: 'one', isComplete: false},
        {name: 'two', isComplete: false}
    ];

    const newTodo = {id: 3, name: 'three', isComplete: false};

    const expected = [
        {name: 'one', isComplete: false},
        {name: 'two', isComplete: false},
        {name: 'three', isComplete: false}
    ];

    const results = addTodo(startTodo, newTodo);

    expect(results).not.toBe(startTodo)

});

test('finById should return the expected item from array', () => {
    const startTodo = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];

    const expected = {id: 2, name: 'two', isComplete: false};
    const results = findById(2, startTodo);

    expect(results).not.toBe(expected)
})

test('toggleToDo should toggle the isComplete propof a todo.', () => {
    const startTodo = {id: 2, name: 'two', isComplete: false};
    const expected = {id: 2, name: 'two', isComplete: true};
    const results = toggleToDo(startTodo);
    expect(results).toEqual(expected)
})

test('toggleToDo should not mutate the original todo.', () => {
    const startTodo = {id: 2, name: 'two', isComplete: false};    
    const results = toggleToDo(startTodo);
    console.log('results', results);
    expect(results).not.toBe(startTodo)
})

test('updateTodo should not mutate the original todo.', () => {
    const startTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ];
    const updatedTodo = {id: 2, name: 'two', isComplete: true}

    const expectedTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
    ];

    const results = updateTodo(startTodos, updatedTodo);
    
    expect(results).toEqual(expectedTodos)
})