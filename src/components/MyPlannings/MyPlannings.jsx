import React, { useContext } from 'react'
import "./MyPlannings.css";
import { UserContext } from "../../context/userContext";


export default function MyPlannings() {

  const { loggedUser } = useContext(UserContext);


  return (
    <>
    <h1>My current Plan</h1>
    <p>{loggedUser.budget?"Budget: " + loggedUser.budget + "$": "Budget not entered yet"  }</p>
    <p>{loggedUser.venue?"Selected venue" + <img src={loggedUser.venue} alt="" />: "Venue not entered yet"  } </p>
    </>
  )
}
