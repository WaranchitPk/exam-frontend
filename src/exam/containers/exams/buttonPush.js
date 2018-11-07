import React, { Component } from 'react';
import ButtonPustComponent from '../../components/exams/buttonPush';
import swal from "sweetalert";
import { getAllDataInStack, insertDataInStack } from "../../actions/exam";
import { connect } from 'react-redux';

class ButtonPush extends Component {
  state = {
    isOpenDialogStackPush: false,
    stackData: '',
  };

  //handle open dialog : push
  handleOpenDialogStackPush = () => {
    this.setState({
      isOpenDialogStackPush: true,
      stackData: ''
    })
  };
  //handle close dialog : push
  handleCloseDialogStackPush = () => {
    this.setState({
      isOpenDialogStackPush: false
    })
  };
  //handle Change Text Field Add Stack In Data
  handleChangeTextFieldAddItemInStack = ({ target: { value } }) => {
    this.setState({
      stackData: value
    })
  };
  //handle Click Stack: Push
  handleClickStack_Push = () => {
    const { stackData } = this.state;
    const { dispatch } = this.props;
    if (stackData === "" || stackData == null){
      swal("ผิดพลาด", "กรุณากรอกค่าที่ต้องการเพิ่ม!", "warning");
    } else {
      insertDataInStack(stackData).then(_ => {
        dispatch(getAllDataInStack());
        this.setState({
          isOpenDialogStackPush: false
        })
      })
    }
  };

  render() {
    const { isOpenDialogStackPush, stackData } = this.state;
    return (
      <div>
        <ButtonPustComponent
          stateIsOpenDialogPush={isOpenDialogStackPush}
          stateStackData={stackData}
          onOpenDialogPush={this.handleOpenDialogStackPush}
          onCloseDialogPush={this.handleCloseDialogStackPush}
          onClickSubmitPush={this.handleClickStack_Push}
          onChangeAddItemInStack={this.handleChangeTextFieldAddItemInStack}/>
      </div>
    );
  }
}

export default connect()(ButtonPush);
