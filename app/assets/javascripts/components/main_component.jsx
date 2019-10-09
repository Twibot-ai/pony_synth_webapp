import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core';
import SendableInput from "./sendable_input";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import OrderChannel from "../../../javascript/channels/order_channel";
import LoaderComponent from "./loader_component";
import Typography from '@material-ui/core/es/Typography/Typography'
// import AudioComponent from "./audio_component";
import Link from '@material-ui/core/Link'
import CloudDownload from '@material-ui/icons/CloudDownload'

class MainComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ws: null,
      order_state: 'not_queued',
      orders: []
    };

    this.sendOrder = this.sendOrder.bind(this);
    this.handleSocketReceived = this.handleSocketReceived.bind(this);
  }

  componentDidMount() {
    this.connect();
  }

  connect() {
    let ws = OrderChannel(this.handleSocketReceived);

    this.setState({
      ws: ws
    });
  }

  handleSocketReceived(data) {

    switch(data.action) {
      case 'order_state_changed':
        this.orderStateChanged(data);
        break;
    }
  }

  orderStateChanged(state) {
    let new_state = {};

    switch (state.order_state) {
      case 'not_queued':
        new_state['order_state'] = 'not_queued';
        break;
      case 'queued':
        new_state['order_state'] = 'queued';
        break;
      case 'generation_started':
        new_state['order_state'] = 'processing';
        break;
      case 'generation_finished':
        new_state['order_state'] = 'finished';
        new_state['orders'] = this.state.orders.concat([state.file_url]);
        break;
      case 'retry':
        new_state['order_state'] = 'retry';
        break;
      default:
        new_state['order_state'] = 'error'
    }

    this.setState({
      ...new_state
    });
  }

  sendOrder(inputData) {
    this.state.ws.sendOrder(inputData);
  }

  renderOrders() {
    // let orders = this.state.orders.map((order_url, index) => { return (<AudioComponent key={index} audio_url={order_url} />) });
    let orders = this.state.orders.map(this.renderLink);
    return (
      <React.Fragment>
      {orders}
      </React.Fragment>
    );
  }

  renderLink(url, index) {
    return(
      <Link href={url} key={index}>
        <CloudDownload/>
      </Link>
    );
  }

  renderInput() {
    if(this.state.order_state === 'not_queued' ||
       this.state.order_state === 'error' ||
       this.state.order_state === 'finished'
    ){
      return(<SendableInput sendInput={this.sendOrder}/>);
    } else
    {
      return '';
    }
  }

  render() {
    return(
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6"
                        color="inherit"
                        noWrap
            >
              Pony voice synthesiser
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm">
          <LoaderComponent order_state={this.state.order_state} />
          {this.renderInput()}
          {this.renderOrders()}
        </Container>
      </React.Fragment>
    );
  }
}

export default MainComponent;
