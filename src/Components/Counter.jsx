import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/store/store";
import { counterActionTypes } from "../redux/constants/counterAction.types";
import actionCountergenerator from "../redux/actions/counterAction.generator";

class Counter extends Component {
  increment = (event) => {
    // store.dispatch({ type: counterActionTypes.INCREMENT });
    // store.dispatch(actionCountergenerator(counterActionTypes.INCREMENT));
    this.props.incrementCount();
  };

  decrement = (event) => {
    // store.dispatch({ type: counterActionTypes.DECREMENT });
    // store.dispatch(actionCountergenerator(counterActionTypes.DECREMENT));
    this.props.decrementCount();
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.props.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {/* <button onClick={this.props.incrementCount}>+</button>
        <button onClick={this.props.decrementCount}>-</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.counterReducer.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (payload = {}) => {
      return dispatch(
        actionCountergenerator(counterActionTypes.INCREMENT, payload)
      );
    },
    decrementCount: (payload = {}) => {
      return dispatch(
        actionCountergenerator(counterActionTypes.DECREMENT, payload),
        payload
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
