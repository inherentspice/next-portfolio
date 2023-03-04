import React, { useCallback } from "react";
import { useForm } from 'react-hook-form';
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout";
import styles from "../../styles/contact.module.css";
import utilStyles from "../../styles/utils.module.css";
import { FaUniversity, FaSearchLocation, FaLinkedin, FaGithub} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset, } = useForm();

  const resetForm = useCallback(() => {
    const result = {name: "", email: "", message: ""}
    reset(result);
  }, [reset]);

  const sendEmail = (data, e) => {
    e.preventDefault()
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID,

    )
      .then(resetForm())
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <Layout>
      <div className={styles.introContact}>
        <h1>Contact Me</h1>
        <p>
          I&apos;m interested in junior front-end developer jobs. However, if you have other requests or questions, don&apos;t hesitate to reach out.
          Send me an e-mail, fill in the form below, or message me on LinkedIn and I&apos;ll get back to you.
        </p>
      </div>
      <div className={styles.contactItemsCont}>
        <div className={styles.contactItem}>
          <IconContext.Provider
            value={{ className: styles.reactIcons, size: "15px" }}
          >
            <FaSearchLocation/>
          </IconContext.Provider>
          <p>Location: London, United Kingdom</p>
        </div>
        <div className={styles.contactItem}>
          <IconContext.Provider
            value={{ className: styles.reactIcons, size: "15px" }}
          >
            <AiOutlineMail/>
          </IconContext.Provider>
          <p>Email: stephenlehanesmith@gmail.com</p>
        </div>
        <div className={styles.contactItem}>
          <IconContext.Provider
            value={{ className: styles.reactIcons, size: "15px" }}
          >
            <FaUniversity/>
          </IconContext.Provider>
          <p>Education: Queensland University of Technology</p>
        </div>
        <div className={`${styles.contactItem} ${styles.extLinks}`}>
          <Link
            href="https://github.com/inherentspice"
            target="_blank"
            aria-label="Link to github profile"
          >
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "50px"}}
            >
              <FaGithub/>
            </IconContext.Provider>
          </Link>
          <Link
            href="https://www.linkedin.com/in/stephen-lehane-smith/"
            target="_blank"
            aria-label="Link to linkedin profile"
          >
            <IconContext.Provider
              value={{ className: styles.reactIcons, size: "50px"}}
            >
              <FaLinkedin/>
            </IconContext.Provider>
          </Link>
        </div>
      </div>
      <form id='contact-form' onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.nameEmailCont}>
          <div className="name-cont">
            <input placeholder='Name' {...register('name', {
              required: {
                value: true,
                message: "Please add your name."
              }
             })}/>
            {errors.name && <p className={utilStyles.errorMessage}>{errors.name.message}</p>}
          </div>
          <div className="email-cont">
            <input placeholder='Email' {...register('email', {
              required: {
                value: true,
                message: "You need to specify an email address so we can contact you back."
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Make sure your email is in the right format!"
              }
             })} />
            {errors.email && <p className={utilStyles.errorMessage}>{errors.email.message}</p>}
          </div>
        </div>
        <textarea placeholder='Message' {...register('message', {
           maxLength: {
            value: 300,
            message: "300 characters should be more than enough!"
          }
          })}/>

          {errors.message && <p className={utilStyles.errorMessage}>{errors.message.message}</p>}
        <input className={styles.formSubmit} type='submit' value='Send' />
      </form>
    </Layout>
  );
};
