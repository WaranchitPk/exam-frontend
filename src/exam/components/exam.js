import React from 'react';
import ButtonPopContainer from '../containers/exams/buttonPop';
import ButtonPushContainer from '../containers/exams/buttonPush';
import ButtonInsertAtContainer from '../containers/exams/buttonInsertAt';
import ListItemStack from '../containers/exams/listStack';
import Grid from '@material-ui/core/Grid';
import '../styles/Buttons.css';

const Exam = ({ listStack }) => (
  <div>
    <Grid container={true}>
      <Grid item xs={4} sm={4} md={5} lg={6} xl={7}>
        <ListItemStack listStack={listStack}/>
      </Grid>
      <Grid item id="spacingBetweenListStackAndBt">
        <ButtonPopContainer listStack={listStack}/>
        <ButtonPushContainer/>
        <ButtonInsertAtContainer listStack={listStack}/>
      </Grid>
    </Grid>
  </div>
);

export default Exam;
