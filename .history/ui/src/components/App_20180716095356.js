import React from 'react'
import { connect } from 'react-redux';
// コメントreducerのactionを取得
import { load } from '../reducers/comment'

@connect(
  state => ({
    users: state.user.users
  }),
  { load }
)
export default class App extends React.Component {

  componentWillMount() {
    this.props.load()
  }

  render() {
    const { users } = this.props
    return (
      <div>
        {/* 配列形式で返却されるためmapで展開する */}
        {users && users.map((user) => {
          return (
            // ループで展開する要素には一意なkeyをつける（ReactJSの決まり事）
            <div key={user.email}>
              <img src={user.picture.thumbnail} />
              <p>名前:{user.name.first + ' ' + user.name.last}</p>
              <p>性別:{user.gender}</p>
              <p>email:{user.email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}