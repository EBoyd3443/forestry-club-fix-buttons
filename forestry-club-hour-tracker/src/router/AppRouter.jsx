import { BrowserRouter, Routes, Route } from "react-router";

import AdminReview from '../pages/AdminReview';
import AdminMemberView from '../pages/AdminMemberView';
import AdminClubView from '../pages/AdminClubView';
import Navigation from '../Navigation';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddMember from '../components/AddMember';
import MemberView from '../pages/MemberView';
import MemberHoursView from '../pages/MemberHoursView';

const AppRouter = () => {
 return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigation />}>
                {/* <Route index element={<Login />} /> */}
                <Route index element={<Home />} />
                <Route path='/adminReview' element={<AdminReview />} />
                <Route path='/adminClub/:member' element={<AdminMemberView />} />
                <Route path='/adminClub' element={<AdminClubView />} />
                <Route path='/member' element={<MemberView />} />
                <Route path='/member/:username' element={<MemberHoursView />}/>
                <Route path='/member/:member' element={<MemberHoursView />}/>
            </Route>
        </Routes>
    </BrowserRouter>
 );
}

export default AppRouter;