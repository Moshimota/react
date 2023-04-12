import React from 'react'
import { Container, Navbar} from 'react-bootstrap'

export default function NavbarPage(){
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            About Page
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}