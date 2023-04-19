import React, { useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';



export const AboutFunc = () => {
    let [total, setTotal] = useState(0)
    let [their1, setTheir1] = useState(0)
    let [their2, setTheir2] = useState(0)
    let [their3, setTheir3] = useState(0)
    let [their4, setTheir4] = useState(0)
    const BtnClick = (price) => {
        let btn = document.querySelector(".btn1")
        btn.style.display = "none"
        let div = document.querySelector(".df1")
        div.style.justifyContent = "end"
        setTotal(total += +price)
        setTheir1(their1 += 1)
    }
    const BtnClick2 = (price) => {
        let btn2 = document.querySelector(".btn5")
        btn2.style.display = "none"
        let div = document.querySelector(".df2")
        div.style.justifyContent = "end"
        setTotal(total += +price)
        setTheir2(their2 += 1)
    }
    const BtnClick3 = (price) => {
        let btn3 = document.querySelector(".btn3")
        let div = document.querySelector(".df3")
        btn3.style.display = "none"
        div.style.justifyContent = "end"
        setTotal(total += +price)
        setTheir3(their3 += 1)
    }
    const BtnClick4 = (price) => {
        let btn4 = document.querySelector(".btn4")
        btn4.style.display = "none"
        let div = document.querySelector(".df4")
        div.style.justifyContent = "end"
        setTotal(total += +price)
        setTheir4(their4 += 1)
    }
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                        <Col lg={3}>
                            <Card className='mt-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn1.img.sputniknews.uz/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg" />
                                <Card.Body>
                                    <Card.Title>burger</Card.Title>
                                    <h3 className="qalin"><b>12000</b> so'm</h3>
                                    <div className="df1" style={{ display: "flex", justifyContent: 'space-between' }}>
                                        <Button className='btn1' onClick={() => BtnClick(12000)} variant="primary">добавить</Button>
                                        <div className="dfem">
                                            <span className="umumir">{their1}</span>
                                            <Button className='btn2' onClick={() => BtnClick(12000)} variant="primary">+</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mt-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn1.img.sputniknews.uz/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg" />
                                <Card.Body>
                                    <Card.Title>cheese burger</Card.Title>
                                    <h3 className="qalin"><b>14000</b> so'm</h3>
                                    <div className="df2" style={{ display: "flex", justifyContent: 'space-between' }}>
                                        <Button className='btn5' onClick={() => BtnClick2(14000)} variant="primary">добавить</Button>
                                        <div className="dfem">
                                            <span className="umumir">{their2}</span>
                                            <Button className='btn2' onClick={() => BtnClick2(14000)} variant="primary">+</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mt-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn1.img.sputniknews.uz/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg" />
                                <Card.Body>
                                    <Card.Title>big burger</Card.Title>
                                    <h3 className="qalin"><b>20000</b> so'm</h3>
                                    <div className="df3" style={{ display: "flex", justifyContent: 'space-between' }}>
                                        <Button className='btn3' onClick={() => BtnClick3(20000)} variant="primary">добавить</Button>
                                        <div className="dfem">
                                            <span className="umumir">{their3}</span>
                                            <Button className='btn2' onClick={() => BtnClick3(20000)} variant="primary">+</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mt-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://cdn1.img.sputniknews.uz/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg" />
                                <Card.Body>
                                    <Card.Title>big cheese burger</Card.Title>
                                    <h3 className="qalin"><b>24000</b> so'm</h3>
                                    <div className="df4" style={{ display: "flex", justifyContent: 'space-between' }}>
                                        <Button className='btn4' onClick={() => BtnClick4(23000)} variant="primary">добавить</Button>
                                        <div className="dfem">
                                            <span className="umumir">{their4}</span>
                                            <Button className='btn2' onClick={() => BtnClick4(23000)} variant="primary">+</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col lg={10}>
                        <ListGroup className='mt-5'>
                            <ListGroup.Item>Their sum :{total} so'm</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}