import React from "react"
import styled from "styled-components"
import {
  faPaperPlane,
  faListAlt,
  faEnvelope,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "./Input"

function Contact({ eleRef, heading = "h2" }) {
  return (
    <StyledContainer ref={eleRef}>
      <div className="form-container">
        {heading === "h1" ? (
          <h1>
            <span>Contact</span> Me.
          </h1>
        ) : (
          <h2>
            <span>Contact</span> Me.
          </h2>
        )}
        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="form-group">
            <Input name="email" type="email" label="Email" />
            <Input name="subject" type="text" label="Subject" />
          </div>
          <div className="form-group">
            <Input name="message" textarea={true} label="Message" />
          </div>
          <button type="submit">
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
      <div className="links">
        <a
          href="https://github.com/frederickbogdanoff"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/frederick-bogdanoff/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="/">
          Resume <FontAwesomeIcon icon={faListAlt} />
        </a>
        <a href="mailto:fredericks.webdesigns@gmail.com">
          Email <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="tel:0424933007">
          Phone <FontAwesomeIcon icon={faPhoneSquare} />
        </a>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  font-family: "montserrat";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  h2 {
    margin: 1em 0;
  }
  h1 {
    font-size: 3em;
    margin: 1em 0;
  }
  .form-container {
    width: 100%;
    margin: 0 auto;
  }
  .links {
    width: 80%;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin-top: 25px;
      display: block;
      text-decoration: none;
      font-weight: 600;
      color: rgb(103, 103, 103);
      transition: color 0.2s ease;
      &:hover {
        color: ${({ theme }) => theme.hover};
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      pointer-events: none;
      display: block;
      font-weight: 600;
      margin: 10px 0.5em;
      color: ${({ theme }) => theme.label};
    }
    textarea,
    input {
      outline: none;
      padding: 0.5em;
      border: none;
      border-radius: 5px;
      width: 100%;
      background: ${({ theme }) => theme.accentColor};
      color: white;
    }
    textarea {
      height: 250px;
    }
    button {
      cursor: pointer;
      margin: 50px 0;
      border-radius: 5px;
      border: none;
      height: 50px;
      transition: background 0.8s ease;
      background: rgb(252, 0, 87);
      background: linear-gradient(
        90deg,
        rgba(252, 0, 87, 1) 0%,
        rgba(199, 16, 206, 1) 50%,
        rgba(252, 0, 87, 1) 100%
      );
      background-size: 200% auto;
      background-position: 0%;
      color: white;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        background-position: right center;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    .form-container {
      width: 600px;
    }
    .links {
      align-items: flex-end;
      width: 500px;
    }
  }
`

export default Contact
