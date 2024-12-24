
import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";

export default function duo(){
    const [characters, setCharacters] = useState(null);
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
            let tf = Object.entries(data).map(([key, value]) => 
                <option 
                    class={key} 
                    disabled={userChoice1 === key || userChoice2 === key}
                    value={key} 
                    key={key}>
                        {key}, {value}</option>
        );
        // onSelect={choice =>setUserChoice(choice)}
            // console.log(tf);
            setCharacters(tf);
        })
        ;
    }, [])
    return (

        <><Container>
            <br/>
            <Form.Select aria-label="Default select example" onChange={va => setUserChoice1(va.target.value)} >
                {/* <select value={optionsState}> */}
            <option value={null}>Open this select menu</option>
            {characters}
         
            </Form.Select>

            <Form.Select aria-label="Default select example" onChange={va => setUserChoice2(va.target.value)} >
                {/* <select value={optionsState}> */}
            <option value={null}>Open this select menu</option>
            {characters}
         
            </Form.Select>
            

            User1: {userChoice1}
            <br/>
            User2: {userChoice2}
            </Container></>
    )
}