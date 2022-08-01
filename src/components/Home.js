import Card from 'react-bootstrap/Card';
import homePic from '../homePic.png'


export const Home = () => {
    return (
        <div className="home-container">
            <div className="home-pic-card">
                <Card className="bg-dark text-white">
                    <div className="home-page-pic">
                        <Card.Img variant="top" src={homePic} />
                    </div>
                </Card>
            </div>
            <div className="intro-card">
            <Card style={{ width: '18rem' }}>
        <Card.Header>Hello World!</Card.Header>
        <Card.Body>
          <Card.Text>
            My name is Josh. I'm a Chicago native and aspiring Front End Web Developer.
            Thanks for checking out my website! You can find more information on me on the About page, 
            send me a message on the Contact page, or view some of my projects on the Portfolio page. Please feel 
            free to connect with me on social media as well. Have a great day! 
          </Card.Text>
        </Card.Body>
      </Card>
            </div>
        </div>

    );
}
