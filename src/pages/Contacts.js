import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils';

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [planet, setPlanet] = useState(undefined);
    const [selectedPlanet, setSelectedPlanet] = useState(undefined);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);




    useEffect(() => {

        fetch(`${BASE_URL}/v1/planets`)
            .then((res) => res.json())
            .then((data) => {
                const planets = data.map((data) => { return data.name });
                setPlanet(planets);
                setIsLoading(false)
            });
    }
        , [])

    const handleDropdownChange = (event) => {
        setSelectedPlanet(event.target.value);

    };

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            "name": event.target[0].value,
            "email": event.target[1].value,
            "planet": event.target[2].value,
            "topic": event.target[3].value,
            "message": event.target[4].value
        };
        localStorage.setItem("message", JSON.stringify(formData));
        setIsFormSubmitted(true);


    }

    return (
        isFormSubmitted ? <div className='another_message ms-3'><div  className='mt-2'>Thank you for your message</div><button onClick={() => setIsFormSubmitted(false)} className="nav-item btn btn-danger btn-sm border-warning border-2 mt-2">Sent another message</button></div> :
            isLoading ? <p> Is Loading, please wait</p> :
                planet && <div className='ms-3'>
                    <h1>Contact Us</h1>
                    <form id='contactForm' className="h6" onSubmit={handleSubmit}>
                        <div className='form-label me-2'>
                            <label htmlFor="name" className="me-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                required
                            />
                        </div>

                        <div  className='form-label me-2'>
                            <label htmlFor="email" className="me-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                required
                            /></div>
                        <div  className='form-label me-2'>
                            <label htmlFor="planet" className="me-2">Planet</label>
                            <select value={selectedPlanet} onChange={handleDropdownChange} name='planet'>
                                {planet.map((planet) => <option value={planet} key={planet}>{planet}</option>)}
                            </select>
                        </div>
                        <div  className='form-label me-2'>
                            <label htmlFor="topic" className="form-label me-2">Topic</label>
                            <input
                                type="text"
                                name="topic"
                                placeholder="Topic" />
                        </div>
                        <div  className='mt-2 d-flex'>
                            <label htmlFor="message" className="form-label me-2">Message</label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Please enter your message here"
                                required
                            />
                        </div>
                        <div  className='me-2'>
                            <button type="submit" className="nav-item btn btn-danger mx-1 btn-sm border-warning border-2">Sent</button>
                        </div>
                    </form>



                </div>
    )
}

export default ContactUs;