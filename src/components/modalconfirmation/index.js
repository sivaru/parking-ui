
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ModalConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button outline className={this.props.buttonClassName} color={this.props.buttonColor ? this.props.buttonColor : "danger"} onClick={this.toggle}><FontAwesomeIcon icon={this.props.buttonLabel} /></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.bodyText}
          </ModalBody>
          <ModalFooter>
            <Button
              outline
              color={this.props.confirmationColor ? this.props.confirmationColor : 'primary'}
              onClick={this.props.action}>
              {this.props.confirmationText}
            </Button>{' '}
            <Button outline color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalConfirmation;