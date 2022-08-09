import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage"
import AdminHome from "../Pages/AdminHomePage"
import Login from "../Pages/LoginPage"
import CreateTrip from "../Pages/CreateTripPage"
import ListTrips from "../Pages/ListTripsPage"
import ApplicationForm from "../Pages/ApplicationFormPage"
import TripDetails from "../Pages/TripDetailsPage"


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/admin"} element={<AdminHome />} />
          <Route path={"/createTrip"} element={<CreateTrip />} />
          <Route path={"/tripDetails"} element={<TripDetails />} />
          <Route path={"/trips"} element={<ListTrips />} />
          <Route path={"/application"} element={<ApplicationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
