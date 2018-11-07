import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ExamComponent from '../components/exam';
import { getAllDataInStack } from '../actions/exam';

class Exam extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllDataInStack());
  }

  render() {
    const { listDataInStack } = this.props;
    return (
      <div>
        <ExamComponent
          listStack={listDataInStack}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    listDataInStack: state.getAllDataInStackReducer.data
  }
)
export default connect(mapStateToProps)(Exam);
