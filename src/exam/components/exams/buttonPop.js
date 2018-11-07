import React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import '../../styles/Buttons.css';
import Transition from '../../../libs/slideTransition';


const ButtonPop = ({
                     onClickItemInStack,
                     stateIsOpenDialogPop,
                     onOpenDialogPop,
                     onCloseDialogPop,
                     listItemInStack,
                   }) => {
  return (
    <div id="spacingBetweenBt">
      <Button variant={'contained'} color={'primary'} onClick={onOpenDialogPop} id='stylesBt'>
        Pop
      </Button>

      <Dialog
        open={stateIsOpenDialogPop}
        onClose={onCloseDialogPop}
        TransitionComponent={Transition}>
        {
          listItemInStack && listItemInStack.data.slice(0, 1).map(result => (
            <div key={result.id}>
              <DialogTitle>
                ข้อมูลล่าสุดใน stack คือ {result.stack_data}
              </DialogTitle>
              <DialogActions>
                <Button onClick={() => onClickItemInStack(result.id)} color="primary" variant={'contained'}>
                  ตกลง
                </Button>
              </DialogActions>
            </div>
          ))
        }
      </Dialog>
    </div>
  )
};

export default ButtonPop;
