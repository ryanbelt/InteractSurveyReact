/**
 * Created by ryanpan on 2018-10-04.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import styles from './Barcode.css';
// import globalStyles from '../../App/App.css';
import { fetchQuestion } from '../SurveyAction';
let _ = require('underscore');

class SurveyMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onQuestion: null
    };
  }

  componentWillMount(){
    this.props.fetchQuestion('5bb60ab958a0001c487aea8b')
      .then(() => {
        this.changeQuestion();
      })
  }

  changeQuestion(questionNumber){
    if(!this.props.question){
      this.setState({onQuestion:null});
    }
    if(!questionNumber){
      questionNumber = "Q1"
    }
    let questionIndex = _.findIndex(this.props.question.questions, {
      number: questionNumber
    })

    this.setState({onQuestion: this.props.question.questions[questionIndex]});
  }

  generateOption(){
    if(!this.state.onQuestion){
      return []
    }else{
      console.log('in')
      let questionArray = []
      for (let index in this.state.onQuestion.answers){
        console.log(this.state.onQuestion.answers)
        questionArray.push(<div key={index}>{this.state.onQuestion.answers[index].text}</div>)
      }
      return questionArray;
    }
  }


  render() {
    let options = this.generateOption();
    return <div>
      <div>{this.state.onQuestion? this.state.onQuestion.text :null}</div>
      {options}
    </div>
  }



}


const mapStateToProps = (state) => {
  return {
    question: state.survey.question
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (id) => {
      return dispatch(fetchQuestion(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMain);
