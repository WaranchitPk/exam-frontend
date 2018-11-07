import React from 'react';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import TextField from '@material-ui/core/TextField/TextField';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import '../../styles/Buttons.css';
import Transition from '../../../libs/slideTransition';

const ButtonPush = ({
                      stateIsOpenDialogPush,
                      onOpenDialogPush,
                      onCloseDialogPush,
                      onClickSubmitPush,
                      stateStackData,
                      onChangeAddItemInStack,
                    }) => (
  <div id="spacingBetweenBt">
    <Button variant={'contained'} color={'primary'} onClick={onOpenDialogPush} id='stylesBt'>
      PUSH
    </Button>
    <Dialog
      open={stateIsOpenDialogPush}
      onClose={onCloseDialogPush}
      TransitionComponent={Transition}>
    <DialogTitle>ข้อมูลที่ต้องการเพิ่มลงไป</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            id="outlined-name"
            label="ค่าที่ต้องการเพิ่ม"
            value={stateStackData}
            onChange={onChangeAddItemInStack}
            margin="normal"
            variant="outlined"
            required={true}/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={onClickSubmitPush}>
          send
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

export default ButtonPush;
