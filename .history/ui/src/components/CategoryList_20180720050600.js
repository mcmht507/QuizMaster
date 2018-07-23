import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/user'

import { AppBar, Toolbar, Avatar, Card, CardContent, Button, TextField } from 'material-ui'
import Typography from 'material-ui/Typography'
import { Field, reduxForm } from 'redux-form'

// connectのdecorator
@connect(
  // propsに受け取るreducerのstate
  state => ({
    categories: state.category.categories,
    result: state.category.result
  }),
  // propsに付与するactions
  { load }
)
export default class CatgoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      category: null,
    }
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { categories } = this.props
    console.log(categories);
    return (
      <div>
        <Field name="gender" component="select">
          <option value="male">男性</option>
          <option value="female">女性</option>
        </Field>
      </div>
    )
  }
}