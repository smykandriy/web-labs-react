import React from "react";
import styles from "./ContactUsModal.module.scss";
import { ContactUsForm } from "../ContactUsForm";
import { CustomButton } from "../../util/CustomButton";

interface ContactModalProps {
  closeModal: () => void;
}

const ContactUsModal: React.FC<ContactModalProps> = ({ closeModal }) => {
  return (
    <div className={styles.overlay}>
      <CustomButton text="Close" onClick={closeModal} className={styles.closeButton}/>
      <div className={styles.modal}>
        <ContactUsForm closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ContactUsModal;
