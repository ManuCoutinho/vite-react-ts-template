import { useState } from 'react'
import styles from './styles.module.css'

export const Home: React.FC = () => {
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    if (data.email === 'eduardo.lino@pucpr.br' && data.password === '123456') {
      setSuccess(true)
      setError(false)
    }
    if (data.email !== 'eduardo.lino@pucpr.br' && data.password !== '123456') {
      setSuccess(false)
      setError(true)
    }
    console.log(data)
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="/login" method="POST" id='login-ads' className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input__wrapper}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input__field} placeholder="Digite seu email" />
        </div>
        <div className={styles.input__wrapper}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" className={styles.input__field} placeholder="Digite sua senha" />
        </div>

        <button className={styles.button__submit} type="submit">Enviar</button>
      </form>
      {success && <p className={styles.success}>Acessado com sucesso!</p>}
      {error && <p className={styles.error}>Usuário ou senha incorretos!</p>}
    </section>
  )
}
