import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/homepage/homepage.jsx'
import Preview from '../pages/preview/previewBook.jsx'
import ProfilePage from '../pages/profile/profilePage.jsx'
import SearchPage from '../pages/search/SearchPage.jsx'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/preview" element={<Preview />}/>
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/me" element={<ProfilePage />}/>
    </Routes>
  )
}

export default Router
