// import "../../css/blog.css"
import {Card, Button, Container} from "react-bootstrap"

function collection({ Id, name, description}) {

    return (
        
        <Container>
            <br />
            <Card>
                {/* <Card.Header>By: <a className="username" href={`/profile/${Author.id}`}>{Author.username}</a></Card.Header> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <a href={`/collections/${Id}`}>read more</a>
                </Card.Body>
                {/* <Card.Footer>:thumbs up:</Card.Footer> */}
            </Card>
        </Container>
        

    )
}

export default collection;