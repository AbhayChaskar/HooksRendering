import React, { useState, useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Contact from './Contact'

export default function Courses() {
    const SelectCourse = (event) => {
        
        event.preventDefault();
        let subject = event.target.value
        console.log(subject)

        if (localStorage.getItem('sub') !== undefined) {

            localStorage.clear();
            if (subject === "html") {
                localStorage.setItem('sub', subject)   
                window.location.reload();
            }
            else if (subject === "javascript") {
                localStorage.setItem('sub', subject)
                window.location.reload();
            }
            else if (subject === "css") {
                localStorage.setItem('sub', subject)
                window.location.reload();
            }
            else if (subject === "react") {
                localStorage.setItem('sub', subject)
                window.location.reload();
            }
            else if (subject === "node") {
                localStorage.setItem('sub', subject)
                window.location.reload();
            }
        }
        else {
            if (subject === "html") {
                localStorage.setItem('sub', subject)
            }
            else if (subject === "javascript") {
                localStorage.setItem('sub', subject)
            }
            else if (subject === "css") {
                localStorage.setItem('sub', subject)
            }
            else if (subject === "react") {
                localStorage.setItem('sub', subject)
            }
            else if (subject === "node") {
                localStorage.setItem('sub', subject)
            }
        }
    }

    return (<div >
        <h1 className="text-center text-dark bg-warning pb-2">Trending Courses</h1>
        <hr />
        <Container>
            <Row>
                <Col className="bg-dark text-light">
                    <h3 className="mt-2">HTML</h3>
                    <p>HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn.</p>
                    <Button variant="warning" className="mb-3" onClick={SelectCourse} value="html">Enquire</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="bg-dark text-light">
                    <h3 className="mt-2">JAVASCRIPT</h3>
                    <p>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one.</p>
                    <Button variant="warning" className="mb-3" onClick={SelectCourse} value="javascript">Enquire</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="bg-dark text-light">
                    <h3 className="mt-2">CSS</h3>
                    <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.</p>
                    <Button variant="warning" className="mb-3" onClick={SelectCourse} value="css">Enquire</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="bg-dark text-light">
                    <h3 className="mt-2">REACT</h3>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render.</p>
                    <Button variant="warning" className="mb-3" onClick={SelectCourse} value="react">Enquire</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="bg-dark text-light">
                    <h3 className="mt-2">NODE</h3>
                    <p>Node.js uses asynchronous programming! A common task for a web server can be to open a file on the server and return the content to the client.</p>
                    <Button variant="warning" className="mb-3" onClick={SelectCourse} value="node">Enquire</Button>
                </Col>
            </Row>
        </Container>
        <br /><br />
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                    <Col md="8">
                        {localStorage.getItem('sub')===null?""  :<Contact/>}
                    </Col>
                <Col xs lg="2"></Col>
            </Row>
        </Container>

    </div>
    )
}