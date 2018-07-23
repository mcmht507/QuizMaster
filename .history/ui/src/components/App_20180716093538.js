import React from 'React'
import Rect from './Rect'

@connect(
  state => ({
    // reducerで受け取った結果をpropsに返却する
    comments: state.comment.comments
  }),
  // actionを指定
  { load }
)

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Rect num={1} bgcolor='#e02020' />
        <Rect num={2} bgcolor='#20e020' />
        <Rect num={3} bgcolor='#2020e0' />
      </div>
    )
  }
}