import React from 'react';
import ReactDOM from 'react-dom'
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import {Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'; 


/**
 * Provides states from Redux when used with { connect } and pass them as props to the component.
 */
const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
})

/**
 * Same than mapStateToProps but with dispatch, meaning those are functions going to update states.
 */
const mapDispatchToProps = dispatch => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = createReactClass({

    /**
     * If the input is displayed after Component updated, focus it.
     */
    componentDidUpdate() {
        var el =  ReactDOM.findDOMNode(this.refs.add);

        if (el) el.focus();
    },
    render() {
        let props = this.props;

        return (
        <div className="sidebar">
            <h2>All Decks</h2>
            <button onClick={this.props.showAddDeck}>New deck</button>
            <ul>
                {props.decks.map((deck, i) => 
                    <li key={i}>{deck.name}</li>
                )}
            </ul>
            {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
        </div>
        );
    },

    createDeck(e) {
        if (e.which  !== 13) return;

        var name = ReactDOM.findDOMNode(this.refs.add).value;

        this.props.addDeck(name);
        this.props.hideAddDeck(); // When the deck is created, addingDeck state value is back to false.
    }
});

//Connect states and dispatch from store to the component Sidebar
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);