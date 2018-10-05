/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import styles from './Barcode.css';
// import globalStyles from '../../App/App.css';
import { getMetrics } from '../SurveyAction';
let _ = require('underscore');

class Solution extends Component {
  constructor(props) {
    super(props);

    this.state={
      responseObj: null
    }
  }

  componentWillMount(){
    let self = this;
    this.props.getMetrics(this.props.params.questionId)
      .then((res) => {
        self.setState({ responseObj: res });
      })
  }

  displayPersonalSolution(){
    console.log(this.state.responseObj)
    if(!this.state.responseObj){
      return ""
    }
    let solution = ""
    for(let result of this.state.responseObj.result){
      solution+=`--${result.text}: ${result.value/this.state.responseObj.categoryPoint}     `
    }
    return solution
  }

  render() {
    return <div>
      Solution
      <div>{this.displayPersonalSolution()}</div>
    </div>
  }



}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMetrics:(questionId)=>{
      return dispatch(getMetrics(questionId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Solution);
