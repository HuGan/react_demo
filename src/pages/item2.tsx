import React, { Component } from 'react';
import './index.css'
import { incrementAction, reduceAction } from '../reducers/calculate';
import { connect } from 'react-redux';

interface Props {
    num: number,
    list: [],
    increment?: ()=>any,
    decrement?: ()=>any,
}

const mapStateToProps = (state: any) => {
  return {
    num: state.calculate.num,
    list: state.calculate.list,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementAction),
  decrement: () => dispatch(reduceAction)
});

@(connect( mapStateToProps, mapDispatchToProps, ) as any)
export default class Item2 extends Component<Props, any> {

    componentDidMount() {
      
    }

    render() {

      const listItem = this.props.list && 
        this.props.list.map((item: any) => <li key={item.id}>{item.tag}</li>)
      
        return <div className='container'>

          发发发
            {listItem}

            xxx
            <p onClick={this.props.increment}>click to increment num</p>
            <p onClick={this.props.decrement}>click to decrement num</p>
            <p>{this.props.num}</p>
        </div>
    }
}