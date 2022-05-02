import react, { useState } from "react";
import Header from '../../containers/Header/Header';
import ContactContainer from "./contact-style";
import darthvader from '../../assets/img/darth-vader-white.png';
import background from '../../assets/img/sky.jpg';


function Contact () {
    const [formMessage, setFormMessage] = useState({});

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]: e.target.value
        }
        setFormMessage(updateMessage);
    }

    const sendForm = () => {
        console.log(formMessage)
    }

    return(
        <div style={{
            backgroundImage: `URL(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />
            <ContactContainer>
                <div className="darth-talk">
                    <div className="talk">
                        <p>I'm not your father, but you can ask me anything...</p>
                    </div>
                    <div>
                        <img src={darthvader} alt="" />
                    </div>
                </div>
            <form >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="First name & last name"
                    className="name"
                    onBlur={(e) => handleForm(e)}
                    required
                    /><br />
                    
                <input 
                    type="email"
                    name="email" 
                    placeholder="Email"
                    className="email"
                    onBlur={(e) => handleForm(e)}
                    required
                    /><br />
                <textarea name="message" className="message" placeholder="Write your messege here" cols="30" rows="10" onBlur={(e) => handleForm(e)} required></textarea><br />
                <span onClick={() => sendForm() } >Enviar</span>
            </form>
            </ContactContainer>
        </div>
    );
};

export default Contact;
