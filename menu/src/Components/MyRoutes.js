import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage'

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/drift" element={<DriftPage />} />
      <Route path="/timeattack" element={<TimeAttackPage />} />
      <Route path="/forza" element={<ForzaPage />} />
    </Routes>
  )
}
