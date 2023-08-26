import React from 'react'
// import video from '../assets/0825.mp4'
import {LuArrowLeft} from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Video = ({journey}) => {
  console.log(journey.videoUrl)
  if(!journey.videoUrl) return <h2>Loading</h2>
  return (
    <>
    <Link to='/profile/7'><LuArrowLeft size={48} id="back-button" /></Link>
    <video id="video" controls>
      <source src={journey.videoUrl} />
    </video>
    </>
  )
}

export default Video