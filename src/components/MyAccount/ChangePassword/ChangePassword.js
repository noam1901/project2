import React from 'react'
import './ChangePassword.css'
import {FaPaperclip} from 'react-icons/fa'
import Form from '../../Form/Form'
import Api from '../../../DAL/api'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Corngratz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Have a nice day</h4>
        <p>
          Your changed password successfully
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ChangePassword = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const formInputs={
    password: {
      id: 4,
      name: 'password',
      label: 'Password',
      placeholder: "Please enter your password",
      value: '',
      type: 'password',
      validations: {
          required: true
      },
      errors: [],
      icon: FaPaperclip,
  },
  confirm_password: {
      id: 5,
      name: 'confirm_password',
      label: 'Confirm Password',
      placeholder: "Please enter your password again",
      value: '',
      type: 'password',
      validations: {
          required: true,
          confirm_password: true
      },
      errors: [],
      icon: FaPaperclip
  }
  }
  return (
    <div className='password-container'>
        <h1>Change Password</h1>
        <Form formInputs={formInputs} 
        title='' 
        onSubmit='Change Password' 
        error="something went wrong" 
        req={Api.updatePassword} 
        onSuccess={()=>{setModalShow(true)}}></Form>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default ChangePassword