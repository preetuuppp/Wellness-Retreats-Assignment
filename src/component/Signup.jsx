import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const Signup = () => (
  <div>
    <h1>Displaying Error Messages</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <label>UserName</label>
          <Field name="username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          <br /> <br />

          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
