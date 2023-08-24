import React from 'react'
import * as constConfig from '../../config/config'
import emailjs from 'emailjs-com';
import { useState } from 'react';

const EmailJs = () => {

    const publicKey = "bEDFI8wuCUT26MHlq"

    // const [name, setName]=useState('')
    // const [email, setEmail]= useState('')
    // const [subject,setSubject]=useState('')
    // const [message,setMessage]=useState('')

    // const params={
    //     from_name:name,
    //     from_email:email,
    //     subject:subject,
    //     html_message:message
    // }

    function handleSendEmail(e) {
        e.preventDefault();
        console.log("details", e.target)
        emailjs.sendForm(constConfig.SERVICE_ID, constConfig.TEMPLATE_ID, e.target, publicKey)
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <>
            <h1>EmailJS</h1>
            <div className='container'>
                <form className='row' onSubmit={handleSendEmail}>
                    <div className='col-4 bg-info'>
                        <div>
                            <label>Name - </label>
                            <input type="text" className='form-control' name="from_name" placeholder="Enter here" />
                        </div>
                        <div>
                            <label>Email - </label>
                            <input type="email" className='form-control' name="from_email" placeholder="Enter here" />
                        </div>
                        <div>
                            <label>Subject - </label>
                            <input type="text" name="subject" className='form-control' placeholder="Enter here" />
                        </div>
                        <div>
                            <label>Message - </label>
                            <textarea name="html_message" className='form-control' placeholder="Enter here" />
                        </div>
                        <button className="btn btn-primary btn-sm" type="submit" >Send</button>
                    </div>
                    <div className='col-8'></div>

                </form>
            </div>

        </>

    )
}

export default EmailJs