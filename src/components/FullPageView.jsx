import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

const FullPageView = () => {
  return (
    <div>
        This is the full page view
        <nav>
            <Link to="/">Home</Link>
        </nav>
    </div>
  )
}

export default FullPageView