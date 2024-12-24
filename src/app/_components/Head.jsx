'use client'


import Image from 'next/image'


function Head() {

  return (
    <div className='select-none'>
       
       
        <header>
            
            
            <div className='3dSeven w-full flex justify-center mt-5'>
              <div className='px-5 py-2 flex justify-start items-center gap-4
                 bg-gradient-to-br  from-black from-10% via-[var(--lightGrayColor)] via-70% to-[var(--darkGrayColor)] to-90%
                 
                 rounded-[40px] '>
                
                <div className="circle bg-[var(--greenColor)] animate-sign-soon 
                 w-[10px] h-[10px]  backdrop-blur-10 rounded-xl sha "></div>
                <div className='text-white text-[1.2rem] font-inter  '>3D Sevenn</div>
              </div>
              
            </div>
        </header>

        <main className='relative z-30 w-full min-w-[80%] lg:my-5 flex flex-col justify-center items-center'>
        <div className='title w-full h-[500px] px-5 lg:px-20 font-impact uppercase text-[4rem] lg:text-[8vw] flex flex-col justify-center items-center 
          min-[440px]:text-[5rem] min-[600px]:text-[6rem]'>
          
          {/* Main Text Section */}
          <div className='relative flex flex-col xl:gap-[40px] min-[440px]:leading-[5rem] leading-[4rem] lg:leading-[6rem] xl:flex-row
            min-[600px]:leading-[6rem] min-[1120px]:leading-[8vw] min-[1440px]:leading-[9rem] text-center'>
            
            {/* The Welcome Text */}
            <div className='flex flex-col min-[1280px]:flex-row bg-gradient-to-r from-[#ffffff05] from-5% via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text gap-x-5'>
              Welcome <p> to the six</p>
            </div>

            {/* Absolute Free Banner */}
            <div className='absolute top-[30px] right-[-50px] min-[1280px]:top-[-80px] min-[1280px]:right-[-60px] 
              min-[600px]:text-[4rem] rotate-12 font-bold font-LiuJian lowercase text-[3.5rem] lg:text-[6rem] text-[var(--redColor)]'>
              <span className=''>free</span>
              <span className='absolute top-5 right-0 blur-[50px] mix-blend-color'>free</span>
              <span className='absolute top-6 right-0 blur-[40px] mix-blend-color'>free</span>
            </div>
          </div>

          {/* Weeks Masterclass Text */}
          <div className='w-full flex flex-col justify-center items-center min-[440px]:leading-[5rem] leading-[4rem]
            min-[600px]:leading-[6rem] lg:leading-[6rem] min-[1120px]:leading-[8vw] bg-gradient-to-r from-[#ffffff05] 
            from-5% via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text text-center'>
            weeks master <div>class</div> 
          </div>
        </div>
      </main>
        


        

    </div>
  )
}

export default Head

{/*
  <div className='title w-full h-[500px] px-5 lg:px-20 font-impact uppercase 
          text-[4rem] lg:text-[8vw] flex flex-col justify-center items-center 
            min-[440px]:text-[5rem]   min-[600px]:text-[6rem]
            '>
              <div className='relative flex flex-col xl:gap-[40px]  min-[440px]:leading-[5rem] leading-[4rem]  lg:leading-[6rem]  xl:flex-row 
                min-[600px]:leading-[6rem] min-[1120px]:leading-[7rem] min-[1440px]:leading-[9rem] 
                bg-gradient-to-r from-[#ffffff05] from-5%  via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text
                
              ' >
                Welcome <p>to the six</p>
                <div className='absolute top-[30px] right-[-50px] min-[1280px]:top-[-80px] min-[1280px]:right-[-60px] min-[600px]:text-[4rem] rotate-12 font-bold  font-LiuJian lowercase text-[3.5rem] lg:text-[6rem] text-[var(--redColor)]'>
                  <span className=' '>free</span>
                  <span className='absolute top-5 right-0  blur-[50px] mix-blend-color'>free</span>
                  <span className='absolute top-6 right-0  blur-[40px] mix-blend-color'>free</span>
                </div>
              </div>
              <div className='w-full flex  flex-col justify-center items-center min-[440px]:leading-[5rem] leading-[4rem]
                        min-[600px]:leading-[6rem]  lg:leading-[6rem] min-[1120px]:leading-[10vw] min-[1299px]:leading-[] min-[1440px]:leading-[11vw]
                    min-[1280px]:w min-[1440px]:flex-row min-[1440px]:
                    bg-gradient-to-r from-[#ffffff05] from-5%  via-[rgb(255,255,255)] via-50% to-[#ffffff02] text-transparent bg-clip-text
                    
              ' >
                weeks master <div>class</div> 
              </div>
          </div>
  
  */}