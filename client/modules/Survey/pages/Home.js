/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import styles from './Barcode.css';
import globalStyles from '../../App/App.css';
import { setUUID } from '../SurveyAction';


const uuidv4 = require('uuid/v4');
const _ = require('underscore');

class Home extends Component {
  constructor(props) {
    super(props);
  }

  directToNewSurvey(){
    let uuid = uuidv4()
    this.props.setUUID(uuid);
    browserHistory.push('/survey/5bb60ab958a0001c487aea8b');
  }

  directToMetric(){
    browserHistory.push('/metric/5bb60ab958a0001c487aea8b');
  }

  render() {
    return <div className="container">
      <div className={globalStyles.btn} role="button" onClick={this.directToNewSurvey.bind(this)}>New PC Buyer Survey</div>
      <br/>
      <div className={globalStyles.btn} style={{marginTop: 30}} role="button" onClick={this.directToMetric.bind(this)}>PC Buyer Metric</div>
    </div>
  }



}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUUID: (uuid)=>{
      dispatch(setUUID(uuid))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
