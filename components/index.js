/** @jsx preact.h */

import preact, { Component } from 'preact'

export default class MyComponent extends Component {
  constructor (props) {
    super(props)
    props.input.addEventListener('focus', this.handleFocus)
    props.input.addEventListener('blur', this.handleBlur)
    props.input.addEventListener('input', this.handleInput)
    this.state = {
      hasFocus: false,
      intensity: props.input.value,
      isSliding: false
    }
  }

  handleFocus = () => { this.setState({hasFocus: true}) }
  handleBlur = () => { this.setState({hasFocus: false}) }
  handleInput = () => { this.setState({ intensity: this.props.input.value }) }
  handleMouseDown = (event) => {
    this.setState({
      isSliding: true,
      hasFocus: true
    })
    this.props.input.focus()
    this.handleSlide(event.clientX)
    document.addEventListener('mouseup', this.handleMouseUp)
  }
  handleMouseMove = (event) => {
    if (this.state.isSliding) {
      this.handleSlide(event.clientX)
    }
  }
  handleTouchStart = (event) => {
    this.handleSlide(event.touches[0].clientX)
  }
  handleTouchMove = (event) => {
    this.handleSlide(event.touches[0].clientX)
  }
  handleMouseUp = () => {
    this.setState({ isSliding: false })
    document.removeEventListener('mouseup', this.handleMouseUp)
  }
  handleSlide = (clientX) => {
    const min = parseInt(this.props.input.min || 1, 10)
    const max = parseInt(this.props.input.max || 100, 10)
    let intensity = Math.round(
      ((clientX - this.div.offsetLeft - 10) / this.img.width) * max
    ) - 1
    if (intensity < min) {
      intensity = min
    } else if (intensity > max) {
      intensity = max
    }
    this.setState({ intensity })
    this.props.input.value = intensity
    this.props.input.focus()

    const changeEvent = document.createEvent('HTMLEvents')
    changeEvent.initEvent('change', false, true)
    this.props.input.dispatchEvent(changeEvent)
  }
  handleClick = () => { this.props.input.focus() }
  jitter = () => {
    this.img.style.marginLeft = `${Math.random() * this.state.intensity}px`
    this.img.style.marginTop = `${Math.random() * this.state.intensity}px`
  }
  setImg = (node) => { this.img = node }
  setDiv = (node) => { this.div = node }
  componentDidMount = () => { this.interval = setInterval(this.jitter, 50) }
  componentWillUnmount = () => { clearInterval(this.interval) }

  render () {
    const left = (this.state.intensity / parseInt(this.props.input.max, 10)) * 250
    return (
      <div
        ref={this.setDiv}
        style='position: relative; height: 300px;width: 300px;user-select: none;'
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleMouseUp}
      >
        <img
          style={`user-select: none;width: 250px; height: 250px;border: 10px solid ${this.state.hasFocus ? 'blue' : 'transparent'}`}
          onDragStart={(event) => {event.preventDefault()}}
          ref={this.setImg}
          src="https://d3vv6lp55qjaqc.cloudfront.net/items/0s2x113v3p3R0i0D1G00/Screen%20Shot%202016-12-01%20at%204.22.24%20PM.png?X-CloudApp-Visitor-Id=8c7c3ddb4f82754e00f6dac0eaa0cbfa&v=416b811a"
        />
        <div
          style={`position: absolute; height: 250px; width: 15px; background-color: red;top: 0;left: ${left}px;`}
        />
      </div>
    )
  }
}

MyComponent.displayName = 'MyComponent'
