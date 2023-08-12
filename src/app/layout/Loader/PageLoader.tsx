import React from 'react'
import './PageLoader.css'

const PageLoader = () => {
  return (
    <div className="loader-div">
    <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">loading</div>
        </div>
</div>
  </div>
  )
}

export default PageLoader