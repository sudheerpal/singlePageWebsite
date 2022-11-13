import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Header() {
    return (
        <div className='bg-light'>
            <div className="container py-5">
                <Link className='nav-link' to={'/'}>
                    <h4 className='text-uppercase'>  <span className='bg-danger px-1 text-white '>longtail</span><span className='bg-dark px-1 text-danger'>MARKETS</span><span className='text-muted'></span> </h4>
                </Link>
                <div className='col-md-10 col-lg-8 mt-3 col-12'>Long Tail Markets accumulate and examine raw data across 12 major B2B verticals to provide market insight that enables companies to get competitive edge and detect market disruptions early.
                </div>
            </div>
        </div>
    )
}
