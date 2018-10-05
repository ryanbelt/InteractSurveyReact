/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BarGraph from '../components/BarGraph';
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
    return <BarGraph responseObj={this.state.responseObj} />;
  }

  displayGlobalSolution() {
    if (!this.state.globalMetric) {
      return "";
    }

    return <BarGraph responseObj={this.state.globalMetric} />;
  }

  render() {
    return <div className="container">
      <h3 style={{textAlign: "center"}}>Personal Solution</h3>
      <div>{this.displayPersonalSolution()}</div>
      <h3 style={{textAlign: "center"}}>Global Metric</h3>
      <div>{this.displayGlobalSolution()}</div>
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
