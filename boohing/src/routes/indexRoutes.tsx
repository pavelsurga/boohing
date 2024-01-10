import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MapsPage from '../pages/User/MapsPage';
import LoginPage from '../pages/General/LoginPage';
import RegistrationPage from '../pages/General/RegistrationPage';
import PlacesListPage from '../pages/User/PlacesListPage';
import PlanPlacesPage from '../pages/User/PlanPlacesPage';
import ProfilePage from '../pages/User/ProfilePage';
import ReviewsPage from '../pages/User/ReviewsPage';
import PlanPlaceForAdmin from '../pages/Admin/PlanPlaceForAdmin';
import CreateFloorPage from '../pages/Owner/CreateFloorPage';
import CreateHallPage from '../pages/Owner/CreateHallPage';
import CreatePlacePage from '../pages/Owner/CreatePlacePage';
import CreatePlanPage from '../pages/Owner/CreatePlanPage';
import EditHallPage from '../pages/Owner/EditHallPage';
import PlanHallPage from '../pages/Owner/PlanHallPage';


const IndexRoutes = () => {
  return (
    <Routes>
      {/* General */}
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registration' element={<RegistrationPage />} />

      {/* User */}
      <Route path='/map' element={<MapsPage />} />
      <Route path='/places' element={<PlacesListPage />} />
      <Route path='/plan' element={<PlanPlacesPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/reviews' element={<ReviewsPage />} />

      {/* Admin */}
      <Route path='/plan-admin' element={<PlanPlaceForAdmin />} />

      {/* Owner */}
      <Route path='/create-floor' element={<CreateFloorPage />} />
      <Route path='/create-hall' element={<CreateHallPage />} />
      <Route path='/create-place' element={<CreatePlacePage />} />
      <Route path='/create-plan' element={<CreatePlanPage />} />
      <Route path='/edit-hall' element={<EditHallPage />} />
      <Route path='/plan-hall' element={<PlanHallPage />} />
    </Routes>
  )
}

export default IndexRoutes