import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import { CompetenceList } from "./components/CompetenceList";
import { FutureCompetenceList } from "./components/FutureCompetenceList";

function App() {
  return (
    <>
        <ProfileCard />
        <CompetenceList />
        <FutureCompetenceList />
    </>
  )
}

export default App
