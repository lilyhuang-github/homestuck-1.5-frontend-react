
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function duo(){
    const [characters, setCharacters] = useState([]);
    const [dialogue, setDialogue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userChoice1, setUserChoice1] = useState("Open this select menu");
    const [userChoice2, setUserChoice2] = useState("Open this select menu");
    const [userChoiceLag1, setUserChoiceLag1] = useState("Open this select menu");
    const [userChoiceLag2, setUserChoiceLag2] = useState("Open this select menu");


    useEffect(()=>{
        // console.log("WASD");
        fetch('https://homestuck-1-5-352988256386.us-central1.run.app/api/available').
        then((res) => res.json()).
        then((data) =>{
            // console.log(data);
        //     let tf = Object.entries(data).map(([key, value]) => 
        //         <option 
        //             class={key} 
        //             disabled={userChoice1 === key || userChoice2 === key}
        //             value={key} 
        //             key={key}>
        //                 {key}, {value}</option>
        // );
        // onSelect={choice =>setUserChoice(choice)}
            // console.log(tf);
            setCharacters(Object.entries(data));
        })
        ;
    }, [])

    const characterFind = (chr1, chr2) =>{
        setUserChoiceLag1(chr1);
        setUserChoiceLag2(chr2);
        console.log(`https://homestuck-1-5-352988256386.us-central1.run.app/api/get2dialogue/${chr1},${chr2},5`);
        fetch(`https://homestuck-1-5-352988256386.us-central1.run.app/api/get2dialogue/${chr1},${chr2},5`).
        then((res) => res.json()).
        then((data) =>{
            setDialogue(data);
            
        });
       
    }
    return (

        <><Container>
            <br/>
            <Form.Select  aria-label="Default select example" onChange={va => setUserChoice1(va.target.value)} >
                {/* <select value={optionsState}> */}
            <option value={null}>Open this select menu</option>
            {/* {characters} */}
            {characters.map(([key, value]) => (
          <option
          class={key}
            key={key}
            value={key}
            disabled={userChoice1 === key || userChoice2 === key}
          >
            {key}, {value}
          </option>
        ))}
         
            </Form.Select>

            <Form.Select aria-label="Default select example" onChange={va => setUserChoice2(va.target.value)} >
                {/* <select value={optionsState}> */}
            <option value={null}>Open this select menu</option>
            {/* {characters} */}
            {characters.map(([key, value]) => (
          <option
            class={key}
            key={key}
            value={key}
            disabled={userChoice1 === key || userChoice2 === key}
          >
            {key}, {value}
          </option>
        ))}
         
            </Form.Select>
            
            <Button type="button" onClick={() =>characterFind(userChoice1, userChoice2)}variant="dark" disabled={userChoice1 === "Open this select menu" || userChoice2 === "Open this select menu"}>Get Dialogue</Button>
            <br/>
            <br/>
            {dialogue}    
            </Container></>
    )
}