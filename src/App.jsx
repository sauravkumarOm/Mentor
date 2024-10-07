import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './Layout'
import MeetingForm from './pages/Meeting'
import ConfirmationPage from './pages/ConfirmationPage'
import MentorDetail from './pages/MentorDetail'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/meeting-schedule" element={<Layout><MeetingForm /></Layout>} />
          <Route path="/confirmation" element={<Layout><ConfirmationPage /></Layout>} />
          <Route path="/mentor-detail/:id" element={<Layout><MentorDetail /></Layout>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
