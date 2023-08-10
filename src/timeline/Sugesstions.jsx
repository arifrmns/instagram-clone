
import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material';

function Sugesstions() {
  return (
    <div className='sugesstions'>
      <div className="sugesstions__tittle">Sugesstions for you</div>
      <div className="sugesstions__usernames">


        <div className="sugesstion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username__info">
              <span className="username">kmlnr</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow Back</button>         
        </div>

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>L</Avatar>
            </span>
            <div className="username__info">
              <span className="username">L4mbeTurah</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>         
        </div>

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username">bestiezz</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>         
        </div>

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">agitside_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow Back</button>         
        </div>

      </div>
    </div>
  )
}

export default Sugesstions;