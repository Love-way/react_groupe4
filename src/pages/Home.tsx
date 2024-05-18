import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "white", color: "black", textAlign: "center"}}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Projet Réact: Groupe 4</h1>
      <h5 style={{ fontSize: "18px", marginBottom: "30px" }}>
        Membres du groupe
      </h5>
      <p>* DOUNIAMA Love-way</p>
      <p style={{ marginTop: "5px"}}>* AGBOKOU Melvine</p>
      <p style={{ marginTop: "5px"}}>* MOURAÏNI Kèfil</p>
      <p style={{ marginTop: "5px"}}>* FEKOTAN Moustapha</p>
      <h5 style={{ fontSize: "18px", marginBottom: "30px", marginTop: "30px" }}>
        Visitez les liens ci-dessous
      </h5>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/findjobs" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FindJobs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/browsecompanies" style={{ color: "#87CEFA", textDecoration: "none" }}>
            BrowseCompanies
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/searchcompaniesresults" style={{ color: "#87CEFA", textDecoration: "none" }}>
            SearchCompaniesResults
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/jobdescriptions" style={{ color: "#87CEFA", textDecoration: "none" }}>
            JobDescriptions
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
