import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-dark text-white py-4'>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div>2022 © All Rights Reserved</div>
                    <div className='d-flex'>
                        <a className='text-white me-4 nav-link' rel="noreferrer" href="https://www.advancemarketanalytics.com/privacy-policy" target={'_blank'}>Privacy Policy</a>
                        <a className='text-white me-4 nav-link' rel="noreferrer" href="https://www.advancemarketanalytics.com/terms-and-conditions" target={'_blank'}>Terms & Conditions</a>
                        <a className='text-white nav-link' rel="noreferrer" href="https://www.advancemarketanalytics.com/faqs" target={'_blank'}>FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
