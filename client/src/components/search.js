import React from 'react'
import {Form, Field, Submit} from 'easy-react-form'

const search = () => {
  return (
    <div>
         <Form onSubmit={ this.submit }>
            <Field
            required
            name="phone"
            component="input"
            type="tel"
            placeholder="Enter phone number"
            // Initial value for this field.
            value={ user.phone }
            validate={ this.validatePhone } />

            <Submit component={ SubmitButton }>
            Save
            </Submit>
      </Form>
    </div>
  )
}

export default search