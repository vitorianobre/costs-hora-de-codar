import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({type, msg}) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Se não existe mensagem
    if(!msg) {
      setVisible(false)
      return // Encerra a função
    }

    // Se existe a mensagem
    setVisible(true) // Exibe a mensagem
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000) // Contador de 3s

    return () => clearTimeout(timer) // Encerra a função parando o contador

  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message