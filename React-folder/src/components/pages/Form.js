import React from 'react'
import { Formik, Field, Form } from "formik";

const RegForm =() =>{

    const formvalue={
        name: '',
        email: '',
        mobile: ''
    };

    const submitfn =(value)=>{
        console.log(value);
    }
  return (
    <div>
         <h3>Registration Form !!</h3>
         <Formik initialValues={formvalue} onSubmit={(value)=>submitfn(value)}>
            <Form>
                <div>
                    <label>Name:
                    <Field name="firstname" type="text" />
                    </label>
                </div>
                <div>
                    <label>Email:
                    <Field name="email" type="text" />
                    </label>
                </div>
                <div>
                    <label>Phone No:
                    <Field name="mobile" type="text" />
                    </label>
                </div>
                <button>Submit</button>
            </Form>

         </Formik>
    </div>
  );
}

export default RegForm;