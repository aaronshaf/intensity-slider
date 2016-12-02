/** @jsx preact.h */

import preact, { Component } from 'preact'

export default class MyComponent extends Component {
  constructor (props) {
    super(props)
    this.props.input.addEventListener('focus', this.handleFocus)
    this.props.input.addEventListener('blur', this.handleBlur)
    this.props.input.addEventListener('input', this.handleInput)
    this.state = {
      hasFocus: false,
      intensity: this.props.input.value
    }
  }

  handleFocus = () => { this.setState({hasFocus: true}) }
  handleBlur = () => { this.setState({hasFocus: false}) }
  handleInput = () => {
    this.setState({ intensity: this.props.input.value })
  }
  handleClick = (event) => {
    const intensity = Math.round(
      ((event.clientX - event.target.offsetLeft) / event.target.width) * 10
    ) - 1
    this.setState({ intensity })
    this.props.input.value = intensity
    this.props.input.focus()

    const _event = document.createEvent('HTMLEvents')
    _event.initEvent('change', false, true)
    this.props.input.dispatchEvent(_event)
  }
  jitter = () => {
    this.img.style.marginLeft = `${Math.random() * 5 * this.state.intensity}px`
    this.img.style.marginTop = `${Math.random() * 5 * this.state.intensity}px`
  }
  setImg = (node) => { this.img = node }
  componentDidMount = () => { this.interval = setInterval(this.jitter, 50) }
  componentWillUnmount = () => { clearInterval(this.interval) }

  render () {
    return (
      <div style="position: relative;">
        <img
          style={`width: 250px; height: 250px;`}
          onClick={this.handleClick}
          ref={this.setImg}
          src="https://d3vv6lp55qjaqc.cloudfront.net/items/0s2x113v3p3R0i0D1G00/Screen%20Shot%202016-12-01%20at%204.22.24%20PM.png?X-CloudApp-Visitor-Id=8c7c3ddb4f82754e00f6dac0eaa0cbfa&v=416b811a"
        />
        <div style={`position: absolute; height: 250px; width: 15px; background-color: blue;top: 0;left: ${((this.state.intensity - 1) / 9) * 250}px;`}></div>
      </div>
    )
  }
}

MyComponent.displayName = 'MyComponent'
