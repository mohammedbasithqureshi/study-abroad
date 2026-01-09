// Updated ScholarshipCard.jsx - Back to single "View Details" button only
import { Link } from "react-router-dom";
import "../styles/scholarshipCard.css";

function ScholarshipCard({ data }) {
  const getDeadlineClass = (deadline) => {
    if (!deadline || deadline.includes("Multiple") || deadline.includes("Varies") || deadline.includes("Rolling") || deadline.includes("TBD")) {
      return "";
    }
    if (deadline.includes("2025")) {
      return "deadline-past";
    }
    return "deadline-upcoming";
  };

  const getFundingClass = () => {
    if (data.funded === "Fully") return "fully";
    if (data.funded === "Partial") return "partial";
    if (data.funded.includes("Partial")) return "mixed";
    return "fully";
  };

  return (
    <div className="scholarship-card">
      {/* HEADER */}
      <div className="card-header">
        <h3>{data.name}</h3>
      </div>

      {/* META INFO */}
      <div className="card-meta">
        <div>
          <span className="label">Country</span>
          <span className="value">{data.country}</span>
        </div>

        <div>
          <span className="label">Funding</span>
          <span className={`funded ${getFundingClass()}`}>
            {data.funded}
          </span>
        </div>
      </div>

      {/* DETAILS */}
      <div className="card-details">
        <p><strong>Eligibility:</strong> {data.eligibility}</p>
        <p>
          <strong>Deadline:</strong>{" "}
          <span className={getDeadlineClass(data.deadline)}>
            {data.deadline}
          </span>
        </p>
      </div>

      {/* SINGLE ACTION BUTTON */}
      <Link to={`/scholarship/${data.id}`} className="card-btn">
        View Details
      </Link>
    </div>
  );
}

export default ScholarshipCard;