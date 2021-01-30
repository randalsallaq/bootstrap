import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'


export default function BookList(props){

    return(
        <>
        <Row>
            <Toast>
                <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>

                </Toast.Header>
                <Toast.Body>hello from the other side</Toast.Body>
            </Toast>
        </Row>
        </>
    )

}