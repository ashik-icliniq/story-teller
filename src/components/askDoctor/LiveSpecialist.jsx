import React from 'react'
import { Card, Button ,Textarea} from 'flowbite-react'


function LiveSpecialist() {
    return (
        <>
            <Card className='p-6'>
               
                <h5 className="text-2xl my-5 font-bold tracking-tight text-gray-900 dark:text-white">
                    Ask a 'Liver Specialist' Online
                </h5>
                <p className=" my-5 font-semibold text-gray-700 uppercase dark:text-gray-400">
                    ENTER YOUR HEALTH QUERY
                </p>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={4}
                />
                <Button className='mt-3'>
                    Submit
                </Button>
            </Card>
        </>
    )
}

export default LiveSpecialist