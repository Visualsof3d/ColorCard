'use client';
import { gsap } from 'gsap'
import styles from './page.module.css'


const projects = [
  {
    title: "New York",
    color: "#F06318"
  },
  {
    title: "San Francisco",
    color: "#DCF018"
  },
  {
    title: "San Antonio",
    color: "#18F0E8"
  },
  {
    title: "Nashville",
    color: "#8C0CF0"
  },
  {
    title: "Houston",
    color: "#F0183C"
  },
  {
    title: "New Orleans",
    color: "#F0BA18"
  },
  {
    title: "Oklahoma City",
    color: "#0C34F0"
  },
  {
    title: "Detroit",
    color: "#0CBCF0"
  },
  {
    title: "Indianapolis",
    color: "#91F018"
  }
]


export default function Home() {
  
  const manageMouseEnter = (expand, color) => {
    gsap.to(expand.target, {top: "-2vw", backgroundColor: color, duration: 0.3})
  }
  const manageMouseLeave = (expand, color) => {
    gsap.to(expand.target, {top: "0vw", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }
  
  
  return (
    <main className={styles.main}>
      {
        projects.map((project, index) => {
          return <div onMouseEnter={(expand) => {manageMouseEnter(expand, project.color)}} onMouseLeave={(expand) => {manageMouseLeave(expand, project.color)}} key={index}>
            <p>
              {project.title}
            </p>
          </div>
        })
      }
    </main>
  )
}
