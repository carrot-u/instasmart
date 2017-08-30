import React from "react";
import TextArea from './TextArea';
import TextInput from './TextInput';
import TagsInput from './TagsInput';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { WithContext as ReactTags } from 'react-tag-input';

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
              <h3 id="modal-title">Ask a Question</h3>
              <div className="container">
                <div className="mx-1">
                  <p>Instasmart is a question and answer forum for Instacart employees. You can ask about anything Instacart from how to access a quip document to the history of our company values.</p>
                </div>
                <TextArea
                  label="Question"
                  labelClass="h5"
                  optional={false}
                  className="form-control"
                  style={this.props.question && {color: "darkgreen"}}
                  name="summary"
                  rows="5"
                  placeholder={"Enter your question here..."}
                  onChange={this.props.onChange}
                  defaultValue={this.props.question ? this.props.question.summary : ''}
                  error={this.props.errors.summary}
                />

                <TextArea
                  label="Details"
                  labelClass="h5"
                  optional={true}
                  style={this.props.question && {color: "darkgreen"}}
                  className="form-control"
                  name="body"
                  rows="4"
                  placeholder="Add Question Details..."
                  onChange={this.props.onChange}
                  defaultValue={this.props.question ?  this.props.question.body : ''}
                  error={this.props.errors.body}

                />

                <TagsInput 
                  label="Tags"
                  labelClass="h5"
                  placeholder="Press tab to add additional tags"
                  name="tag_list"
                  optional={true}
                  tags={this.props.tags}
                  suggestions={this.props.suggestions}
                  handleDeleteTag={this.props.handleDeleteTag}
                  handleAdditionTag={this.props.handleAdditionTag}
                  handleDragTag={this.props.handleDragTag}
                  error={this.props.errors.tags} />
                </div>

            </form>
          </ModalBody>
          <ModalFooter>
            <Button id="submit-button" onClick={this.props.onSubmit}>Submit</Button>{" "}
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
