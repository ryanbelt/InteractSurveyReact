/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import styles from './Barcode.css';
// import globalStyles from '../../App/App.css';
import { getResponse, getMetrics } from '../SurveyAction';
let _ = require('underscore');

class Solution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseObj: null,
      globalMetric: null,
    };
  }

  componentWillMount(){
    let self = this;
    let uuid = this.props.params.uuid;
    this.props.getResponse(uuid)
      .then((res) => {
        self.setState({ responseObj: res });
        return self.props.getMetrics(res.questionId)
      })
      .then((res) => {
        self.setState({ globalMetric: res });
      });
  }

  displayPersonalSolution() {
    if (!this.state.responseObj) {
      return [];
    }
    let solution = [];
    for (let result of this.state.responseObj.result) {
      let percentage = Math.round(result.value/this.state.responseObj.categoryPoint * 10000)/100
        solution.push(<div key={result.text}>
          <div>{result.text}: {percentage}% </div>
        </div>);
    }
    return solution;
  }

  displayGlobalSolution() {
    if (!this.state.globalMetric) {
      return [];
    }
    let solution = [];
    for (let result of this.state.globalMetric.result) {
      let percentage = Math.round(result.value / this.state.globalMetric.categoryPoint * 10000)/100
      solution.push(<div key={result.text}>
        <div>{result.text}: {percentage}% </div>
      </div>);
    }
    return solution;
  }

  render() {
    return <div>
      <h3>Solution</h3>
      <div>{this.displayPersonalSolution()}</div>
      <h3>Global Metric</h3>
      <div>
        {this.displayGlobalSolution()}
      </div>
    </div>
  }



}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResponse:(uuid)=>{
      return dispatch(getResponse(uuid))
    },
    getMetrics: (questionId)=>{
      return dispatch(getMetrics(questionId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Solution);
