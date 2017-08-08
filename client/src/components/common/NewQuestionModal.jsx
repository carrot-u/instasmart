import React from "react";
import TextArea from './TextArea';
import TextInput from './TextInput';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.onToggleModal}
          className="modal-dialog question-modal"
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.modalHeader}{" "}
          </ModalHeader>
          <ModalBody>
            <form>
              <TextArea
                label="Question"
                labelClass="h3"
                className="form-control"
                name="summary"
                rows="3"
                placeholder={"Ask your question..."}
                onChange={this.props.onChange}
                error={this.props.errors.summary}
              />

              <TextArea
                label="Details"
                labelClass="h5"
                optional={true}
                className="form-control"
                name="body"
                rows="4"
                placeholder="Add Question Details..."
                onChange={this.props.onChange}
                error={this.props.errors.body}

              />

              <TextInput
                label="Tags"
                labelClass="h5"
                optional={true}
                className="form-control"
                name="tag_list"
                placeholder="&quot;Happiness&quot;, &quot;Culture&quot;, etc..."
                onChange={this.props.onChange}
                error={this.props.errors.tags}

              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.onSubmit}>Submit</Button>{" "}
            <Button color="secondary" onClick={this.props.onToggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewQuestionModal;