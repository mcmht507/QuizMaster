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
    if (!values.lastname) {
      errors.lastname = '必須項目です'
    }
    if (!values.email) {
      errors.email = '必須項目です'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'メールアドレスとして認識できません'
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