import React from 'react'
import {Form, Field, Submit} from 'easy-react-form'

const Search = (props) => {
  
  const testFunc = values => {
     console.log(values.search)
  }

  return (
    <div>
         <Form onSubmit = {values => testFunc(values)}>
            <Field
                required
                name="search"
                component="input"
                placeholder="Enter Query"/>
{/* 
            <Submit component= "button">
                Save
            </Submit> */}
      </Form>
    </div>
  )
}

export default Search