import styles from './login.module.css'

const LoginForm = (props) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}> Login
        <input className={styles.input} />
      </label>
      <label className={styles.label}> Password
        <input className={styles.input} />
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox} /> remember me
      </label>
      <button className={`${styles.button} button`}> Login</button>
    </form>
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