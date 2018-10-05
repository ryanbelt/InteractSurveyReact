/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BarGraph from '../components/BarGraph';
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

  displayPersonalSolution() {
    if (!this.state.responseObj) {
      return "";
    }

    return <BarGraph responseObj={this.state.responseObj} />;
  }

  render() {
    return <div className="container">
      <h3 style={{textAlign: "center"}}>Global Metric</h3>
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
