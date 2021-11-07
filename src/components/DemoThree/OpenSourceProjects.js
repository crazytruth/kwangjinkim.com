import React from 'react'
import {Link} from 'gatsby'
import axios from "axios"

const OSSList = [
    {
        "icon": "flaticon-global",
        "name": "Insanic",
        "description": "An in-house framework I developed while employed at MyMusicTaste. The purpose of this framework was to assist the migration from a monolithic application to a micro service architecture. Based on Sanic, an asynchronous Python 3.6+ framework, Insanic adds additional functionality specifically for use in a distributed micro service system.",
        "meta": {
            "Contribution": "99%",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/insanic"},
            {"title": "Documentation", "link": "https://insanic.readthedocs.io/en/latest/"},
            {"title": "PyPI", "link": "https://pypi.org/project/insanic-framework/"}
        ]
    },
    {
        "icon": "flaticon-global",
        "name": "Iniesta",
        "description": "Iniesta is a plugin for Insanic that facilitates the integration of the event driven pattern using AWS SNS and AWS SQS. Main functionality includes consuming and publishing of messages.",
        "meta": {
            "Contribution": "99%",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/iniesta"},
            {"title": "Documentation", "link": "https://iniesta.readthedocs.io/en/latest/"},
            {"title": "PyPI", "link": "https://pypi.org/project/insanic-iniesta/"}
        ]
    },
    {
        "icon": "flaticon-global",
        "name": "Infuse",
        "description": "Infuse implements the circuit breaker pattern for use with Insanic. This is differentiated from other implementations because of the asynchronous implementation of Insanic.",
        "meta": {
            "Contribution": "99%",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/infuse"},
            {"title": "Documentation", "link": "https://infuse.readthedocs.io/en/latest/"},
            {"title": "PyPI", "link": "https://pypi.org/project/insanic-infuse/"}
        ]
    },
    {
        "icon": "flaticon-global",
        "name": "Incendiary",
        "description": "This is a Insanic plugin that allows tracing of inter service requests while using Insanic. This wraps Insanic’s service object and the collected data is sent to AWS X-Ray for visualization.",
        "meta": {
            "Contribution": "99%",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/incendiary"},
            {"title": "Documentation", "link": "https://incendiary.readthedocs.io/en/latest/"},
            {"title": "PyPI", "link": "https://pypi.org/project/insanic-incendiary/"}
        ]
    },
    {
        "icon": "flaticon-global",
        "name": "Interstellar",
        "description": "Interstellar is a plugin that hooks into Insanic’s service object to provide GRPC functionality. This provides scaffolding for developers to serve their generated proto services and use stubs to call requests. ",
        "meta": {
            "Status": "WIP",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/interstellar"},
        ]
    },
    {
        "icon": "flaticon-global",
        "name": "Ingot",
        "description": "Ingot is a plugin that replaces Insanic’s default configuration object to allow settings to be loaded from Hashicorp’s Vault.",
        "meta": {
            "Status": "WIP",
        },
        "links": [
            {"title": "Github", "link": "https://github.com/crazytruth/Ingot"},
        ]
    },
]

const getGithubShields = async (url) => {
    const response = await axios.get(url);

}


class OSSProject extends React.Component {
    componentDidMount() {

    }


    render() {
        return (
          <div className="col-sm-6 col-lg-6">
              <div className="what-item">
                  <i className={this.props.oss.icon + " icon"}></i>
                  <h3>
                      <Link to="/service-details">
                          {this.props.oss.name}
                      </Link>
                  </h3>

                  <p>{this.props.oss.description}</p>

                  <ul>
                      {
                          Object.keys(this.props.oss.meta).map((key) => (
                            <li key={key}>
                                <span>{key}: </span> {this.props.oss.meta[key]}
                            </li>
                          ))
                      }
                  </ul>
                  {
                      this.props.oss.links.map((linkObj, i) => (
                        <p key={i}>
                            <a href={linkObj.link} className="what-btn">
                                {linkObj.title} <i className="flaticon-right-arrow"></i>
                            </a>
                        </p>
                      ))
                  }
              </div>
          </div>
        )
    }
}



const OpenSourceProjects = () => {
    return (
        <div className="what-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">OPEN SOURCE SOFTWARE PROJECTS</span>
                    <h2>I Have Also Worked On Open Source Software.</h2>
                    <p>I had developed and released these python project while working at MyMusicTaste for
                    running the micro-service system.
                    </p>
                </div>

                <div className="row">
                    {
                        OSSList.map((oss, i) => (
                          <OSSProject oss={oss} key={i} />
                        ))
                    }

                    {/*<div className="col-sm-6 col-lg-6">*/}
                    {/*    <div className="what-item">*/}
                    {/*        <i className="flaticon-smartphone icon"></i>*/}
                    {/*        <h3>*/}
                    {/*            <Link to="/service-details">*/}
                    {/*                App Design*/}
                    {/*            </Link>*/}
                    {/*        </h3>*/}
                    {/*        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>*/}

                    {/*        <Link to="/service-details"className="what-btn">*/}
                    {/*            Explore More <i className="flaticon-right-arrow"></i>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-6 col-lg-6">*/}
                    {/*    <div className="what-item">*/}
                    {/*        <i className="flaticon-paintbrush icon"></i>*/}
                    {/*        <h3>*/}
                    {/*            <Link to="/service-details">*/}
                    {/*                Illustration*/}
                    {/*            </Link>*/}
                    {/*        </h3>*/}
                    {/*        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>*/}

                    {/*        <Link to="/service-details" className="what-btn">*/}
                    {/*            Explore More <i className="flaticon-right-arrow"></i>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-6 col-lg-6">*/}
                    {/*    <div className="what-item">*/}
                    {/*        <i className="flaticon-branding icon"></i>*/}
                    {/*        <h3>*/}
                    {/*            <Link to="/service-details">*/}
                    {/*                Branding*/}
                    {/*            </Link>*/}
                    {/*        </h3>*/}
                    {/*        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda at doloribus dolore quae quibusdam</p>*/}

                    {/*        <Link href="/service-details" className="what-btn">*/}
                    {/*            Explore More <i className="flaticon-right-arrow"></i>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default OpenSourceProjects
