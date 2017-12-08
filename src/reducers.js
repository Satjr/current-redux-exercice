
// export const cards = (state, action) => {
//     switch(action.type) {
//         case 'ADD_CARD': 
//             let newCard = Object.assign({}, action.data, {
//                 score: 1,
//                 id: +new Date
//             });

//             return state.concat([newCard]);

//         default:
//             return state || [];  
//     }
// }

//Only way to go through reducers is with dispatch()

/**
 * State defined by the deck(s) contained in the array
 * @param {*array} state 
 * @param {*Object} action 
 */
export const decks = (state, action) => {
    switch(action.type) {
        case 'ADD_DECK':
            let newDeck = {
                name: action.data,
                id: +new Date
            }

            return state.concat([newDeck]);
        default:
            return state || [];
    }
}

/**
 * SHOW_ADD_DECK: The user is about to add a new deck and display the input
 * HIDE_ADD_DECK: The user cant add deck, there is no input.
 * @param {*boolean} state 
 * @param {*Object} action 
 */
export const addingDeck = (state, action) => {
    switch(action.type) {
        case 'SHOW_ADD_DECK':
            return true;
        case 'HIDE_ADD_DECK': return false;
        default:
            return state || false;
    }
}

// Then update state in store 