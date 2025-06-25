import React from 'react'
import styles from './TextField.module.css'

type Props = {
  ref?: React.RefObject<HTMLInputElement | null>
  label?: string
  hint?: string
  //   restProps: undefined
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, hint, ref, ...restProps }: Props) => {
  return (
    <>
      <label className={styles.textfield}>
        <span className={styles.label}>{label}</span>
        <input
          className={styles.input}
          ref={ref}
          {...restProps}></input>
        {hint && <div className={styles.hint}>{hint}</div>}
      </label>
    </>
  )
}

export default TextField
