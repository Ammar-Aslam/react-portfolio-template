import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" style={{height: '80px' ,margin: '10px 0px 10px 0px '}} key={skill.id}>
                <img style={{height: '100%'}} src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills
