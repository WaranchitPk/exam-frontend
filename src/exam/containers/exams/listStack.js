import React, { Component } from 'react';
import ListStackComponent from '../../components/exams/listStack';

class ListStack extends Component {
  render() {
    const { listStack } = this.props;
    return (
      <div>
        <ListStackComponent listStack={listStack}/>
      </div>
    );
  }
}

export default ListStack;
