/**
 * Related to decks reducer
 * Gives a name to the deck
 * @param {*String} name 
 */
export const addDeck = name => ({type: 'ADD_DECK', data: name});
/**
 * Both related to addingDeck reducers
 */
export const showAddDeck = () => ({type: 'SHOW_ADD_DECK'});
export const hideAddDeck = () => ({type: 'HIDE_ADD_DECK'});

