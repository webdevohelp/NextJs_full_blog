// @ts-nocheck
import classes from './contact-form.module.css';
function ContactForm() {
    return (
        <section className={classes.contact}>
            <h1>Contact Us</h1>
            <form className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                <div className={classes.action}>
                    <button>Send message</button>
                </div>
            </form>
        </section>
    );
}
export default ContactForm;
