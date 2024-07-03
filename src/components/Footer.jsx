import React from 'react';
import {BsGoogle,BsFacebook,BsTwitterX,BsInstagram,BsYoutube} from 'react-icons/bs';

function Footer() {
    return (
        <div className='w-screen'>
            <footer className="lg:flex w-screen  bg-[#eaf9ff]">

                <div className="lg:w-2/5 p-4 m-auto ">
                    <h1 className="text-2xl font-bold text-[#007676] ml-4 mb-4">Strong Developer {`</>`} </h1><hr className='border-[#007676]' /> 
                    <span className="flex gap-8 text-2xl m-4 text-gray-800">
                        <i><BsGoogle className='text-black'/></i>
                        <i><BsInstagram className='text-black'/></i>
                        <i><BsFacebook className='text-black'/></i>
                        <i><BsYoutube className='text-black'/></i>
                        <i><BsTwitterX className='text-black'/></i>
                    </span>

                </div>


                <div className="lg:w-3/5 w-full p-2 lg:flex gap-4 list-none ">
                    <div className="m-2 flex flex-col gap-4">
                        <li className="font-medium text-[#007676] ">Useful Links</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium text-[#007676]">Information</li>
                        <li className='text-gray-800'>About Us</li>
                        <li className='text-gray-800'>Privacy Policy</li>
                        <li className='text-gray-800'>Terms & Conditions</li>
                        <li className='text-gray-800'>What info we collect ?</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium text-[#007676]">Contact Us</li>
                        <li className='text-gray-800'>Mangaon, Raigad</li>
                        <li className='text-gray-800'>Phone - +00 7768882495</li>
                        <li className='text-gray-800'>Email - <a href='mailto:dalvishrikant1201@gmail.com'>dalvishrikant1201@gmail.com</a></li>
                        <li className='text-gray-800'>FAQ</li>
                    </div>
                    <hr />
                </div>
            </footer>
            <div className="bg-[#007676] p-2 text-center font-semibold text-white">
                Designed & 👩🏻‍💻 by Strong Developer
                <p className='text-sm my-4 text-gray-200'>© All Rights Reserved {new Date().getFullYear()} </p>
            </div>
        </div>
    )
}

export default Footer
