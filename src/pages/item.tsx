import * as React from 'react';
import {getLockscreenWallpaper} from '../utils/api'
import { incrementAction, reduceAction } from '../reducers/calculate';
import { connect } from 'react-redux';

interface State {
    list?: any
}
interface Props {
  titleStyle?: any;
  titleClass?: any;
}


class ProductTitle extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {

    getLockscreenWallpaper({
        id: 2025528
    }).then(( data: any ) => {
        console.log(data['list'])
        this.setState({
            list: data.list
        });
    })


  }

  render() {

    let { children, titleStyle, titleClass } = this.props;

    const listItem = this.state.list ?
      this.state.list.map((item: any) => <li key={item.id}>{item.tag}</li>) : ''
      
    return (
      <div>
        {listItem}
        <p
          style={titleStyle ? titleStyle : {}}
          className={'sss'}
        >

          {children} {titleClass}
        </p>
      </div>
    );
  }
}
export default ProductTitle;