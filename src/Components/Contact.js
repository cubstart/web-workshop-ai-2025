import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <h2 id="contact">Contact</h2>
        <section className="Contact">
            <p>Email: <a href="mailto:mei@hackberkeley.org">mei@hackberkeley.org</a></p>
            <div className="Contact-icons">
                <a href="https://www.linkedin.com/in/amelie-cibulka" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon"/></a>
                <a href="https://github.com/meicib" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="icon"/></a>
            </div>
        </section>
    </>
  );
};

export default Contact;
