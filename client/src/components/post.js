import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Post() {
  const [form, setForm] = useState({
    originalSentence: "",
    transSentence: "",
    words: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newSentence = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSentence),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ originalSentence: "", transSentence: "", words: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Sentence</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="originalSentence">Original Sentence</label>
          <input
            type="text"
            className="form-control"
            id="originalSentence"
            value={form.originalSentence}
            onChange={(e) => updateForm({ originalSentence: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="transSentence">Translated Sentence</label>
          <input
            type="text"
            className="form-control"
            id="transSentence"
            value={form.transSentence}
            onChange={(e) => updateForm({ transSentence: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="words">Words</label>
          <input
            type="text"
            className="form-control"
            id="transSentence"
            value={form.words}
            onChange={(e) => updateForm({ words: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create sentence"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
