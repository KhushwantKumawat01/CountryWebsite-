// eslint-disable-next-line no-unused-vars
import React from "react";
function About() {
    const handleFormSubmit =( formData)=>{
        // console.log(formData.entries());
       const formInputData =  Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return <section className={"section-contact"}>
            <h2 className={"container-title"}>
                Contact Us
            </h2>
        <div className={"contact-wrapper container"}>
            <form action={handleFormSubmit} className="contact-form" >
                <input
                    type="text"
                    required={true}
                    placeholder={"Enter Your Name"}
                    autoComplete="false"
                    name="username"/>
                <input
                    type="email"
                    required={true}
                    placeholder={"Enter Your Email Address"}
                    autoComplete="false"
                    name="email"/>
                <textarea className={"form-control"}
                          rows="10"
                          required={true}
                          name="message"
                          placeholder="Enter your message here..."
                          autoComplete="false"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
}

export default About;