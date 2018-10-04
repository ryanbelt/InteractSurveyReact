/**
 * Created by ryanpan on 2018-10-04.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import styles from './Barcode.css';
// import globalStyles from '../../App/App.css';

class SurveyMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return <div>"123123123123"</div>
  }



}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMain);
