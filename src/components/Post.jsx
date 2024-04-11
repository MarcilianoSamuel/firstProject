import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return(
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar
            className={styles.profilePicture} 
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.profileInfos}>
            <strong>Samucão</strong>
            <p>Dev Front-end</p>
          </div>
        </div>
        <time 
          dateTime="03/02/2024 10:23:00" 
          title="03 de abril de 2024 ãs 10h23min"
        >
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Estou estudando dahora em casa! A maioria reclama, mas é hábito! Lancei um projetinho novo inclusive:</p>
        <p>👉<a href="#"> jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #rocketseat #pracima</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário" />

        <footer className={styles.footerForm}>
          <button type="submit">
            <strong>Publicar</strong>
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment /> 
        <Comment /> 
        <Comment /> 
      </div>
    </article>
  )
}