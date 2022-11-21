import {Component} from 'react'

import './index.css'

let intervalId = null

class Stopwatch extends Component {
  state = {initialTimer: 0}

  componentWillUnmount() {
    clearInterval(intervalId)
  }

  startTheTimer = () => {
    intervalId = setInterval(this.updateInterval, 1000)
  }

  updateInterval = () => {
    this.setState(prevState => ({
      initialTimer: prevState.initialTimer + 1,
    }))
  }

  stopTheTimer = () => {
    clearInterval(intervalId)
  }

  resetTheTimer = () => {
    clearInterval(this.intervalId)
    this.setState({initialTimer: 0})
  }

  getSeconds = () => {
    const {initialTimer} = this.state
    const seconds = Math.floor(initialTimer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  getMinutes = () => {
    const {initialTimer} = this.state
    const minutes = Math.floor(initialTimer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="react-app">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1>{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="start-button"
                onClick={this.startTheTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button"
                onClick={this.stopTheTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={this.resetTheTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
