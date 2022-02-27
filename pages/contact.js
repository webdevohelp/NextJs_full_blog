import ContactForm from '../components/contact/contact-form';
import { Fragment } from 'react';
import Head from 'next/head';
function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="This is the contact page for our website. Here you can contact us if you have any query or suggestion for us."
                />
            </Head>
            <ContactForm />;
        </Fragment>
    );
}
export default Contact;
