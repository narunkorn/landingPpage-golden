import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function PopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    {
      props.Myname ? setShow(true) : setShow(false);
    }
  };

  return (
    <>
      <button onClick={handleShow}>send</button>

      <Modal show={show} onHide={handleClose} animation={false}>
        {props.Myname ? (
          <Modal.Body style={{ lineHeight: "0.2" }}>
            {props.Myname ? `name:${props.Myname}` : ""}
          </Modal.Body>
        ) : null}
        {props.Myemail ? (
          <Modal.Body style={{ lineHeight: "0.2" }}>
            {props.Myemail ? `email:${props.Myemail}` : ""}
          </Modal.Body>
        ) : null}
        {props.Mysubject ? (
          <Modal.Body style={{ lineHeight: "0.2" }}>
            {props.Mysubject ? `subject:${props.Mysubject}` : ""}
          </Modal.Body>
        ) : null}

        {props.Mymassage ? (
          <Modal.Body style={{ lineHeight: "0.2" }}>
            {props.Mymassage ? `massage:${props.Mymassage}` : ""}
          </Modal.Body>
        ) : null}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
