import React from 'react'
import { Card, Tabs} from 'flowbite-react'

function ParadeInside() {
  return (
        <Card  className='w-full lg:w-8/12 p-3 lg:p-6'>
                        <p className='mt-3 text-center'>Ask your Liver queries to our experienced medical gastroenterologists and receive instant medical advice and second opinion.</p>
                        <p className='mt-3 text-center'>Our medical panel consists of over 50+ highly skilled medical gastroenterologists who specialized in Liver treatment.</p>
                        <hr className='my-8'/>
                        
                        <Tabs.Group
                            className="bg-white rounded-lg dark:bg-gray-800 dark:text-white"
                            style="pills"
                            >
                            <Tabs.Item
                                active={true}
                                title="User Review"
                            >
                                <Card >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                    </p>
                                </Card>
                            </Tabs.Item>
                            <Tabs.Item title="About">
                                <Card >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        About Hair loss
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Hair loss can be due to hormonal changes, heredity, or due to other underlying health conditions, and can affect the hair on the scalp or the entire body. Signs of hair loss are thinning of hair on the top of the head, bald spots, and excessive hair fall. 
                                        
                                    </p>
                                </Card>
                            </Tabs.Item>
                            <Tabs.Item title="How it works">
                                <Card >
                                <ul className='list-disc leading-10 m-5'>
                                    <li>Your health issue will be shared across with our hair loss specialist panel.</li>
                                    <li>A hair loss specialist will pick your query and send medical advice to your health issue subsequently.</li>
                                    <li>You can then follow up with the same hair loss specialist.</li>
                                </ul>  

                                </Card>
                            </Tabs.Item>
                        </Tabs.Group>

                            
                    </Card>
  )
}

export default ParadeInside