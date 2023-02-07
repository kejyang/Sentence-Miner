import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const Record = (props) => (
    <tr>
      <td>{props.record.originalSentence}</td>
    </tr> 
);

const Translated = (props) => (
  <div>
    <p>{props.record.transSentence}</p>
    <p>{props.record.words}</p>
  </div>
);

export default function SentencePage() {

    const [showAnswer, setShowAnswer] = useState(false);

    const [form, setForm] = useState({
        originalSentence: "",
        transSentence: "",
        words: "",
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

      function handleOnClick() {
        setShowAnswer(!showAnswer);
      };

      function originalSentence() {
        return (
            <Record
                record={form}
                key={form._id}
            />
        );
      }

      function translatedSentence(){
        return (
          <Translated
              record={form}
              key={form._id}
          />
        );
      }

      return (
        <div>
          <div className="border d-flex align-items-center justify-content-center" style={{ height: "50vh"}} onClick={handleOnClick}>
            {showAnswer ? (
              <p style={{ fontSize: "24px" }}>{translatedSentence()}</p>
            ) : (
              <p style={{ fontSize: "24px" }}>{originalSentence()}</p>
            )}
          </div>
        </div>
        
      );
}