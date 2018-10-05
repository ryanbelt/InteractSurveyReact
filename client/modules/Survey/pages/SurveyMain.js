/**
 * Created by ryanpan on 2018-10-04.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import styles from './Barcode.css';
// import globalStyles from '../../App/App.css';
import { fetchQuestion, updateResponse } from '../SurveyAction';
let _ = require('underscore');

class SurveyMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onQuestion: null
    };
  }

  componentWillMount(){
    if(!this.props.uuid){
      browserHistory.push('/');
    }
    this.props.fetchQuestion(this.props.params.questionId)
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

  generateOptions(){
    if(!this.state.onQuestion){
      return []
    }else{
      let questionArray = []
      for (let index in this.state.onQuestion.answers){
        questionArray.push(<div key={index} onClick={this.saveSelection.bind(this, this.state.onQuestion.answers[index])}>{this.state.onQuestion.answers[index].text}</div>)
      }
      return questionArray;
    }
  }

  saveSelection(option){
    let self = this;
    if(!option){
      //todo, error handle
    }
    else if(!option.next){
 //todo direct by uuid
      browserHistory.push(`/survey/solution/${this.props.uuid}`);
    }
    else{
      return this.props.updateResponse(this.props.uuid,{
        questionId: this.props.question._id,
        question: this.state.onQuestion.text,
        answer: option
      })
        .then(function(){
          self.changeQuestion(option.next);
        })

    }
  }


  render() {
    return <div>
      <div>{this.state.onQuestion? this.state.onQuestion.text :null}</div>
      {this.generateOptions()}
    </div>
  }



}


const mapStateToProps = (state) => {
  return {
    question: state.survey.question,
    uuid: state.survey.uuid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (id) => {
      return dispatch(fetchQuestion(id));
    },
    updateResponse: (uuid, body) => {
      return dispatch(updateResponse(uuid, body));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyMain);
