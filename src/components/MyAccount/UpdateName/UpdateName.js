import React from 'react'
import './UpdateName.css'
import { FaPuzzlePiece} from 'react-icons/fa'
import Form from '../../Form/Form'
import Api from '../../../DAL/api'

const UpdateDetails = () => {
  const formInputs= {
    firstName: {
    id: 1,
    name: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    value: '',
    type: 'text',
    validations: {},
    errors: [],
    icon: FaPuzzlePiece
  },
  lastName: {
      id: 2,
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      value: '',
      type: 'text',
      validations: {},
      errors: [],
      icon: FaPuzzlePiece
  }}
  return (
    <div className='update-name-container'>
    <h1>Update Name</h1>
    <div className='update-name-card'>
    <Form formInputs={formInputs} title='' onSubmit='Change' error="something went wrong" req={Api.updateName} canBeEmpty={true}></Form>
    </div>
</div>
  )
}

export default UpdateDetails