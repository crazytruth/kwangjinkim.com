import React from 'react'

const SKILLS_LIST = [
  {"name": "PYTHON", "percentage": 95},
  {"name": "RDBMS (MYSQL, POSTGRES, AURORA, ETC)", "percentage": 90},
  {"name": "REDIS", "percentage": 90},
  {"name": "AWS", "percentage": 86},
  {"name": "DOCKER", "percentage": 85},

]


const Skills = () => {
    return (
        <div id="skills" className="skills-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                    <h2>Here Are Some Overview Of My Skills Just Have A Look</h2>
                </div>

                {/*{*/}
                {/*    SKILLS_CATEGORIES.map((category, i) => (*/}
                {/*      <div className="skill-wrap">*/}
                {/*          <p>{category.type}</p>*/}
                {/*          {*/}
                {/*              category.skill.map((skill, index) => (*/}
                {/*                <div className="skill" key={index}>*/}
                {/*                    <h3>{skill.name}</h3>*/}
                {/*                    <div className="skill-bar wow fadeInLeftBig" style={{width: skill.percentage + '%'}}>*/}
                {/*                        <span className="skill-count1">{skill.percentage}%</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*              ))*/}
                {/*          }*/}
                {/*      </div>*/}
                {/*    ))*/}
                {/*}*/}

                <div className="skill-wrap">
                    {SKILLS_LIST.map((skill, index) => {
                        return (
                            <div className="skill" key={index}>
                                <h3>{skill.name}</h3>
                                <div className="skill-bar wow fadeInLeftBig" style={{width: skill.percentage + '%'}}>
                                    <span className="skill-count1">{skill.percentage}%</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p>And... just some other stuff I have experience with.</p>
                <ul>
                    <li>
                        <span>PROGRAMMING LANGUAGES</span>
                    </li>
                    <li>
                        <p>Python, PHP, Javascript, LUA</p>
                    </li>
                    <li>
                        <span>FRAMEWORKS</span>
                    </li>
                    <li><p>Django, Flask, Sanic, Celery, Parse, Selenium, aiohttp, asyncio, pytest, packaging, Sphinx, React, React Native</p></li>
                    <li><span>DATABASES</span></li>
                    <li><p>AWS RDS, MySQL, PostgreSQL, Redis, DynamoDB</p></li>
                    <li>
                        <span>CI/CD TOOLS</span>
                    </li>
                    <li>
                        <p>Teamcity, Jenkins, Github Actions, Hashicorp Terraform, AWS Cloudformation</p>
                    </li>

                    <li><span>INFRASTRUCTURE</span></li>
                    <li><p>Docker, Docker Swarm, Kong, Hashicorp Vault</p></li>
                    <li><p>EC2, Lambda, SES, SNS, SQS, ECS, ECR,  S3, VPC, Cloudfront, Route53, API Gateway, X-Ray, Cloudwatch, Elasticsearch Service, IAM, WAF & Shield</p></li>

                    <li><span>TOOLS</span></li>
                    <li><p>PyCharm, Vim, Jira, Trello, Notion, Slack</p></li>

                    <li><span>SPOKEN LANGUAGES</span></li>
                    <li><p>English(Almost Native), Korean(Kinda Native)</p></li>
                </ul>

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
