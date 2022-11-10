import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { countries } from './countryData';



import emailjs from '@emailjs/browser';

export default function EmailForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const form = useRef();
    const onSubmit = data => {
        console.log(data);
        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });

    };


    return (
        <div>
            <h5>New user: Sign up for free!</h5>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}

                <div className="mb-3">
                    <label for="fullName" className="form-label">Full Name*</label>
                    <input id="fullName" className='form-control' placeholder="Name (required)" {...register("fullName", { required: true })} />
                    {errors.fullName && <span className='text-danger ms-1 '>Please Enter Name</span>}
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email*</label>
                    <input id="email" className='form-control' placeholder="Email (required)" {...register("email", { required: true })} />
                    {errors.email && <span className='text-danger ms-1 '>Please Enter Email Id</span>}
                </div>
                <div className="mb-3">
                    <label for="contactNo" className="form-label">Contact No*</label>
                    <input id="contactNo" className='form-control' placeholder="Contact No (required)" {...register("contactNo", { required: true })} />
                    {errors.contactNo && <span className='text-danger ms-1 '>Please Enter Contact Number</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="func" className="form_label">
                        Country*
                    </label>
                    <select className='form-control' {...register("country", { required: true })}>
                        <option value="">Select Country</option>
                        {
                            countries.map((item, index) => <option key={index} value={item.country}> {item.country} </option>)
                        }
                    </select>
                    {errors.country && <span className='text-danger ms-1 '>Please Select country</span>}
                </div>
                <div className="mb-3">
                    <label for="CompanyName" className="form-label">Company Name*</label>
                    <input id="CompanyName" className='form-control' placeholder="Company Name (required)" {...register("CompanyName", { required: true })} />
                    {errors.CompanyName && <span className='text-danger ms-1 '>Please Enter Company name</span>}
                </div>
                <div className="mb-3">
                    <label for="jobTitle" className="form-label">Job Title*</label>
                    <input id="jobTitle" className='form-control' placeholder="Job Title (required)" {...register("jobTitle", { required: true })} />
                    {errors.jobTitle && <span className='text-danger ms-1 '>Please Enter Job Title</span>}
                </div>
                <div className="mb-3">
                    <label for="comment" className="form-label">Comment</label>
                    <input id="comment" className='form-control' placeholder="comment" {...register("comment")} />
                </div>
                <input className='btn btn-info' type="submit" value={'Send Request'} />
            </form>
        </div>
    )
}
