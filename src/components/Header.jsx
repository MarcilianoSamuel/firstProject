import  LogoIgnite  from '../assets/Ignite simbol.svg'
import styles from './Header.module.css'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={LogoIgnite} alt='Logo do Ignite'/>
    </header>
  )
}