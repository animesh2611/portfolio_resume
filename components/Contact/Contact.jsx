import styles from "../../styles/Contact.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si'
import { FaDev } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className={styles.contactContainer} data-aos="fade-up" id="Contact">
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.contactContent}>I am actively looking for opportunities. Feel free to drop a mail in my Inbox.</p>
            <div className={styles.button}><a href="mailto:singh.141@iitj.ac.in">Say Hello!</a></div>
            <div className={styles.socials}>
                <a href="hhttps://github.com/animesh2611" target="_blank" rel="noreferrer"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/animesh-kumar-singh-357b75161/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                <a href="mailto:singh.141@iitj.ac.in" target="_blank" rel="noreferrer"><FiMail /></a>
                <a href="https://leetcode.com/animeshkumar2611/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            </div>
        </div>
    )
}

export default Contact
