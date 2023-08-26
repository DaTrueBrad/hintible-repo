import React, {useRef, useState} from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import db, {storage} from '../fbConfig'
import { collection, addDoc, FieldValue, arrayUnion } from "firebase/firestore";

const AddNew = ({getData}) => {
  const [embed, setEmbed] = useState('')
  const [title, setTitle] = useState('')
  // const [videoBlob, setVideoBlob] = useState(null)
  const [raw, setRaw] = useState([])
  // const [url, setUrl] = useState('')

  const getLink = async () => {
        const storageRef = ref(storage, `/houses/${raw[0].name}`);
        const snapshot = await uploadBytes(storageRef, raw[0]);
        const url = await getDownloadURL(snapshot.ref);
        return url
    // return array;
  };
  const changeEmbed = e => setEmbed(e.target.value)
  const changeTitle = e => setTitle(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let url = await getLink()
    console.log(url)
    let newJourney = {
      videoUrl: url,
      embedUrl: embed,
      title: title,
      embedType: 'calendar'
    }
    console.log(newJourney)
    const docRef = await addDoc(collection(db, "journeys"), newJourney)
    alert("Successfulyl added a journey!")
    getData()
  }

  const uploadFile = (e) => {
    console.log('FILES', e.target)
    // const raw = [];
    // const newImages = [];
    setRaw(e.target.files);
    raw.push(e.target.files);
    // for (let i = 0; i < raw[0].length; i++) {
    //   newImages.push(URL.createObjectURL(raw[0][i]));
    // }
    // console.log(newImages)
    // setVideoBlob(newImages[0])
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a new Journey</h3>
      <input placeholder='Title of Journey' onChange={changeTitle} />
      <input placeholder='Embed URL' onChange={changeEmbed} />
      <label htmlFor="raised-button-file">
          <span
            id='upload-btn'
            type='none'
          >
            Select Video
          </span>
        </label>
      <input
              accept="video/*"
              // className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={uploadFile}
            />
      <button className='solid-btn'>Save</button>
    </form>
  )
}

export default AddNew