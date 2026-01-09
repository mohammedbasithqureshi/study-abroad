import { useState } from "react";
import ScholarshipCard from "../components/ScholarshipCard";
import { scholarship as scholarships } from "../data/scholarship";
import "../styles/scholarships.css";

function Scholarship() {
  const [search, setSearch] = useState("");
  const [funded, setFunded] = useState("All");

  const filteredScholarships = scholarships.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.country.toLowerCase().includes(search.toLowerCase());

    const matchesFunding =
      funded === "All" || item.funded === funded;

    return matchesSearch && matchesFunding;
  });

  return (
    <div className="scholarship-page">

      <h1 className="page-title">Explore Scholarships</h1>

      {/* SEARCH BAR */}
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by scholarship or country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={funded}
          onChange={(e) => setFunded(e.target.value)}
        >
          <option value="All">All Funding</option>
          <option value="Fully">Fully Funded</option>
          <option value="Partial">Partial Funded</option>
        </select>
      </div>

      {/* GRID */}
      <div className="scholarship-grid">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((item) => (
            <ScholarshipCard key={item.id} data={item} />
          ))
        ) : (
          <p className="no-results">No scholarships found.</p>
        )}
      </div>
    </div>
  );
}

export default Scholarship;
