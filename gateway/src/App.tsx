import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Routes>
      {/* Always show the login page on visit to force manual login */}
      <Route path="/" element={<LoginPage />} />
      {/* Backward compatibility */}
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

