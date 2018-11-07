import React, { Component } from 'react';
import ButtonInsertAtContainer from '../../components/exams/buttonInsertAt';
import { insertAtDataInStack } from '../../actions/exam';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class ButtonInsertAt extends Component {
  state = {
    isOpenDialogStackInsertAt: false,
    stackData: '',
    selectPositionStack: ''
  };
  //handle open dialog : insert at
  handleOpenDialogStackInsertAt = () => {
    this.setState({
      isOpenDialogStackInsertAt: true,
      stackData: '',
      selectPositionStack: ''
    })
  };
  //handle close dialog : insert at
  handleCloseDialogStackInsertAt = () => {
    this.setState({
      isOpenDialogStackInsertAt: false
    })
  };
  //handle Change Select Position Stack
  handleChangeSelectPositionInStack = ({ target: { value } }) => {
    this.setState({
      selectPositionStack: value
    })
  };
  handleChangeTextFieldAddItemInStack = ({ target: { value } }) => {
    this.setState({
      stackData: value
    })
  };
  //handle Click Stack : Insert At
  handleClickStack_InsertAt = () => {
    const { selectPositionStack, stackData } = this.state;
    const { dispatch } = this.props;
    if (stackData === '' || selectPositionStack === ''){
      swal('ผิดพลาด', 'กรุณากรอกข้อมูลให้ครบทุกช่อง!', 'warning');
    } else {
      const stackDataAndPositionDataInStack = {
        position: selectPositionStack,
        stackData: stackData
      };
      dispatch(insertAtDataInStack(stackDataAndPositionDataInStack))
      this.setState({
        isOpenDialogStackInsertAt: false

      })
    }
  };

  render() {
    const { isOpenDialogStackInsertAt, stackData, selectPositionStack } = this.state;
    const { listStack } = this.props;
    return (
      <div>
        <ButtonInsertAtContainer
          stateIsOpenDialogInsertAt={isOpenDialogStackInsertAt}
          stateSelectPositionInStack={selectPositionStack}
          stateStackData={stackData}
          onOpenDialogInsertAt={this.handleOpenDialogStackInsertAt}
          onCloseDialogInsertAt={this.handleCloseDialogStackInsertAt}
          onChangePositionInStack={this.handleChangeSelectPositionInStack}
          onClickSubmitInsertAt={this.handleClickStack_InsertAt}
          onChangeAddItemInStack={this.handleChangeTextFieldAddItemInStack}
          listItemInStack={listStack}/>
      </div>
    );
  }
}

export default connect()(ButtonInsertAt);
