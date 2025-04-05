
// import { useState, useEffect } from "react";
// import { Container, Button, Form } from "react-bootstrap";
// export default function multi(){
//     const [characters, setCharacters] = useState([]);
//     const [dialogue, setDialogue] = useState(null);
//     const [choices,setChoices] = useState("");
//     const

//     return(
//         <>
        
//         </>
//     )
// }
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function multi() {
  const [characters, setCharacters] = useState([]);
  const [dialogue, setDialogue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState([]); // Array for selected characters
  const [iterations, setIterations] = useState(5);

  useEffect(() => {
    fetch("https://homestuck-1-5-352988256386.us-central1.run.app/api/available")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(Object.entries(data));
      });
  }, []);

  const handleSelectChange = (index, value) => {
    const updatedSelections = [...selectedCharacters];
    updatedSelections[index] = value;
    setSelectedCharacters(updatedSelections);
  };

  const addCharacterSelect = () => {
    setSelectedCharacters([...selectedCharacters, "Open this select menu"]);
  };

  const removeCharacterSelect = (index) => {
    const updatedSelections = selectedCharacters.filter((_, i) => i !== index);
    setSelectedCharacters(updatedSelections);
  };

  const fetchDialogue = () => {
    const selectedKeys = selectedCharacters.join(",");
    console.log(`Fetching dialogue for: ${selectedKeys}`);
    fetch(
      `https://homestuck-ngram-backend-latest.onrender.com/api/getxdialogue/${selectedKeys},${iterations}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDialogue(data);
      }).catch((err) =>{
        setDialogue("No dialogue available between selected characters")
        console.log(err)
      }
    )
      
      ;
  };

  return (
    <Container>
      <br />
      {selectedCharacters.map((character, index) => (
        <div key={index}>
          <Form.Select
            aria-label={`Select Character ${index + 1}`}
            onChange={(e) => handleSelectChange(index, e.target.value)}
            value={character}
          >
            <option value="Open this select menu">Open this select menu</option>
            {characters.map(([key, value]) => (
              <option
              class={key}
                key={key}
                value={key}
                disabled={selectedCharacters.includes(key) && character !== key}
              >
                {key}, {value}
              </option>
            ))}
          </Form.Select>
          <Button
            variant="danger"
            onClick={() => removeCharacterSelect(index)}
            className="mt-2"
          >
            Remove
          </Button>
          <br />
          <br/>
        </div>
      ))}
      <Button variant="primary" onClick={addCharacterSelect} className="mt-3">
        Add Character
      </Button>
      <br />
      <br />
      <Button
        type="button"
        onClick={fetchDialogue}
        variant="dark"
        disabled={
          selectedCharacters.length === 0 ||
          selectedCharacters.includes("Open this select menu")
        }
      >
        Get Dialogue
      </Button>
      <br/>
      <br/>
        <Form.Control type="number" min="1" placeholder="5"onChange={e => setIterations(e.target.value)} />
  
      <br />
      <br />
      <p style={{ whiteSpace: "pre-line" }}>{dialogue}</p>

    </Container>
  );
}
