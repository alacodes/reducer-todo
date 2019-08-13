export const reducer =(state, action) => {
    switch(action.type)
    {
        case 'ADD':
            return[...state, action.todo]
        case 'CLEAR':
            return state.filter(element => element.completed === false)
        default: 
            return state
    }
}

export const initialState = 
[   
     {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]