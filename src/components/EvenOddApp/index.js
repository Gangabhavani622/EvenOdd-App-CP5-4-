// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, textCount: 'Even'}

  onIncrementCount = () => {
    const rand = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + rand}))
  }

  render() {
    const {count} = this.state
    let {textCount} = this.state
    if (count % 2 !== 0) {
      textCount = 'Odd'
    }

    return (
      <div className="container">
        <div>
          <h1 className="count">Count {count}</h1>
          <h1 className="description">Count is {textCount}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementCount}
          >
            Increment
          </button>
          <p className="para">*Increased By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
