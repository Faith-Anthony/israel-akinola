import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { SplashScreen } from './components/common/SplashScreen'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { WorkPage } from './pages/WorkPage'
import { BlogPage } from './pages/Blog'
import { BlogDetailsPage } from './pages/blog/BlogDetailsPage'
import { ContactPage } from './pages/ContactPage'
import { GoLearnPage } from './pages/caseStudies/GoLearnPage'
import { TapperXPage } from './pages/caseStudies/TapperXPage'
import { NTPICPage } from './pages/caseStudies/NTPICPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Only show splash on first load
    const hasVisited = sessionStorage.getItem('visited')
    if (hasVisited) {
      setShowSplash(false)
    } else {
      sessionStorage.setItem('visited', 'true')
    }
  }, [])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/golearn" element={<GoLearnPage />} />
          <Route path="/work/tapperx" element={<TapperXPage />} />
          <Route path="/work/ntpic" element={<NTPICPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
