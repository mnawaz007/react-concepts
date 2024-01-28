import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import core from '../assets/react-core-concepts.png'
export default function Header(){
    return(
        <>
        <container>
            <row> 
                <col> 
                <h1>React Core Concepts</h1>
        <img src= {core} alt="main image" />
                </col>
             </row>
            
        </container>
        
        </>
    )
}