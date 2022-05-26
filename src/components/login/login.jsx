import styles from './login.module.css'
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const LoginForm = (props) => {

const submit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
  setSubmitting(false);

};

  return (
    <Formik
      initialValues={{login: '', password: '', rememberMe: false}}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
        <label className={styles.label} htmlFor="login">Login</label>
        <Field id="login" type="text" name="login" className={styles.input}/>
          <ErrorMessage name="email" component="div" />
          <label className={styles.label} htmlFor="password">Password</label>
          <Field id="password" type="password" name="password" className={styles.input}/>
          <ErrorMessage name="password" component="div" />
          <Field id="rememberMe" type="checkbox" name="rememberMe" className={styles.checkbox}/>
          <label className={styles.checkbox__label} htmlFor="rememberMe">Remember me</label>
          <button type="submit" disabled={isSubmitting} className={`${styles.button} button`}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

const Login = (props) => {
  return (<div className="content">
    <div className={styles.wrapper}>
      <h1 className={styles.title}>LOGIN</h1>
      <LoginForm />
    </div>
  </div>)
}

export default Login;