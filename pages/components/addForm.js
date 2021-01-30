import Form from 'react-bootstrap/Form'
import handelSubmit from './todo'
import Button from 'react-bootstrap/Button'


export default function AddForm(){
    return(
        <Form onSubmit={handelSubmit}>
        <Form.Group>
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text"  />

        </Form.Group>

        <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label> Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="dark" type="submit">
            Add Book
        </Button>
    </Form>

    )

}