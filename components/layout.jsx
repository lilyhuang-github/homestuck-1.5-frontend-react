import { Container } from "react-bootstrap"
import AppNav from "./nav"
export default function Layout(props){
    return(
        <>
        <AppNav />
        <Container>{props.children}</Container>
        </>
    )
}