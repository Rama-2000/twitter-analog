import React, { Component } from 'react'
import "./AppHeader.css"

export default function AppHeader({liked, allPosts}) {
    return (
      <div className='app-header d-flex'>
            <h1>Rasulov Rakhmatullo</h1>
            <h2>{allPosts} posts, like {liked}</h2>
      </div>
    )
}
