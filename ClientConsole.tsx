import React from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

type meetingDetails = {
  meetingDet: String;
  isMeetingDetValid: boolean;
};
class ClientConsole extends React.Component<{}, meetingDetails> {
  constructor(props: any) {
    super(props);
    this.state = { meetingDet: "", isMeetingDetValid: false };
    this.joinMeeting = this.joinMeeting.bind(this);
  }
  joinMeeting(event: any) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.state?.meetingDet === "")
      this.setState({ isMeetingDetValid: true });
  }
  render() {
    return (
      <Card
        style={{ width: "50rem", marginTop: "4rem", padding: "2rem" }}
        className="container card shadow text-center"
      >
        <h1>Virtual Hall POC</h1>
        <Card.Title>Meeting Attendee Console</Card.Title>
        <Card.Body>
          <Form noValidate validated={this.state.isMeetingDetValid}>
            <Form.Group className="mb-3" controlId="MeetingDetailCheck">
              <Form.Label style={{ float: "left" }}>
                Enter Meeting URL/Meeting ID
              </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  required
                  onChange={(event) =>
                    this.setState({
                      meetingDet: event.target.value,
                      isMeetingDetValid: false,
                    })
                  }
                />

                <Form.Control.Feedback type="invalid">
                  Enter the Valid Inputs.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <br />
            <Form.Group>
              <Button
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                onClick={(evt) => this.joinMeeting(evt)}
                variant="primary"
              >
                Join Meeting
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
export default ClientConsole;
