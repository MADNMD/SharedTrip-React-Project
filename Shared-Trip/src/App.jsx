import { Routes, Route } from "react-router-dom";

import { AuhtProvider } from "./contexts/AuthContext";
import { TripProvider } from "./contexts/TripContext";
import { AllTrips } from "./components/AllTrips";
import { CreateAcount } from "./components/CreateAcount";
import { CreateTrip } from "./components/CreateTrip";
import { EditProfile } from "./components/EditProfile";
import { EditTrip } from "./components/EditTrip";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { MyTrips } from "./components/MyTrips";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./components/NotFound";
import { Profile } from "./components/Profile";
import { TripDetails } from "./components/TripDetails";
import { Logout } from "./components/Logout";
import { LikedStatusProvider } from "./contexts/LikeContext";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {

    return (
        <AuhtProvider>
            <TripProvider>
                <div className="site">
                    <Navigation />
                    <main className="site-main">
                        <Routes >
                            <Route path="/" element={<Home />} />
                            <Route path="/user/login" element={<Login />} />
                            <Route path="/user/create-account" element={<CreateAcount />} />
                            <Route element={<RouteGuard />}>
                                <Route path="/user/profile/:userId" element={<Profile />} />
                                <Route path="/user/edit-profile/:userId" element={<EditProfile />} />
                                <Route path="/trip/create-trip" element={<CreateTrip />} />
                                <Route path="/trip/edit-trip/:tripId" element={<EditTrip />} />
                                <Route path="/trip/my-trips" element={<MyTrips />} />
                            </Route>
                            <Route path="/all-trips" element={<AllTrips />} />
                            <Route path="/trip/trip-details/:tripId" element={<TripDetails />} />
                            <Route path="/user/logout" element={<Logout />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </TripProvider>
        </AuhtProvider>
    )
}

export default App;

// Друг вариант как работят гардовете
{/* <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/user/login" element={<Login />} />
    <Route path="/user/create-account" element={<CreateAcount />} />
    <Route path="/user/profile/:userId" element={<Profile />} />
    <Route path="/user/edit-profile/:userId" element={<EditProfile />} />
    <Route path="/trip/create-trip" element={
        <RouteGuard>
            <CreateTrip />
        </RouteGuard>
    } />
    <Route path="/trip/edit-trip/:tripId" element={<EditTrip />} />
    <Route path="/trip/my-trips" element={<MyTrips />} />
    <Route path="/all-trips" element={<AllTrips />} />
    <Route path="/trip/trip-details/:tripId" element={<TripDetails />} />
    <Route path="/user/logout" element={<Logout />} />
    <Route path="*" element={<NotFound />} />
</Routes> */}