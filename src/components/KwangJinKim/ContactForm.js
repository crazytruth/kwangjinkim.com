import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Thank You!',
        text: 'Your message was successfully sent and I will get back to you shortly!',
        icon: 'success',
        // timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const onSubmit = async (data, e)  => {
        console.log(data, e);
        e.preventDefault();
        try {
            await emailjs.sendForm(process.env.EMAILJS_SERVICE_ID,
              process.env.EMAILJS_TEMPLATE_ID,
              e.target, process.env.EMAILJS_USER_ID
            ).then(
              result => {

                setContact(INITIAL_STATE);
                alertContent();
              },
              error => {
                console.log( 'An error occured, Pleese try again',error.text)
              }
            )

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
            <div className="container">
                <div className="section-title three mobile-only tablet-only">
                    <span className="sub-title">CONTACT</span>
                    <h2>Yes! You Are Here! Drop A Line Here! I would like to connect!</h2>
                    <p>If you are potentially interested in hiring me for your next project, or would just like to
                    chat, please feel free to contact me!
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={contact.name}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.name && 'Name is required.'}
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.email && 'Email is required.'}
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={contact.subject}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.subject && 'Subject is required.'}
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="number"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={contact.number}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.number && 'Number is required.'}
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="text"
                                    className="form-control"
                                    cols="30"
                                    rows="6"
                                    placeholder="Write message"
                                    value={contact.text}
                                    onChange={handleChange}
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.text && 'Text body is required.'}
                                </div>
                            </div>

                            <button type="submit" className="btn common-btn three">Send Message <span></span></button>
                        </form>
                    </div>

                    <div className="col-lg-6">

                        <div className="contact-content">
                            <div className="section-title three pc-only">
                                <span className="sub-title">CONTACT</span>
                                <h2>Yes! You Are Here! Drop A Line Here! I would like to connect!</h2>
                                <p>If you would like interested in potentially hiring me for your next project, or would just like to
                                chat, feel free to contact me!
                                </p>
                            </div>
                            <div className="top">
                                <ul>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:hello@kwangjinkim.com">hello@kwangjinkim.com</a>
                                    </li>
                                    <li>
                                        <span>Website:</span>
                                        <a href="https://www.kwangjinkim.com/" rel="noreferrer" target="_blank">www.kwangjinkim.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <ul>
                                    {/*<li>*/}
                                    {/*    <a href="#" target="_blank">*/}
                                    {/*        <i className='bx bxl-facebook'></i>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href="#" target="_blank">*/}
                                    {/*        <i className='bx bxl-twitter'></i>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li>
                                        <a href="https://www.linkedin.com/in/kwangjinkim/" rel="noreferrer" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/crazytruth" rel="noreferrer" target="_blank">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a href="#" target="_blank">*/}
                                    {/*        <i className='bx bxl-dribbble'></i>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
