import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"

import styles from './App.module.css'
import "./global.css"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
       <main>
       </main>
      </div>
    </>
  )
}

export default App