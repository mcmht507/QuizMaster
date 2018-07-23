import React from 'React'
import Rect from './Rect'

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