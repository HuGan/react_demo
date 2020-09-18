import React, { Component } from 'react';
import './index.css'
import { incrementAction, reduceAction, uplistAction } from '../reducers/calculate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLockscreenWallpaper } from '../utils/api'
import Item2 from './item2'

interface Props {
    num: number,
    list: [],
    increment: ()=>any,
    decrement: ()=>any,
    uplist: (param: any)=>any
}

const mapStateToProps = (state: any) => {
  return {
    num: state.calculate.num,
    list: state.calculate.list,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementAction),
  decrement: () => dispatch(reduceAction),
  uplist: (param: any) =>  dispatch(uplistAction(param)),
});

@(connect( mapStateToProps, mapDispatchToProps, ) as any)
export default class Home extends Component<Props, any> {

    componentDidMount() {
      // if (this.props.list.length === 0) {
        getLockscreenWallpaper({
            id: 2025528
        }).then(( data: any ) => {
            // console.log(data['list'])
            this.props.uplist(data['list']);
            // this.setState({
            //     list: data.list
            // });
        })
      // }
    }

    render() {

      const listItem = this.props.list && 
      this.props.list.map((item: any) => <li key={item.id}>{item.tag}</li>)

        return <div className='container'>
            <Link to='/'>h1</Link>
            <Link to='/h2'>h2</Link>

            <Item2 num={this.props.num} list={this.props.list} ></Item2>


            <p onClick={this.props.increment}>click to increment num</p>
            <p onClick={this.props.decrement}>click to decrement num</p>
            <p>{this.props.num}</p>

            {listItem}
        </div>
    }
}