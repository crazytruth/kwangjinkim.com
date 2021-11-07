import React from 'react'

const SKILLS_LIST = [
    {
        "type": "Languages",
        "skill": [
            {"name": "PYTHON", "percentage": 95},
            {"name": "PHP", "percentage": 60},
            {"name": "JAVASCRIPT", "percentage": 50},
        ]
    },
    {
        "type": "Frameworks",
        "skill": [
            {"name": "DJANGO", "percentage": 90},
            {"name": "SANIC", "percentage": 80},
            {"name": "ASYNCIO", "percentage": 80},
            {"name": "REACT JS", "percentage": 50},
        ]
    },
    {
        "type": "Databases",
        "skill": [
            {"name": "RDBMS", "percentage": 90},
            {"name": "REDIS", "percentage": 80},
            {"name": "DYNAMODB", "percentage": 70},
            {"name": "MONGO DB", "percentage": 60},
        ]
    },

]


const Skills = () => {
    return (
        <div className="skills-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                    <h2>Here Are Some Overview Of My Skills Just Have A Look</h2>
                </div>

                {
                    SKILLS_LIST.map((category, i) => (
                      <div className="skill-wrap">
                          <p>{category.type}</p>
                          {
                              category.skill.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <h3>{skill.name}</h3>
                                    <div className="skill-bar wow fadeInLeftBig" style={{width: skill.percentage + '%'}}>
                                        <span className="skill-count1">{skill.percentage}%</span>
                                    </div>
                                </div>
                              ))
                          }
                      </div>
                    ))
                }

                {/*<div className="skill-wrap">*/}
                {/*    <p>Languages</p>*/}
                {/*    {SKILLS_LIST.map((skill, index) => {*/}
                {/*        return (*/}
                {/*            <div className="skill" key={index}>*/}
                {/*                <h3>{skill.name}</h3>*/}
                {/*                <div className="skill-bar wow fadeInLeftBig" style={{width: skill.percentage + '%'}}>*/}
                {/*                    <span className="skill-count1">{skill.percentage}%</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}
                {/*<div className="skill-wrap">*/}
                {/*    <p>Sother</p>*/}
                {/*    <div className="skill">*/}
                {/*        <h3>REACT JS</h3>*/}
                {/*        <div className="skill-bar skill2 wow fadeInLeftBig">*/}
                {/*            <span className="skill-count2">70%</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="skill">*/}
                {/*        <h3>ANGULAR JS</h3>*/}
                {/*        <div className="skill-bar skill3 wow fadeInLeftBig">*/}
                {/*            <span className="skill-count3">80%</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="skill">*/}
                {/*        <h3>PYTHON</h3>*/}
                {/*        <div className="skill-bar skill4 wow fadeInLeftBig">*/}
                {/*            <span className="skill-count4">8%</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="skill">*/}
                {/*        <h3>PHP</h3>*/}
                {/*        <div className="skill-bar skill5 wow fadeInLeftBig">*/}
                {/*            <span className="skill-count5">78%</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Skills
