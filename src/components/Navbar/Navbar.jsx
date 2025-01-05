'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { links } from './data'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'

import { useRouter } from 'next/navigation'




function Navbar() {

    const [isOpen, setIsOpen] = useState(false); 
    const menuRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true) // Track navbar visibility
    const [lastScrollPos, setLastScrollPos] = useState(0) // Track last scroll position

    const { user, isLoaded } = useUser();
    const router = useRouter();

    const rotateProp = `before:rotate-[-45deg] after:rotate-[45deg] 
                        after:top-[60%]
                        `;
    const hoverProp = ` after:top-[35%]
                        group-hover:after:transition-all 
                        group-hover:after:ease-out 
                        group-hover:after:duration-300 `;


    const box_shadow = {
        boxShadow : ` 
            12px 12px 20px 50px rgba(0,0,0,.8), 
            0px 8px 30px white
        `
    }

    const menu = {
        transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)'
      }

    
      // Scroll-based visibility logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setIsVisible(currentScrollPos < lastScrollPos || currentScrollPos < 10) // Show navbar when scrolling up or near top
            setLastScrollPos(currentScrollPos)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollPos])
/*
    useEffect(() => {
        //console.log(isOpen)

        
        

        const handleClickOutside = (e) => {
            if( isOpen && menuRef.current && !menuRef.current.contains(e.target)){
                console.log(e.width)
                setIsOpen(false)
            }
        }

        // Add scroll event listener when the component mounts
        //document.addEventListener('scroll',handleScroll)
        // Add mousedown event listener when the component mounts
        document.addEventListener('mousedown',handleClickOutside)

        return () => {

            document.removeEventListener('mousedown', handleClickOutside)
        }

    },[menuRef,isOpen])

    const handleClick = () => {
        setIsOpen(i => (i === true) ? false : true );
    }
*/
    const setList = (links) => {
        
        return links.map(link => (
            <div  key={link.id} className={ `cursor-pointer ${link.style} `}
                onClick={() => {
                  
                    setIsOpen(false);
                    router.push(link.path)
                    //setTimeout(() => router.push(link.path), 300)// Delays navigation
                    console.log('it"s work')
                    
                }}
            >
            <div  className=' py-1 px-2 '>
            {link.title}
            </div>
            </div>
        ))
    }



    
    




    return (
        <div className={`full-navbar fixed w-full top-0 z-[999] 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            transition-transform duration-300
        `}>

           

            <div className='navbar relative z-[80] w-full px-10 py-8 flex justify-between  items-center gap-2
            bg-gradient-to-b from-black to-#ffffff/20 backdrop-blur-sm
            '>
                <Link className='relative'
                    href = "/"
                    style={{ cursor: 'pointer' }}
                >
                    
                        <Image
                            className=''
                            src={'./seven-logo.svg'}
                            alt='sevenn-logo'
                            width={40}
                            height={30}
                        />
                    
                    {/*
                        isLoaded&&user ? 
                        ( 
                            <div className='absolute top-0 w-[100px] h-[100px] '>
                                <UserButton
                                    afterSignOutUrl="/sign-in"
                                />
                            </div>
                        ): null
                    */}
                    <div>

                    </div>
                </Link>
                

                <div className='flex gap-2 justify-center items-center'>
                    <div className="signButton    border-2rounded-[50%] flex justify-center items-center font-bold ">
                        {
                            isLoaded&&user 
                            ?
                            ( <UserButton/>)
                            :
                            (
                                <Link 
                                    href={'/sign-in'}
                                    className='bg-white text-black px-5 py-1 rounded-sm'
                                    
                                >
                                    <button>Sign In</button>
                                </Link>
                            )
                        }

                    </div> 
                    {/*
                    <div ref={menuRef} onClick={handleClick} className="responseNav group relative z-10 flex md:hidden cursor-pointer">
                        <div className={`open w-[50px] h-[50px] ${isOpen ? rotateProp : hoverProp}  
                            
                            after:transition-all after:ease-out after:duration-300   before:transition-all before:ease-out
                            before:absolute before:top-[60%] before:left-[50%] before:translate-x-[-50%]  before:w-[40px] before:h-[5px] before:bg-white before:rounded-[20px]
                            after:absolute  after:left-[50%] after:translate-x-[-50%]  after:w-[40px] after:h-[5px] after:bg-white  after:rounded-[20px]
                        `} >
                        </div>
                        
                    </div>*/}
                </div>

                

            </div>
          
            <div  
                className=' w-[100%] h-[800px] pt-[500px] pb-[500px] absolute  right-0 left-0 z-[50] flex flex-col justify-center items-center md:hidden 
                    bg-gradient-to-tr from-[#000] from-50% to-[#ffffff00]
                    backdrop-blur-sm

                '
                style={{...menu,top: isOpen ? '80px' : '-1800px'}}
                
            >
                
                <div className="links text-[3rem] my-20 flex flex-col-reverse gap-10 justify-center items-start 
                    min-[616px]:flex-row
                ">
                    
                    <div className='flex flex-col gap-3'>
                        <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#000] from-50% to-[#fff]'
                            style={box_shadow}
                        >
                        </div> 
                        <Link href={links[0].path} className=' cursor-pointer'
                            onClick={() => {
                                setIsOpen(false);
                                //router.push(links[2].path)
                            }}
                            > Courses </Link>
                    </div>
                    

                </div>
            </div> 


            
            
        </div>
        
    )
}

export default Navbar

{/* 1425 */}