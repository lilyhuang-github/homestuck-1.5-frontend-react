
// import useSWR from "swr"
import { useEffect, useState } from "react";
import { Container, Form,Button } from "react-bootstrap"
// import Button from "react-bootstrap";
export default function single(){
    // const {data, err} = useSWR('https://homestuck-1-5-352988256386.us-central1.run.app/api/available');
    const [characters, setCharacters] = useState(null);
    const [dialogue, setDialogue] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userChoice, setUserChoice] = useState("Open this select menu");
    const [userChoiceLag, setUserChoiceLag] = useState("Open this select menu");
    
    useEffect(()=>{
        // console.log("WASD");
        fetch('https://homestuck-1-5-352988256386.us-central1.run.app/api/available').
        then((res) => res.json()).
        then((data) =>{
            // console.log(data);
            let tf = Object.entries(data).map(([key, value]) => 
                <option class={key} value={key} key={key}>{key}, {value}</option>
        );
        // onSelect={choice =>setUserChoice(choice)}
            // console.log(tf);
            setCharacters(tf);
        })
        ;
    }, [])
    // function characterFind(chr){
    //     fetch(`https://homestuck-1-5-352988256386.us-central1.run.app/api/get1dialogue/${chr}`).
    //     then((data) =>{
    //         setDialogue(data);
    //     })
    // }
    const characterFind = (chr) =>{
        setUserChoiceLag(chr);
        console.log(`https://homestuck-1-5-352988256386.us-central1.run.app/api/get1dialogue/${chr}`);
        fetch(`https://homestuck-1-5-352988256386.us-central1.run.app/api/get1dialogue/${chr}`).
        then((res) => res.json()).
        then((data) =>{
            setDialogue(data);
            
        }).catch((err) =>{
            setDialogue("No available dialogue for selected character");
            console.log(err);
          })
         
       
    }
    // useEffect(()=>{
    //     fetch('https://homestuck-1-5-352988256386.us-central1.run.app/api/available').
    //     then((res) => res.json()).
    //     then((data)=>{
    //         // setCharacters(data);

    //         let tf = Object.keys(data).map(function(key){
    //             `<p>${key} ${data[key]}</p>`
    //         })
    //         console.log("DATA:",    data);
    //         setCharacters(tf);
    //         console.log(tf);
    //         // Object.entries(characters).forEach([key,value] =?)
    //     },[])
    // })
    // const handleChange = (e) => {
    //     setUserChoice(e.target.value); // Update the state when a user makes a selection
    //   };
    return (
        <>
        
        
        <Container>
            <br/>
            <Form.Select  aria-label="Default select example" onChange={va => setUserChoice(va.target.value)} >
                {/* <select value={optionsState}> */}
            <option value={null}>Open this select menu</option>
            {characters}
         
            </Form.Select>
            <br/>
            <Button type="button" onClick={() =>characterFind(userChoice)}variant="dark" disabled={userChoice === "Open this select menu"}>Get Dialogue</Button>
            
            <br/>
            <br/>
            <p class={userChoiceLag}>{dialogue}</p>

            
            {/* {data} */}
            {/* {console.log(characters)} */}
        </Container>
        </>

    )
}