
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import AddForm from './addForm'
import BookList from './booklist'


function handelSubmit(e){
    e.preventDefault();
    console.log('event')
}


export default function Todo(props){

    return(
    <>
        <header> 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Shelf</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button  bg="light" variant="dark">Search</Button>
                </Form>
            </Navbar>
        </header>


        <Container fluid>

            <Row>
                <Col>
                <AddForm/>
                
                </Col>
                <Col>
                <BookList/>
                
                </Col>
            </Row>
        </Container>



    </>
    )

}


