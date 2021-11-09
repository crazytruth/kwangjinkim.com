import React from 'react'
import { Link } from 'gatsby'

const EXPERIENCE_DESCRIPTION = [
    {
        "start": "01/2021",
        "end": "11/2021",
        "company": "Futurera",
        "position": [
            {
                "title": "CTO",
                "description": [
                    "Joined shortly after the company was established to oversee all technical aspects of the company and all project companies if required.",
                    "Conducted R&D and presented topics on the potentials of future technologies such as blockchain technology, NFT, cryptocurrency economies, and metaverse that could be integrated into the businesses of our projects.",
                    "Managed the schedule, gathered requirements, and developed a prototype for a e-commerce on Shopify.",
                    "Supported the MVP development for the e-commerce site by establishing a deploy protocol using Github Actions and AWS Elastic Beanstalk.",
                    "Integrated AWS services and payment gateways on a PHP application for the e-commerce site."
                ]
            }
        ]
    },
    {
        "start": "12/2013",
        "end": "06/2020",
        "company": "MyMusicTaste",
        "position": [
            {
                "title": "Division Head of Engineering",
                "description": [
                    'Lead 25+ engineers in 5, what we called, “squads”, comprised of Backend, Frontend, and DevOps Engineers, in maintaining and future feature development of the MyMusicTaste platform.',
                    'Acted as the Scrum Master in 5 different teams to ease the transition of all developers to Sprints. As the acting Scrum Master, I would lead Sprint Planning, Spring Reviews, Sprint Retrospectives, and Story Telling sessions to keep everyone on track.  Eventually, the role was deferred to other people in the squad, which then, I acted as the Nexus Scrum Master to guide the whole engineering division.',
                    'Supervised and oversaw the implementation of a fail safe payment infrastructure that would be able to tolerate burst traffic.  A key metric was to have at most 1 lost transaction per month.',
                    'Directed and guided a fault tolerant notification system to send emails, SMS, Slack Notifications, and the platform’s News items to millions of users.',
                    'Created a development culture of responsibility, teamwork, communication and passion.',
                    'Coordinated a monthly, division-wide Engineering Retrospective where everyone would give input on the goods, bads, improvements and appreciations for continual refinement of protocols and processes as well as conducting bi-monthly Engineering Days where engineers could share interests to foster an environment of learning.',
                    'Conducted quarterly performance assessments for each and every engineer and administered annual employee feedback evaluations.',
                    'Directed the whole platform to be more event based as that was the main behavior of the platform. This resulted in a 1000 fold decrease in error rates.'

                ]
            },
            {
                "title": "HEAD OF BACKEND, Project MSA",
                "description": [
                    'Performed R&D into the feasibility of migrating a monolithic application to a micro service architecture.  This required consideration of multiple aspects of the application including, the technology stack, database and data management, centralized logging, CI/CD Patterns, decomposition of application code, options for inter service communications, failure management, and operational transparency into the performance of the whole system.',
                    'Tasked as the Project Manager to migrate the monolithic Django application to a distributed micro service pattern in a 6 month time frame. Was responsible for managing and leading a team of 10 Engineers to spearhead the project into fruition.  Other responsibilities included creating conventions, clearing blockages, facilitate communications, customized development process for each phase and group of engineers.',
                    'Developed an in-house framework called Insanic, based on Sanic, an asynchronous Python 3.6+ framework, to facilitate rapid migration of critical application code to micro services by empowering the engineers to only concentrate on the business logic and not concern themselves with all the other necessary components of a working micro service application.  This was used as the backbone of all services in the initial migration.  The features of the framework included, effortless service discovery, normalized error messages, centralized logging integration, route registration, authentication and authorization, and circuit breaking for fast failures.',
                    'Developed additional Insanic plugins that facilitate various patterns including, Infuse, an asynchronous circuit breaker for Insanic’s inter service requests, Incendiary, a tracing implementation that integrates AWS X-Ray to enable tracing within the micro service architecture, Iniesta, a plugin that expedites the integration of an event driven pattern with AWS SNS and AWS SQS, Interstellar, a plugin that allows engineers to use GRPC for their inter service communications.'
                ]
            },
            {
                "title": "BACKEND ENGINEER, MYMUSICTASTE V2",
                "description": [
                    'Collaborated with Frontend, UI/UX Designers to develop the next iteration of the MyMusicTaste Platform.',
                    'Contributed to more than 80% of the initial rollout of the whole backend application developed in Python 2.7 and Django 1.6.',
                    'Utilized MySQL, Redis, and Elasticsearch for data storage, caching, and search applications.',
                    'Introduced CI with JetBrains Teamcity to run tests and build docker images for deploy to AWS ECS.',
                    'Developed an autoscaling script to scale in/out EC2 and ECS services for reactive traffic handling.',
                    'Instated a protocol for frontend, backend deployment and database migrations.',
                    'Created Cloudformation definitions to instantaneously replicate the production environment. Later this was manipulated to clone the environment before each additional feature development to isolate dependencies during development.',
                ]
            },
            {
                "title": "FULLSTACK ENGINEER, MYMUSICTASTE V1",
                "description": [
                    'Developed RESTful APIs for the MyMusicTaste web and mobile applications using Python 2.7 and Django.',
                    'Performed R&D into asynchronous server side push events to utilize in new use cases for the application. Considerations into long polling, asynchronous requests and websockets were made.',
                    'Implemented and integrated websockets with Python, uwsgi gateway, and Redis, acting as the pubsub message queue for instantaneous information delivery and proactive user experience.',
                    'Reduced slow SQL queries and transactions involving millions of artist, album, and song data for quick and improved search application.',
                    'Examined and integrated Real User Monitoring to reduce load times and conducted concentrated analysis for clients experiencing high latency, which resulted in an approximate 10% decrease in user bounce rate.'
                ]
            },
            {
                "title": "BACKEND ENGINEER, Project B1",
                "description": [
                    'Performed R&D for auto syncing between mobile applications and server side databases.',
                    'Developed the backend using Parse for automated data syncing and simple asynchronous requests to scrape various data nuggets from numerous sources.'
                ]
            }
        ]
    },
    {
        "company": "LOADCOMPLETE",
        "start": "04/2011",
        "end": "08/2013",
        "position": [
            {
                "title": "Server and Database Programmer",
                "description": [
                    'Developed RESTful APIs using PHP and CodeIgniter for backend of a social mobile game, Bumping Bears.',
                    'Conceived a SOAP-like “Action Interface” to replace the RESTful APIs, in order to reduce development time. This reduced the development time for additional features to less than an hour. This was designed from recognizing and realizing all common behaviors and centralizing them in to a single interface.  It provided not only reduced development time, but reduced bugs, and allowed the game balancers to effortlessly tweak values that would be propagated throughout the game.',
                    'Optimized MySQL, Couchbase, and MongoDB databases to enhance end user experience.',
                    'Participated in Agile methodologies such as Scrum and Scrumban, combined with tools such as PivotalTracker, Jira, Trello, and a physical board for different stages of development.',
                    'Setup and administered Continuous Delivery of applications for live services in the U.S., Korea, and China.',
                    'Centralized the company’s distributed GM tools, CMS and DLC Upload Tools using PHP.',
                    'Collaborated with global companies such as Tencent China, Daum Mobage, and Naver to roll out services in their respective countries.'
                ]
            }
        ]
    },

]


const JobDescription = (props) => {

    return (
      <div className="experience-inner">
            <ul className="align-items-center">
              <li><span>{props.company}</span></li>
              <li><span>{props.start} {props.end.length ? "-" : ""} {props.end}</span></li>
              {
                  props.position.map((pos, i) =>
                       (
                         <ul className="experience-description" key={i}>
                        <li><p>{pos.title}</p></li>
                        {
                            pos.description.map((desc, i) => {
                                return <li key={i}>{desc}</li>
                            })
                        }
                         </ul>

                      )
                  )
              }
            </ul>
      </div>
    )

}

const Experience = () => {
    return (
        <div id="experience" className="experience-area three border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PROFESSIONAL EXPERIENCE</span>
                    <h2>I Have 10+ Years Of Experience</h2>
                    <p>I have experiences ranging from developing web applications, architecting systems,
                    implementing CI/CD, to managing teams.
                    </p>
                </div>

                <div className="experience-content">
                    {
                        EXPERIENCE_DESCRIPTION.map((jd, i) => {
                            return <JobDescription
                              start={jd.start}
                              end={jd.end}
                              position={jd.position}
                              company={jd.company}
                              key={i}
                            />
                        })
                    }
                    <div className="text-center">
                        <Link to="/portfolio" className="common-btn three">
                            See My Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
