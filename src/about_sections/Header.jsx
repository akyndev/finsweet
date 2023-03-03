import React from 'react'
import { Button, WhiteButton } from '../components/Button'

const Header = () => {
  return (
    <section className='mb-10'>
        <div className="container mx-auto">
            <div className='flex justify-between lg:flex-row space-y-10 lg:space-y-0 flex-col'>
                <div className='space-y-6 p-4 lg:w-6/12 lg:p-0'>
                    <div>
                        <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold lg:text-left text-center'>Grow your Sales and Services</h1>
                    </div>
                    <div>
                        <p className='md:text-xl text-md text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='flex w-72 mx-auto lg:mx-0 space-x-4'>
                        <Button>get started</Button>
                        <WhiteButton>contact us</WhiteButton>
                    </div>
                </div>
                <div className='lg:w-5/12 p-4 lg:p-0'>
                    <img src="/images/header_dashboard.png" alt="" className='shadow-lg' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header