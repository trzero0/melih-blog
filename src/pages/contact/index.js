import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(contactConfig.FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        e.target.reset();
      } else {
        setStatus("Failed to send ❌. Try again.");
      }
    } catch (error) {
      setStatus("Failed to send ❌. Try again.");
    }
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.YOUR_FONE && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              {socialprofils.github && (
                <a
                  href={socialprofils.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-3"
                >
                  <FaGithub />
                </a>
              )}
              {socialprofils.linkedin && (
                <a
                  href={socialprofils.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-3"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </Col>

          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </Col>
              </Row>

              <textarea
                className="form-control rounded-0"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>

              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>

            {status && <Alert className="mt-3">{status}</Alert>}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
