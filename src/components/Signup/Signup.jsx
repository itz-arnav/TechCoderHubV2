import React from 'react'
import css from "../../assets/css/Signup/Signup.module.css";
import CompanyLogo from "../../assets/images/companyLogo.avif"
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  }
  return (
    <div className={css.signupContainer}>
      <div className={css.signupHeader}>
        <img src={CompanyLogo} alt="Company Logo" className={css.headerCompanyLogo} onClick={handleHomeClick} />
        <div className={css.headerLoginSection}>
          <span className={css.greyedSmall}>Already have an account?</span>
          <div className={css.loginButton}>Login</div>
        </div>
      </div>
      <div className={css.signupBody}>
        <div className={css.signupWrapper}>
          <div className={css.signupWrapperTitle}>
            Sign Up
          </div>
          <form action="" className={css.signupForm}>
            <div className={css.signupInputfieldDiv}>
              <input type="email" className={css.signupInputField} name="email" placeholder='Email' />
            </div>

            <div className={css.signupInputfieldDiv}>
              <div className={css.inputSiteLinkText}>shopi.fy/</div>
              <input type="text" className={css.signupInputField} name="username" placeholder='username'/>
            </div>

            <div className={css.signupInputfieldDiv}>
              <input type="password" className={css.signupInputField} name="password" placeholder='Password' />
            </div>

            <button className={css.submitButton}>Sign up with email</button>
          </form>
          <div className={css.signUpOrText}>OR</div>
        </div>
      </div>

    </div>
  )
}

export default Signup