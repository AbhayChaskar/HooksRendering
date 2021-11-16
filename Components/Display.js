import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container,Card,Row,Col } from 'react-bootstrap';

export default function Display() {
    const [prodata, setProdata] = useState([])
    useEffect(() => {
       handle()
    }, [])
    const handle=()=>{
        const URL = "http://localhost:3001/Registration";
        axios.get(URL)
        .then(res => {        
            setProdata(res.data)
        })
        .catch(err => { console.log(err) })
    }
     return (
    <div>
      <h1 className="text-dark bg-warning text-center pb-2">Registered Students</h1>
      <Container>
        <Row>{prodata.map((pro)=>
        <Col md={4}>
        <Card className="mt-4">
        <Card.Header>ID - {pro.id}</Card.Header>
        <Card.Body>
        <Card.Title>Enquiry for - {pro.course}</Card.Title>
        <Card.Text>
        <strong> Name: </strong>{pro.name}<br/>
        <strong>Mobile: </strong>+91 {pro.mobile}<br/>
        <strong>Email: </strong>{pro.email}<br/>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        )} 
        </Row>
      </Container>
    </div>
    )
}