import { useParams, Link } from "react-router-dom";
import { scholarship as scholarships } from "../data/scholarship"; // Adjust path if needed
import "../styles/scholarshipDetails.css";

function ScholarshipDetails() {
  const { id } = useParams();
  const scholarship = scholarships.find((s) => s.id === Number(id));

  if (!scholarship) {
    return <p className="not-found">Scholarship not found</p>;
  }

  return (
    <div className="details-page">
      <div className="details-card">
        <button onClick={() => window.history.back()} className="back-btn">
  ← Back to List
</button>

        <h1 className="details-title">{scholarship.name}</h1>

        <div className="details-meta">
          <span>🌍 {scholarship.country}</span>
          <span>💰 {scholarship.funded}</span>
          <span>📅 Deadline: {scholarship.deadline}</span>
        </div>

        <div className="details-section">
          <h3>About the Scholarship</h3>
          <p>{scholarship.description}</p>
        </div>

        <div className="details-section">
          <h3>Eligibility</h3>
          <p>{scholarship.eligibility}</p>
        </div>

        <div className="details-section">
          <h3>Benefits</h3>
          <ul className="list">
            {scholarship.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3>Required Documents</h3>
          <ul className="list">
            {scholarship.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3>Selection Criteria</h3>
          <ul className="list">
            {scholarship.selectionCriteria.map((crit, index) => (
              <li key={index}>{crit}</li>
            ))}
          </ul>
        </div>

        <div className="details-actions">
          <a
            href={scholarship.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn"
          >
            Apply Now ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipDetails;