import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

import * as warningModalActions from "../../actions/warningModalActions";


class WarningModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: 'static'
    };

    this.changeBackdrop = this.changeBackdrop.bind(this);
  }


  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
   console.log("WarningModal", this.props);

    return (
      <div>
        <Modal isOpen={this.props.showModal} toggle={this.props.toggleWarningModal} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.props.actions.toggleWarningModal}>{this.props.modalHeader}</ModalHeader>
          <ModalBody>
            <div className="center-items">
              {this.props.modalText}
            </div>
          </ModalBody>
          <div className="center-items pb-3">
            <Button color="danger" className="mr-1" onClick={this.props.actions.warningModalProceed}>Proceed</Button>
            <Button color="secondary" onClick={this.props.actions.toggleWarningModal}>Cancel</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  console.log("mapStateToProps in WarningModal", state);
  return {
    showModal: state.warningModal.showModal,
    modalText: state.warningModal.modalText,
    modalHeader: state.warningModal.modalHeader,
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(warningModalActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WarningModal);