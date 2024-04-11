import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        className={styles.avatarComment} 
        src="https://images.unsplash.com/photo-1592245757977-af178e5af7f1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.headerComment}>
            <div className={styles.authorInfos}>
              <span>
                <strong>Diego Fernandes <p>{' (você)'}</p></strong>
              </span>
              <p>Cerca de 2h</p>
            </div>

            <button title='Deletar comentário'>
              <Trash size={21} />
            </button>
          </header>

          <p>
            Aí sim mano! Bora pra cima
          </p>
        </div>
        
        <footer>
          <button title="Aplaudir" className={styles.likeButton}>
            <ThumbsUp />
            
            Aplaudir
        
            <span>27</span>
          </button>
        </footer>
      </div>
    </div>
  )
}