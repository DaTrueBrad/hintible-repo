import React, { useEffect, useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import AddNew from "./AddNew";
import History from "./History";
import db from "../fbConfig";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const Profile = () => {
  const [tab, setTab] = useState('new')
  const [history, setHistory] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "journeys"));
    const newArr = []

    querySnapshot.forEach((doc) => {
      const newObj = doc.data()
      newObj.id = doc.id
      newArr.push(newObj)
    });
    console.log(newArr)
    setHistory(newArr)
  }

  useEffect(() => {
    getData()
  }, []);

  const c = (value) => {
    if(tab !== value) {
      setTab(value)
    }
  }

  return (
    <div className="profile-page">
      <h1>Welcome Back,</h1>
      <h2>Jessica.</h2>
      <img
        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
        className="profile-photo"
      />
      <div className="options">
        <button onClick={() => c("new")} className={`profile-option ${tab === "new" && 'active-option'}`}>
          Add New
        </button>
        <button onClick={() => c("history")} className={`profile-option ${tab === "history" && 'active-option'}`}>
          History
        </button>
      </div>
      {tab === 'new' && <AddNew getData={getData} />}
      {tab === 'history' && <History history={history} />}
    </div>
  );
};

export default Profile;
