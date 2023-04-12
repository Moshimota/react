import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './Companents/navbar/navbarPage';
import { Col, Container, Row, Table } from 'react-bootstrap';
function App() {
  return (
    <>
      <NavbarPage />
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col lg={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>@twitter</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
