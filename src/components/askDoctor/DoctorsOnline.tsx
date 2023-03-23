import React, { ReactComponentElement } from 'react'
import { Card,  Carousel,  Avatar, Rating} from 'flowbite-react'
import * as CONSTANTS from '../../constants';


type resultProps = {
  drName: string;
  img: string;
  rating: number;
  expertIn: string;
};

type DoctorDetails = {
    doctorsDetails? : string []
}

function DoctorCarousel(
  // carouselProp
  ) {


  return(
      <div className="h-32 ">
        {}
          <Carousel
              leftControl={<i aria-hidden className="fa fa-arrow-left"></i>}
              rightControl={<i aria-hidden className="fa fa-arrow-right"></i>}
              indicators={false} >
                  {
                      CONSTANTS.ONLINE_DOCTORS[Object.keys(CONSTANTS.ONLINE_DOCTORS)].map((res: resultProps) => {
                          return (
                              <Card className='px-10 '>
                              <div className='flex items-center'>
                                  <div className='flex items-center justify-center flex-col'>
                                  <div className="flex flex-wrap gap-2">
                                          <Avatar
                                              img={res.img}
                                              rounded={true}
                                          />
                                      </div>
                                      <Rating className='mt-2'>
                                      {(() => {
                                          const arr: React.ReactElement[] = [];
                                          for (let i:number = 1; i <= 5; i++) {
                                              if(i <= res.rating){
                                                  arr.push(<Rating.Star />)
                                              }
                                              else {
                                                  arr.push(<Rating.Star filled={false} />)
                                              }
                                          }
                                          return(
                                              <>
                                                  {arr}
                                              </>
                                          )   
                                      })()}
                                      </Rating>
                                  </div>
                                  <div className=' pl-5 flex flex-col'>
                                      <span className='text-l	'>{res.drName}</span>
                                      <span className='text-slate-400	text-sm	'>{res.expertIn}</span>
                                  </div>
                              </div>
                          </Card>
                          
                          )
                          
                      })
                  }
              
          </Carousel>
      </div>    
  )
}

function DoctorsOnline(
  // {doctorsDetails} : DoctorDetails
  ) {

  return (
    <div className='flex justify-center flex-col mt-10 lg:mt-0'>
      <img className='w-100 object-contain h-64 w-100' alt='msg-image' src="https://assets.icliniq.com/v2/assets/images/message.svg" />
      <span className='text-xl text-center'>
        <span className='font-semibold text-xl'>2233</span> Doctors Online
      </span>
      <div className='mt-10 lg:m-14 mb-1'>
        <DoctorCarousel 
        // carouselProp={doctorsDetails} 
        />
      </div>

    </div>
  )
}

export default DoctorsOnline