import React from 'react'
import { connect } from 'react-redux';
import { load } from '../reducers/category'

import { Field } from 'redux-form'

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
    this.updateCategoryId = this.updateCategoryId.bind(this);
    this.state = {
      open: false,
      category: null,
      history: this.props.history,
      category_id: null
    };
    this.categoryInput = null;
    this.setCategoryRef = element => {
      this.categoryInput = element;
    };
    this.getCategory = () => {
      console.log(`this.categoryInput.value${this.categoryInput ? this.categoryInput.value : ""}`);
      return this.categoryInput ? this.categoryInput.value : ""
    };
  }

  updateCategoryId(category_id){
    console.log(category_id);
    console.log("ABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABC");
    console.log(this.getCategory());
    this.setState({category_id})
    this.props.updateCategoryId(this.getCategory())
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  componentDidMount() {
    this.props.load()
    // this.props.updateCategoryId(this.getCategory())
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

    console.log(this.getCategory());
  }

  render() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas");
    
    console.log(this.getCategory());

    const { categories } = this.props
    return (
      <div style={{ marginTop: '10px' }}>
        <label style={{ marginRight: 5 }}>Category：</label>
        <Field name="category" component="select" ref={this.setCategoryRef} onChange={() => this.updateCategoryId(this.getCategory())}>
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