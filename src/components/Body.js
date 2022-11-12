import React from 'react'
import EmailForm from './EmailForm'

export default function Body() {
    return (
        <section className='bg-app'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <img className='w-100 shadow border p-1' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

                        <div className="row mt-4">
                            <h3 className='ms-2'>Industries</h3>
                            <div className="col-6">

                                <ul>
                                    {
                                        ['Aerospace & Defense', 'Automotive & Transportation', 'Agriculture', 'Chemicals & Materials', 'Energy & Power', 'Food & Beverage'].map((item, index) => (
                                            <li className='p-1' key={index}> {item} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    {
                                        ['Packaging, Construction, Mining & Metals', 'Healthcare', 'Information & Communications Technology', 'Semiconductor & Electronics', 'Banking, Financial Services & Insurance', 'Retail and eCommerce'].map((item, index) => (
                                            <li className='p-1' key={index}> {item} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <EmailForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
