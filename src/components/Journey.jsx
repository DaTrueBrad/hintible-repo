import React, { useEffect, useState } from 'react'
import Video from './Video'
import Calendar from './Calendar'
import { useParams } from 'react-router-dom'
import { getDoc, collection, doc } from 'firebase/firestore'
import db from '../fbConfig'

const Journey = () => {
  const [journey, setJourney] = useState({})
  const {id} = useParams()

  const getData = async () => {
    const docSnap = await getDoc(doc(db, "journeys", id));
    // const newArr = []

    // querySnapshot.forEach((doc) => {
    //   const newObj = doc.data()
    //   newObj.id = doc.id
    //   newArr.push(newObj)
    // });
    if (docSnap.exists()) {
      let info = docSnap.data()
    setJourney(info)
  }
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <Video journey={journey} />
      <Calendar  journey={journey} />
    </>
  )

}
export default Journey