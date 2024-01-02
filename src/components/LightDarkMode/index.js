// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  onLightDarkMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'
    const cardClassName = isLightMode ? 'light-mode' : 'dark-mode'
    return (
      <div className="container">
        <div className={`card-container ${cardClassName}`}>
          <h1>click To Change Mode</h1>
          <button
            type="button"
            className="mode-button"
            onClick={this.onLightDarkMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
