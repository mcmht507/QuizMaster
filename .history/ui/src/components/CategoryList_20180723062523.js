import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/category'

import { Field } from 'redux-form'

@connect(
  state => ({
    categories: state.category.categories,
    result: state.category.result
  }),
  { load }
)

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      category: null,
      history: this.props.history,
      category_id: null
    };
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {
    const { categories } = this.props
    return (
      <div style={{ marginTop: '10px' }}>
        <label style={{ marginRight: 5 }}>Category：</label>
        <Field name="category" component="select">
          {categories && categories.map((category) => {
            return (
              <option key={category.category_id} value={category.category_id}>{category.content}</option>
            )
          })}
        </Field>
      </div>
    )
  }
}