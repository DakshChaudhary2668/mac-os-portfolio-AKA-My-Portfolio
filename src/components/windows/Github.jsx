import React from 'react'
import githubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import "./Github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => (
    <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {data.tags.map((tag, index) => (
                <p className='tag' key={index}>{tag}</p>
            ))}
        </div>
        <div className="urls">
            {data.repoLink && (
              <a href={data.repoLink} target="_blank" rel="noreferrer">
                Repository
              </a>
            )}
            {data.demoLink && (
              <a href={data.demoLink} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
        </div>
    </div>
)


const Github = ({ onClose, onMinimize, isClosing, isMinimizing }) => {
  return (
    <MacWindow width="62vw" height="70vh" onClose={onClose} isClosing={isClosing} isMinimizing={isMinimizing} onMinimize={onMinimize}>
        <div className="cards">
            {githubData.map((project) => {
                return <GitCard key={project.id} data={project}/>
 
})}
        </div>
    </MacWindow>
  )
}

export default Github
