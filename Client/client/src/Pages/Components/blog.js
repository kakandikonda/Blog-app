// import "../../css/blog.css"
import {Card, Button, Container} from "react-bootstrap"

function blog({Title, Description, Id, Author}) {

    return (
        
        <Container>
            <br />
            <Card>
                <Card.Header>By: <a className="username" href={`/profile/${Author.id}`}>{Author.username}</a></Card.Header>
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Description.length > 100 &&
                        <>{Description.slice(0,100)}...</>
                        }
                        {Description.length <= 100 &&
                        <>{Description}</>
                        }
                    </Card.Text>
                    <a href={`/blog/${Id}`}>read more</a>
                </Card.Body>
                <Card.Footer>:thumbs up:</Card.Footer>
            </Card>
        </Container>
        

    )
}

export default blog;