import { React } from 'react';
import { send } from 'emailjs-com';
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { TextField, Button, Box, Typography, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../styles/contact.css'
import ColorTheme from './ColorTheme'


const Contact = () => {

    const initialValues = {
        name: '',
        subject: '',
        email: '',
        message: '',
    };
    

    /* Yup allows us to build a validation schema for our form. Formik library allows us to get values in and out
        of the form state and handle the form submission. Easier than useState. */
    return (
        <div className="contact-container">
        <p className="contact-intro">
        Contact me with any questions you might have!
        </p>
        <div className="contact-form">
            <Formik
                initialValues={initialValues}
                validationSchema={object({
                    name: string().required("Please enter your name"),
                    email: string().required("Please enter your email").email("Invalid email"),
                    subject: string().required("Please enter a subject"),
                    message: string().required("Please enter a message")
                        .min(20, "Message should be minimum 20 characters long"),
                })}

                onSubmit={(values, formikHelpers) => {
                    // api call to EmailJS
                    send(
                        'service_u3zbtht',
                        'wubh2gi',
                        values,
                        '8ycExG0NQqJ39HJc4'
                    )
                    formikHelpers.resetForm();
                }}

            >
                {({ errors, isValid, touched, dirty }) => (

                    <Form>
                        <div className="form-header">
                        </div>
                        <Field
                            className="name-textbox"
                            name="name"
                            type="name"
                            label="Name"
                            as={TextField}
                            color="primary"
                            error={Boolean(errors.name) && Boolean(touched.name)}
                            helperText={Boolean(touched.name) && errors.name}
                            size="small"
                            autoFocus
                        />
                        <Box height={14} />

                        <Field
                            className="email-textbox"
                            name="email"
                            type="email"
                            label="Email"
                            as={TextField}
                            color="primary"
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                            size="small"
                        />
                        <Box height={14} />

                        <Field
                            className="subject-textbox"
                            name="subject"
                            type="subject"
                            label="Subject"
                            as={TextField}
                            color="primary"
                            error={Boolean(errors.subject) && Boolean(touched.subject)}
                            helperText={Boolean(touched.subject) && errors.subject}
                            size="small"
                        />
                        <Box height={14} />

                        <Field
                            className="message-textbox"
                            name="message"
                            type="message"
                            label="Message"
                            as={TextField}
                            color="primary"
                            error={Boolean(errors.message) && Boolean(touched.message)}
                            helperText={Boolean(touched.message) && errors.message}
                            size="small"
                            multiline
                            rows={6}
                        />
                        <Box height={14} />

                        <Button type="submit"
                            id="form-submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={!isValid || !dirty}
                            endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
        </div>
    );
}
export default Contact;



