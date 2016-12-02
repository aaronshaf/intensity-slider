/** @jsx preact.h */
import preact from 'preact'
import MyComponent from './components'
import createElementClass from 'create-element-class'

const MyElement = createElementClass({
  connectedCallback() {
    this.input = this.querySelector('input')
    const srStyles = {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'fixed',
      width: '1px'
    }
    Object.keys(srStyles).forEach((key) => {
      this.input.style[key] = srStyles[key]
    })
    this.updateRendering()
  },

  updateRendering() {
    preact.render(<MyComponent input={this.input} />, this, this.lastChild)
    this.rendered = true
  },

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }
})
MyElement.observedAttributes = []

export default MyElement
