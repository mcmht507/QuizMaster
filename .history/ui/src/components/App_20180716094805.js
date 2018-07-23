import React from 'react'
import { connect } from 'react-redux';
// コメントreducerのactionを取得
import { load } from '../reducers/comment'

// connectのdecorator
@connect(
  state => ({
    // reducerで受け取った結果をpropsに返却する
    comments: state.comment.comments
  }),
  // actionを指定
  { load }
)
export default class App extends React.Component {

  componentWillMount() {
    // コメントのactionをキックする
    this.props.load()
  }

  render() {
    // connectで取得したstateはpropsに入る
    const { comments } = this.props
    // 初回はnullが返ってくる（initialState）、処理完了後に再度結果が返ってくる
    console.log(comments)
    return (
      <div>{comments}</div>
    )
  }
}