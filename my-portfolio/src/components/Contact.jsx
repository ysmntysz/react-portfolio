import React from 'react'
import { useState } from 'react'

function Contact() {

    const [formData, setFormData] =useState({
        username:"",
        email:"",
        message:""
     
    });

    const handleChange=(e)=>{
        const {name , value} = e.target;
        setFormData((prevData) =>({...prevData, [name]:value}));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='text-center'>İLETİŞİM</h2>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                    <h3>Benimle iletişime geç!</h3>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <input placeholder='Username' type="text" name="username" value={formData.username} onChange={handleChange}/>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <input placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange}/>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12">
                                    <textarea placeholder='Mesaj' name="message" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
