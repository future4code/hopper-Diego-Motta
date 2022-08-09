import React, { Component }  from 'react';

export const GoToHomePage = (navigate) => {
    navigate("/");
  };
  
export const GoToLogin = (navigate) => {
    navigate("/login");
};

export const GoToAdmin = (navigate) => {
    navigate("/admins");
};

export const GoToCreateTrip = (navigate) => {
    navigate("/createTrip");
};

export const GoToTripDetails = (navigate) => {
    navigate("/tripDetails");
};

export const GoToTrips = (navigate) => {
    navigate("/trips");
};

export const GoToApplication = (navigate) => {
    navigate("/application");
};