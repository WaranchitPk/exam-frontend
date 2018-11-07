import React from 'react';
import { Route } from 'react-router-dom';
import ExamContainer from '../exam/containers/exam';
import './styles/app.css';
const App = () => (
  <div id="spacingTop">
    <Route exact path='/' component={ExamContainer}/>
  </div>
)

export default App;
