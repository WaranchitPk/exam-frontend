import React, { Component } from 'react';
import ButtonPopComponent from '../../components/exams/buttonPop';
import { deleteDataInStack, getAllDataInStack } from "../../actions/exam";
import { connect } from 'react-redux';

class ButtonPop extends Component {
  state = {
    isOpenDialogStackPop: false,
  };
  //handle open dialog stack : pop
  handleOpenDialogStackPop = () => {
    this.setState({
      isOpenDialogStackPop: true
    })
  };
  //handle close dialog stack : pop
  handleCloseDialogStackPop = () => {
    this.setState({
      isOpenDialogStackPop: false
    })
  };
  //handle Click List In Stack : POP
  handleClickPopItemInStack = (id) => {
    const { dispatch } = this.props;
    deleteDataInStack(id).then(_ => {
      dispatch(getAllDataInStack());
      this.setState({
        isOpenDialogStackPop: false
      })
    })
  };

  render() {
    const { isOpenDialogStackPop } = this.state;
    const { listStack } = this.props;
    return (
      <div>
        <ButtonPopComponent
          stateIsOpenDialogPop={isOpenDialogStackPop}
          onOpenDialogPop={this.handleOpenDialogStackPop}
          onCloseDialogPop={this.handleCloseDialogStackPop}
          onClickItemInStack={this.handleClickPopItemInStack}
          listItemInStack={listStack}/>
      </div>
    );
  }
}

export default connect()(ButtonPop);
