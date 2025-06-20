import React from 'react'
import styles from './TextField.module.css'

type Props = {
  label?: string
  hint?: string
  //   restProps: undefined
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, hint, ...restProps }: Props) => {
  return (
    <>
      <label className={styles.textfield}>
        <span className={styles.label}>{label}</span>
        <input
          className={styles.input}
          {...restProps}></input>
        {hint && <div className={styles.hint}>{hint}</div>}
      </label>
    </>
  )
}

export default TextField
