import { useState } from "react";

import { images } from "../../constants";
import { AiFillLock } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailJSFormRef = useRef();

  const emailRegex =
    /^(?=\S)(?=[a-zA-Z])[a-zA-Z0-9](?:(?!.*?[._]{2})[a-zA-Z0-9._]*[a-zA-Z0-9](?<![._]))?@[a-zA-Z][a-zA-Z0-9]{1,}(?:\.[a-zA-Z][a-zA-Z0-9]{1,})+$/;

  const messageRegex = /^(?=.*[a-zA-Z])\S(?:.*\S)?(?:\n\S(?:.*\S)?)?$/;

  const contactValidationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(
        /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/,
        "Only letters and whitespaces allowed."
      )
      .min(2, "Name must be at least 2 characters.")
      .max(30, "Name must be at most 30 characters.")
      .required("You must enter your name"),
    email: Yup.string()
      .trim()
      .matches(emailRegex, "Invalid email pattern.")
      .required("You must enter your email"),
    message: Yup.string()
      .matches(messageRegex, "Invalid message pattern.")
      .min(10, "Message must be at least 10 characters.")
      .max(200, "Message must be at most 200 characters.")
      .required("You must enter your message"),
  });

  const sendEmail = (e) => {
    const REACT_APP_EMAILJS_SERVICE_ID =
      process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const REACT_APP_EMAILJS_TEMPLATE_ID =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const REACT_APP_EMAILJS_PUBLIC_KEY =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        emailJSFormRef.current,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (values) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: values.username,
      email: values.email.trim(),
      message: values.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head--text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card pointer-cursor">
          <img src={images.email2} alt="email" />
          <a href="mailto:ehkarabas@gmail.com" className="p--text">
            ehkarabas@gmail.com
          </a>
        </div>
        <div className="app__footer-card pointer-cursor">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+905321315454" className="p--text">
            +90 (532) 131-5454
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <Formik
          initialValues={{
            username: "",
            email: "",
            message: "",
          }}
          validationSchema={contactValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, handleChange, handleBlur, values }) => (
            <Form
              className="app__footer-form app__flex"
              ref={emailJSFormRef}
              onSubmit={async (e) => {
                e.preventDefault();
                await handleSubmit(values);
                await sendEmail(e);
              }}
            >
              <div className="app__flex">
                <Field
                  as={TextField}
                  label="Your Name"
                  name="username"
                  type="text"
                  variant="outlined"
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="pointer-cursor"
                  required
                />
              </div>
              <div className="app__flex">
                <Field
                  as={TextField}
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="pointer-cursor"
                  required
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  label="Your Message"
                  name="message"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={2}
                  value={values.message}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="pointer-cursor"
                  required
                />
              </div>
              <button
                type="submit"
                className="p--text pointer-cursor"
                disabled={
                  Object.values(values).every((value) => value === "") ||
                  !isValid ||
                  loading
                }
              >
                {Object.values(values).every((value) => value === "") ||
                !isValid ? (
                  <>
                    <AiFillLock />
                    <span style={{ marginLeft: "0.5rem" }}>Validating...</span>
                  </>
                ) : !loading ? (
                  "Send Message"
                ) : (
                  <>
                    <img src={images.blockSpinner} alt="loading-spinner" />
                    <span> Sending...</span>
                  </>
                )}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <h3 className="head--text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

// export default Footer;
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  // Footer,
  "contact",
  "app__evensbg"
);
