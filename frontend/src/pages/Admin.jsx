import { useState, useRef } from "react"; // ✅ added useRef
import "../styles/admin.css";

const initialForm = {
  name: "",
  country: "",
  continent: "",
  degree: "",
  deadline: "",
  eligibility: "",
  funded: "",
  documents: "",
  description: "",
  applyLink: ""
};

function Admin() {
  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState(null);

  // ✅ refs for enter navigation
  const refs = useRef([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ enter key handler
  const handleEnter = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      refs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.country || !form.funded) {
      alert("Name, Country & Funding are required");
      return;
    }

    setPreview({ ...form, id: Date.now() });
    setForm(initialForm);
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel – Add Scholarship</h1>

      <div className="admin-layout">
        {/* FORM */}
        <form className="admin-form" onSubmit={handleSubmit}>
          <Input label="Scholarship Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            inputRef={(el) => (refs.current[0] = el)}
            onKeyDown={(e) => handleEnter(e, 0)}
          />

          <Input label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            inputRef={(el) => (refs.current[1] = el)}
            onKeyDown={(e) => handleEnter(e, 1)}
          />

          <Input label="Continent"
            name="continent"
            value={form.continent}
            onChange={handleChange}
            inputRef={(el) => (refs.current[2] = el)}
            onKeyDown={(e) => handleEnter(e, 2)}
          />

          <Input label="Degree"
            name="degree"
            value={form.degree}
            onChange={handleChange}
            inputRef={(el) => (refs.current[3] = el)}
            onKeyDown={(e) => handleEnter(e, 3)}
          />

          <Input label="Deadline"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            inputRef={(el) => (refs.current[4] = el)}
            onKeyDown={(e) => handleEnter(e, 4)}
          />

          <Input label="Eligibility"
            name="eligibility"
            value={form.eligibility}
            onChange={handleChange}
            inputRef={(el) => (refs.current[5] = el)}
            onKeyDown={(e) => handleEnter(e, 5)}
          />

          <Input label="Funding Type"
            name="funded"
            value={form.funded}
            onChange={handleChange}
            inputRef={(el) => (refs.current[6] = el)}
            onKeyDown={(e) => handleEnter(e, 6)}
          />

          <Input label="Documents Required"
            name="documents"
            value={form.documents}
            onChange={handleChange}
            inputRef={(el) => (refs.current[7] = el)}
            onKeyDown={(e) => handleEnter(e, 7)}
          />

          <Input label="Official Link"
            name="applyLink"
            value={form.applyLink}
            onChange={handleChange}
            inputRef={(el) => (refs.current[8] = el)}
            onKeyDown={(e) => handleEnter(e, 8)}
          />

          <div className="textarea-group">
            <label>Description</label>
            <textarea
              ref={(el) => (refs.current[9] = el)}   // ✅ textarea included
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Scholarship details..."
              onKeyDown={(e) => handleEnter(e, 9)}
            />
          </div>

          <button
            className="admin-btn"
            ref={(el) => (refs.current[10] = el)}
          >
            Add Scholarship
          </button>
        </form>

        {/* LIVE PREVIEW */}
        <div className="preview-box">
          <h3>Live Preview</h3>

          {preview ? (
            <div className="preview-card">
              <h2>{preview.name}</h2>
              <p>{preview.country} • {preview.continent}</p>
              <span className="funded-tag">{preview.funded}</span>
              <p className="desc">{preview.description}</p>
            </div>
          ) : (
            <p className="muted">No preview yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ✅ Input component UPDATED safely (NO CSS change)
const Input = ({ label, inputRef, ...props }) => (
  <div className="input-group">
    <label>{label}</label>
    <input ref={inputRef} {...props} />
  </div>
);

export default Admin;
