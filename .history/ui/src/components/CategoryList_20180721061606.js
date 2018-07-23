import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/category'

import { Field, reduxForm } from 'redux-form'

@reduxForm({
  form: 'syncValidation',
  validate: values => {
    // 入力変更時にパラメータが渡ってくる
    const errors = {}
    if (!values.firstname) {
      errors.firstname = '必須項目です'
    }
    return errors
  }
})

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
      history: this.props.history,
      category_id: this.props.category_id
    }
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
    // this.props.initialize({category:"mele"});
  }

  render() {
    const { categories } = this.props
    return (
      <div style={{ marginTop: '10px' }}>
        <label style={{ marginRight: 5 }}>Category：</label>
        <Field name="category" component="select">
          <option value="female">女性</option>
          {categories && categories.map((category) => {
            return (
              <option key={category.category_id} value={category.category_id}>{category.content}</option>
            )
          })}
          <option value="male">男性</option>,
        </Field>
      </div>
    )
  }
}