import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getButtonText()

    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="s-button" onClick={this.isSubscribe}>
          {buttonTxt}
        </button>
      </div>
    )
  }
}

export default Welcome
