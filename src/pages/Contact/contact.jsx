import react, { useState } from "react";
import Header from '../../containers/Header/Header';
import ContactContainer from "./contact-style";
import background from '../../assets/img/bgsw.jpg';
import TitleH1 from "../../components/Text/TitleH1/TitleH1";
import Banner from "../../containers/Banner/Banner";


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
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: '2000px',
            width: '100%',
            margin:'auto'

        }}>
            <Header />
            <Banner>
                <TitleH1 
                    text="Contact"
                />
            </Banner>
            <ContactContainer>
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
