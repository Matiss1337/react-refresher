import { Route, Routes } from 'react-router-dom'

// These are your own React components.
// HomePageChecklist renders the home/checklist content.
import HomePageChecklist from './elements/HomePageChecklist'
// Nav stays visible and will contain links to routes.
import Nav from './elements/Nav'
// Rendering is the page component for the /rendering route.
import Rendering from './elements/Rendering'
import ScrollToTopButton from './elements/ScrollToTopButton'

function App() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-[1240px] mx-auto">
        <Nav />
        <main className="mt-4 flex flex-col rounded-md border border-gray-200 bg-white p-4">
          {/* Routes is the container for all route definitions. */}
          <Routes>
            {/* Route says: when the URL is "/", render HomePageChecklist. */}
            <Route path="/" element={<HomePageChecklist />} />
            {/* Route says: when the URL is "/rendering", render Rendering. */}
            <Route path="/rendering" element={<Rendering />} />
          </Routes>
        </main>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default App
