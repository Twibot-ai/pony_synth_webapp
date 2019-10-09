import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress/';
import Typography from "@material-ui/core/es/Typography/";

class LoaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  progressMessage() {
    switch (this.props.order_state) {
      case 'not_queued': return 'Waiting for input';
      case 'queued': return 'Waiting for your queue';
      case 'processing': return 'Generating your phrase';
      case 'finished': return 'Generating is finished';
      case 'error': return 'Something went wrong';
      case 'retry': return 'Generation failed. Retrying...';
    }
  }

  progressValue() {
    switch (this.props.order_state) {
      case 'not_queued': return 0;
      case 'queued': return 33;
      case 'processing': return 75;
      case 'finished': return 100;
      case 'error': return 0;
      case 'retry': return 75;
    }
  }

  render() {
    return(
      <React.Fragment>
        <Typography variant="h6"
                    color="inherit"
                    noWrap
        >
          {this.progressMessage()}
        </Typography>
        <LinearProgress variant="determinate"
                        value={this.progressValue()}
        />
      </React.Fragment>
    );
  }
}

export default LoaderComponent;
