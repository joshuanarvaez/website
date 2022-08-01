import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { formControlClasses } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// here we make API calls to EmailJS so we can receive the messages in our personal email.
const Contact = () => {
    const { reset } = useForm();

    const [form, setForm] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_u3zbtht',
            'wubh2gi',
            form,
            '8ycExG0NQqJ39HJc4'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        reset();
    };

    

    return (
        <div className="contact-form">
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label id="form-heading">Contact Me</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your name" value={formControlClasses.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicSubject">
                            <Form.Control id="subject-text-box" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Control id="email-text-box" type="text" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicMessage">
                            <Form.Control as="textarea" rows={5} id="message-text-box" type="text" name="message" placeholder="Message" value={form.message} onChange={handleChange} />
                        </Form.Group>
                        <Button id="form-button" variant="primary" type="submit">
                            Submit <i class="fas fa-paper-plane"></i>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Contact;

{/* <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={toSend.name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={toSend.subject}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='Your email'
                    value={toSend.email}
                    onChange={handleChange}
                />
                <input type='submit'/>
            </form> */}


