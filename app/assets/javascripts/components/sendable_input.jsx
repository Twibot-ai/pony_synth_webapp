import React from 'react'
import { TextField, Button } from '@material-ui/core';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import _ from 'lodash'

class SendableInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text_input: '',
      buttonDisabled: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendInput = this.sendInput.bind(this);
  }

  handleChange(event) {
    let text_input = event.target.value;
    let isDisabled = _.isEmpty(text_input);

    this.setState({
      text_input: text_input,
      buttonDisabled: isDisabled
    });
  }

  sendInput() {
    this.props.sendInput(this.state);
  }

  render() {
    return (
      <div className={ { flexWrap: 'wrap' } }>
        <TextField
          required
          fullWidth
          id="phrase"
          label="Phrase to say"
          placeholder="Type your phrase here"
          className=""
          margin="normal"
          variant="filled"
          autoComplete="off"
          value={this.state.text_input}
          onChange={this.handleChange}
        />
        <Button variant="contained"
                disabled={this.state.buttonDisabled}
                color="secondary"
                onClick={this.sendInput}
        >
          <QueueMusicIcon />
          Generate
        </Button>
      </div>
    );
  }
}

export default SendableInput;
