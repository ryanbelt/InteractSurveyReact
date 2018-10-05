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

    this.state = {
      responseObj: null
    };
  }

  componentWillMount(){
    let self = this;
    this.props.getMetrics(this.props.params.questionId)
      .then((res) => {
        self.setState({ responseObj: res });
      });
  }

  displayPersonalSolution(){
    if (!this.state.responseObj) {
      return [];
    }
    let solution = []
    for (let result of this.state.responseObj.result) {
      let percentage = Math.round(result.value/this.state.responseObj.categoryPoint * 10000)/100
      solution.push(<div key={result.text}>
        <div>{result.text}: {percentage}%  </div>
      </div>);
    }
    return solution;
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
