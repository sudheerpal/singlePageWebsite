import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { countries } from './countryData';



import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function EmailForm() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const form = useRef();
    const onSubmit = data => {

        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result);
                setError(false);
                setSuccess(true);
                reset()
            }, (error) => {
                setError(true);
                setSuccess(false)
                reset()
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
                <div className="position-absolute invisible">
                    <label htmlFor="domain" className="form-label">Domain*</label>
                    <input id="domain" className='form-control' value={'themarketstudy.com'} placeholder="Name (required)" {...register("domain", { required: true })} />
                    {errors.domain && <span className='text-danger ms-1 '>Please Enter Name</span>}
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
            {
                success && <div className="alert mt-3 alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you </strong> for singing up! You will receive your sample copy of the report as soon as possible.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            {
                error && <div className="alert mt-3 alert-danger alert-dismissible fade show" role="alert">
                    <strong>Sorry! </strong> something went wrong please try again latter.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <div className='mt-4'>
                By clicking Sign Up, you agree to our <Link to={'/terms-of-use'}>Terms of Use</Link> and that you have read and understand our <Link to="/privacy-policy">Privacy Policy</Link>.
            </div>
        </div>
    )
}
