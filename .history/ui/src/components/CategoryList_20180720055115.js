import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/category'

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
export default class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      category: null,
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
      <div>
        <Field name="gender" component="select">
          <option value="male">男性</option>
          <option value="female">女性</option>
        </Field>
      </div>
    )
  }
}