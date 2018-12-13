import React, { Component } from 'react'

// react-colour-wheel:
import ColourWheel from './components/colourWheel/ColourWheel'

const yourDefaultColour = 'rgb(0, 0, 0)'

class App extends Component {
  state = {
    selectedColour: yourDefaultColour
  }

  clearColourWheel = () => {
    this.colourWheel.clear(() => {
      // Do some other stuff in this callback if you want -- other than re-setting your selectedColour.
      this.setState({ selectedColour: yourDefaultColour })
    })
  }

  render () {
    const { selectedColour } = this.state

    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          backgroundColor: '#394032',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
          <h1>react-colour-wheel</h1>
          <h2><span>Your colour: </span><span style={{ color: selectedColour }}>{selectedColour}</span></h2>
        </div>
        <ColourWheel
          radius={200}
          padding={10}
          lineWidth={50}
          dynamicCursor
          onColourSelected={(rgb) => this.setState({ selectedColour: rgb })}
          onRef={ref => (this.colourWheel = ref)}
          // shadow
          // shadowAmount
          // shadowColour
        />
        <div
          onClick={this.clearColourWheel}
          style={{
            cursor: 'pointer',
            fontSize: 20,
            fontWeight: '500',
            color: '#FFFFFF',
            marginTop: 20
          }}>
          clear
        </div>
      </div>
    )
  }
}

export default App
