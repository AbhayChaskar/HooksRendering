import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import axios from 'axios'

export default function Products() {
    const [prodata, setProdata] = useState([])
    
    useEffect(() => {
       fetchFun()
    }, [])

    const fetchFun=()=>{
        const URL = "http://localhost:3002/products";
        axios.get(URL)
        .then(res => {
            // this.setState({ prodata: res.data })
            setProdata(res.data)
        })
        .catch(err => { console.log(err) })
    }
    return (
        <Container>
          <Row className="container">
            {prodata.map((pro)=>
              <Col md="auto">
              <Card className="ml-5 mt-5" style={{ width: '26rem', border:"1px solid" }}>
              <Card.Img src={pro.image} className="pl-3 pt-2" style={{width:"400px"}} />
              <Card.Body>
                <Card.Title>{pro.pname}</Card.Title>
                <Card.Text><strong className="text-danger">{pro.price}</strong></Card.Text>    
              </Card.Body>
            </Card>
            </Col>
            )}
          </Row>
        </Container>
    )
}
