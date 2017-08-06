import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewQuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: true
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
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.onToggleModal} className="modal-dialog question-modal">
          <ModalHeader toggle={this.toggle}>{this.props.modalHeader} </ModalHeader>
          <ModalBody>
            <form>
              <label htmlFor="question_summary" className="h3"><b>Question</b></label>
              <textarea 
                className="form-control mb-4" 
                id="question_summary" rows="3" 
                placeholder="Ask your question" />

              <label htmlFor="question_body" className="h5"><b>Details</b></label><small> optional</small>
              <textarea 
                className="form-control mb-1" 
               id="question_body"
               rows="4"
               placeholder="Add Question Details" />
              <label htmlFor="question_body" className="h5"><b>Tags</b></label><small> optional</small>
              <input
               className="form-control tag-entry " 
               placeholder='"Happiness", "Culture", etc...' 
               rows="1" />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.onSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.props.onToggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewQuestionModal;