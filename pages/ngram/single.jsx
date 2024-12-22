
// import useSWR from "swr"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
export default function single(){
    // const {data, err} = useSWR('https://homestuck-1-5-352988256386.us-central1.run.app/api/available');
    const [characters, setCharacters] = useState(null);
    useEffect(()=>{
        fetch('https://homestuck-1-5-352988256386.us-central1.run.app/api/available').
        then((res) => res.json()).
        then((data)=>{
            setCharacters(data);
            let tf = Object.keys(data).map(function(key){
                console.log(key, data[key]);
            })
            // Object.entries(characters).forEach([key,value] =?)
        },[])
    })
    return (
        <>
        

        <Container>
            WASD:
            {/* {data} */}
            {/* {console.log(characters)} */}
        </Container>
        </>

    )
}