import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/category'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';

import { Card, CardContent, CardActions, Button, TextField } from 'material-ui'
import AddIcon from 'material-ui-icons/Add';


// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    questions: state.category.categories,
    result: state.question.result
  }),
  // propsに付与するactions
  { load }
)

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      question: null,
      history: this.props.history
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
      AAAAAAAAAAAA
      </div>
    )
  }
}