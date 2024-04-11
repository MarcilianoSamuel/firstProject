import { Avatar } from './Avatar'
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
return(
      <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
          src='https://images.unsplash.com/photo-1609155627149-8c6b32d4e222?q=40&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        
        <div className={styles.profile}>
          <Avatar src='http://github.com/diego3g.png' />
          <strong>Samuel Marciliano</strong>
          <span>React Student</span> 
        </div>

        <footer>
          <a href='#'>
            <PencilLine />
            Editar seu perfil
          </a>
        </footer>
      </aside>
  )
}