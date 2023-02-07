import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    originalSentence: "",
    transSentence: "",
    words: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedSentence = {
      originalSentence: form.originalSentence,
      transSentence: form.transSentence,
      words: form.words,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedSentence),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Sentence</h3>
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
            value={form.word}
            onChange={(e) => updateForm({ word: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update sentence"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}