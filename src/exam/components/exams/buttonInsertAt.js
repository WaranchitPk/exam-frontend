import React from 'react';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import FormGroup from '@material-ui/core/FormGroup/FormGroup';
import FormControl from '@material-ui/core/FormControl/FormControl';
import TextField from '@material-ui/core/TextField/TextField';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Transition from '../../../libs/slideTransition';

const ButtonInsertAt = ({
                          stateIsOpenDialogInsertAt,
                          onOpenDialogInsertAt,
                          onCloseDialogInsertAt,
                          onClickSubmitInsertAt,
                          stateSelectPositionInStack,
                          stateStackData,
                          onChangePositionInStack,
                          listItemInStack,
                          onChangeAddItemInStack
                        }) => (
  <div>
    <Button variant={'contained'} color={'primary'} onClick={onOpenDialogInsertAt} id='stylesBt'>
      Insert At
    </Button>
    <Dialog
      open={stateIsOpenDialogInsertAt}
      onClose={onCloseDialogInsertAt}
      TransitionComponent={Transition}>
      <DialogTitle>ข้อมูลและตำแหน่งที่ต้องการเพิ่มลงไป</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormGroup>
            <FormControl>
              <TextField
                id="outlined-name"
                label="ค่าที่ต้องการเพิ่ม"
                value={stateStackData}
                onChange={onChangeAddItemInStack}
                margin="normal"
                variant="outlined"
                required={true}/>
            </FormControl>
          </FormGroup>
          <FormGroup id="spacingInputDialogInsertAt">
            <FormControl variant="outlined">
              <InputLabel>ตำแหน่งที่ต้องการ</InputLabel>
              <Select
                value={stateSelectPositionInStack}
                onChange={onChangePositionInStack}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="age"
                    id="outlined-age-simple"
                  />
                }>
                {
                  listItemInStack && listItemInStack.data.map((value, index) => (
                    <MenuItem value={index} key={value.id}>
                      <em>{index + 1}</em>
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </FormGroup>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={onClickSubmitInsertAt}>
          send
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

export default ButtonInsertAt;
