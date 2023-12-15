import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./ContactUsForm.module.scss";
import * as Yup from "yup";
import { CustomButton } from "../../util/CustomButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux";
import { resetCart } from "../HelicopterDetailsModal/HelicopterDetails.slice";

interface ContactUsFormProps {
  closeModal: () => void;
}

export const ContactUsForm: React.FC<ContactUsFormProps> = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Required"),
    email: Yup.string().email("Enter your email").required("Required"),
    message: Yup.string(),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    closeModal();
    dispatch(resetCart());
    navigate("/success/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.contactUsForm}>
          <div className={styles.formTextField}>
            <h2>Contact Us</h2>
          </div>
          <div className={styles.form}>
            <div className={styles.field}>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={styles.input}
              />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div className={styles.field}>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={styles.input}
              />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div className={styles.field}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className={styles.field}>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="097 48 34 537"
                className={styles.input}
              />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>

            <div className={styles.field}>
              <Field
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                className={styles.input}
              />
              <ErrorMessage name="message" component="div" />
            </div>
          </div>

          <CustomButton
            type="submit"
            className={styles.submitButton}
            text="Send"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default ContactUsForm;
