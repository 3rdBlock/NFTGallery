import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ConnectWallet from './ConnectWallet';

const Navbar = () => {




        return (
        <div className="max-w-7xl mx-auto items-center">
            <div className='items-center flex-col sm:flex-row flex '>
                <div className='block sm:hidden lg:block'>
                </div>
                <div className="group inline-block relative z-50">
                    <Link href='/' >
                        <button
                            className=" my-2 text-white font-semibold py-2 px-4 mx-1 rounded inline-flex items-center "
                        >
                            <span className="mr-1">Home </span>

                        </button>
                    </Link>
                </div>


                <div className="group inline-block relative z-50 ml-auto">

                </div>
                    <div className="m-4"><ConnectWallet /></div>
                


               
            </div>
        </div>
        );
};



export default Navbar;
