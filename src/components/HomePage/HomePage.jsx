import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from '../../assets/css/HomePage/HomePage.module.css';

import CompanyLogo from '../../assets/images/companyLogo.avif';
import GooglePlayLogo from '../../assets/images/googleplay.png';
import AppleStoreLogo from '../../assets/images/app-store.png';
import waveSvg from '../../assets/images/wave.svg';
import ProjectImg1 from '../../assets/images/proj1.png';
import ProjectImg2 from '../../assets/images/proj2.png';
import ProjectImg3 from '../../assets/images/proj3.png';
import ProjectImg4 from '../../assets/images/proj4.png';
import ProjectImg5 from '../../assets/images/proj5.png';
import Qt from '../../assets/images/qt.png';
import Cpp from '../../assets/images/cpp.png';
import Apple from '../../assets/images/apple.png';
import Next from '../../assets/images/next.png';
import Flutter from '../../assets/images/flutter.png';
import Embedded from '../../assets/images/embedded.png';
import Php from '../../assets/images/php.png';
import Android from '../../assets/images/android.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import CarouselComponent from '../Common/Carousel';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const [headerTop, setHeaderTop] = useState('0');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100 && currentScrollPos < 400) {
        setHeaderTop('-100px');
      } else if (currentScrollPos >= 400) {
        setHeaderTop('0');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openInNewTab = (url) => {
    return () => window.open(url, '_blank');
  };

  return (
    <>
      <div className={css.homePageContainer}>
        {/* HEADER */}
        <div className={css.headerSection} style={{ top: headerTop }}>
          <div className={css.headerMainContainer}>
            <div className={css.headerLeftSection}>
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className={css.headerCompanyLogo}
              />
              <div className={css.companyNameTitle}>TechCoderHub</div>
            </div>
            {/* <div className={css.headerRightSection}>
                            <button className={css.headerLoginButton} onClick={handleLogin}>Login</button>
                            <button className={css.headerSignupButton} onClick={handleSignup}>Sign Up</button>
                        </div> */}
            <div className={css.headerRightSection}>
              <div className={css.headerListSection}>
                <ul className={css.headerItemList}>
                  <li className={css.headerIndividualListItem}>Home</li>
                  <li className={css.headerIndividualListItem}>Projects</li>
                  <li className={css.headerIndividualListItem}>About</li>
                  <li className={css.headerIndividualListItem}>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* HOMEPAGE */}
        <div className={css.homePageContentSection}>
          {/* HERO SECTION */}
          <div className={css.heroSection}>
            <div className={css.heroTitleLarge}>
              Turn your ideas into products
            </div>
            <div className={css.homePageButtonWrapper}>
              <div className={css.backgroundPulse}></div>
              <button className={css.homePageButton}>Contact Us</button>
            </div>
            {/* <div className={css.submitFormSection}>
                            <div className={css.linkStartContent}>
                                <div className={css.linkStartText}>cppqt.dev/</div>
                                <input type="text" name="userProfileLink" id="" className={css.inputUserProfile} />
                            </div>
                            <div className={css.inputSubmitButton}>
                                <div className={css.inputSubmitButtonText}>Create Profile</div>
                            </div>
                        </div> */}
            <div className={css.smallDetails}>
              Let's simplify, strengthen and transform your business!
            </div>
          </div>

          {/* WHAT WE OFFER SECTION */}
          <div className={css.serviceSection}>
            <div className={css.servicesTitle}>Our Services</div>
            <div className={css.serviceCardGrid}>
              <div className={css.serviceCardContainer}>
                <div className={css.serviceCardTitle}>
                  <div className={css.serviceCardTitleText}>
                    Design
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={`${css.serviceCardTitleIcon} ${css.red}`}
                    />
                  </div>
                </div>

                <div className={css.serviceSmallDescContainer}>
                  <div className={css.serviceSmallDetails}>
                    We can translate complex ideas into simple and elegant
                    designs.
                  </div>
                </div>

                <ul className={css.serviceCardOfferingList}>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.red}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorRed}`}
                    >
                      {' '}
                      Website & App Design
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.red}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorRed}`}
                    >
                      {' '}
                      Graphic & Logo Design
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.red}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorRed}`}
                    >
                      {' '}
                      UI/UX & Brand Strategy
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.red}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorRed}`}
                    >
                      {' '}
                      Software Design
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.red}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorRed}`}
                    >
                      {' '}
                      Figma Design
                    </div>
                  </li>
                </ul>

                <div className={css.servicesButtonContainer}>
                  <div className={`${css.servicesButton} ${css.buttonRed}`}>
                    Learn More
                  </div>
                </div>
              </div>

              <div className={css.serviceCardContainer}>
                <div className={css.serviceCardTitle}>
                  <div className={css.serviceCardTitleText}>
                    Development
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={`${css.serviceCardTitleIcon} ${css.green}`}
                    />
                  </div>
                </div>

                <div className={css.serviceSmallDescContainer}>
                  <div className={css.serviceSmallDetails}>
                    We leverage emerging technology to develop and deliver
                    custom digital solutions.
                  </div>
                </div>

                <ul className={css.serviceCardOfferingList}>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.green}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorGreen}`}
                    >
                      {' '}
                      Mobile Apps Development{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.green}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorGreen}`}
                    >
                      {' '}
                      CRM & ERP Software{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.green}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorGreen}`}
                    >
                      {' '}
                      Process Automation Systems{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.green}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorGreen}`}
                    >
                      {' '}
                      eCommerce Application{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.green}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorGreen}`}
                    >
                      {' '}
                      MCU Applications{' '}
                    </div>
                  </li>
                </ul>

                <div className={css.servicesButtonContainer}>
                  <div className={`${css.servicesButton} ${css.buttonGreen}`}>
                    Learn More
                  </div>
                </div>
              </div>

              <div className={css.serviceCardContainer}>
                <div className={css.serviceCardTitle}>
                  <div className={css.serviceCardTitleText}>
                    Business
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={`${css.serviceCardTitleIcon} ${css.blue}`}
                    />
                  </div>
                </div>

                <div className={css.serviceSmallDescContainer}>
                  <div className={css.serviceSmallDetails}>
                    We promote digital acceleration by implementing
                    result-oriented strategies.
                  </div>
                </div>

                <ul className={css.serviceCardOfferingList}>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.blue}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorBlue}`}
                    >
                      {' '}
                      Email Marketing{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.blue}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorBlue}`}
                    >
                      {' '}
                      Search Engine Optimization{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.blue}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorBlue}`}
                    >
                      {' '}
                      Social Media Campaigns{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.blue}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorBlue}`}
                    >
                      {' '}
                      Content Marketing{' '}
                    </div>
                  </li>
                  <li className={css.serviceCardOfferingItem}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`${css.serviceCardOfferingItemCheck} ${css.blue}`}
                    />
                    <div
                      className={`${css.serviceCardOfferingItemDesc} ${css.descColorBlue}`}
                    >
                      {' '}
                      Social Media Marketing{' '}
                    </div>
                  </li>
                </ul>

                <div className={css.servicesButtonContainer}>
                  <div className={`${css.servicesButton} ${css.buttonBlue}`}>
                    Learn More
                  </div>
                </div>
              </div>

              <div className={css.serviceCardContainer}>
                <div className={css.serviceCardTitle}>
                  <div className={css.serviceCardTitleText}>
                    Features
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={`${css.serviceCardTitleIcon} ${css.golden}`}
                    />
                  </div>
                </div>

                <CarouselComponent />

                <div className={css.servicesButtonContainer}>
                  <div className={`${css.servicesButton} ${css.buttonGolden}`}>
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR PROJECTS SECTION */}
          <div className={css.projectSection}>
            <div className={css.servicesTitle}>Recent Projects</div>

            <div className={css.projectItemsContainer}>
              <div
                className={css.projectItemContainer}
                onClick={openInNewTab(
                  'https://github.com/cppqtdev/Tesla-Future/tree/main',
                )}
              >
                <img
                  className={css.projectImage}
                  src={ProjectImg1}
                  alt="ProjectImg1"
                ></img>
                <div className={css.readMoreProjButton}>Read More</div>
              </div>
              <div
                className={css.projectItemContainer}
                onClick={openInNewTab(
                  'https://github.com/cppqtdev/Eagle-Scooty-Dashboard',
                )}
              >
                <img
                  className={css.projectImage}
                  src={ProjectImg2}
                  alt="ProjectImg2"
                ></img>
                <div className={css.readMoreProjButton}>Read More</div>
              </div>
              <div
                className={css.projectItemContainer}
                onClick={openInNewTab(
                  'https://github.com/cppqtdev/QT-Home-Automation-Glass-UI',
                )}
              >
                <img
                  className={css.projectImage}
                  src={ProjectImg3}
                  alt="ProjectImg3"
                ></img>
                <div className={css.readMoreProjButton}>Read More</div>
              </div>
              <div
                className={css.projectItemContainer}
                onClick={openInNewTab(
                  'https://github.com/cppqtdev/QT-Modern-Home-Automation',
                )}
              >
                <img
                  className={css.projectImage}
                  src={ProjectImg4}
                  alt="ProjectImg4"
                ></img>
                <div className={css.readMoreProjButton}>Read More</div>
              </div>
              <div
                className={css.projectItemContainer}
                onClick={openInNewTab('https://github.com/cppqtdev/Tesla')}
              >
                <img
                  className={css.projectImage}
                  src={ProjectImg5}
                  alt="ProjectImg5"
                ></img>
                <div className={css.readMoreProjButton}>Read More</div>
              </div>
            </div>

            <div className={css.viewMoreProjButton}>View More Work</div>
          </div>

          {/* TECHNOLOGIES USED SECTION */}
          <div className={css.technologiesSection}>
            <div className={css.servicesTitle}>Our Technologies</div>
            <div className={css.technologiesIconGrid}>
              <img src={Qt} alt="Qt" className={css.technologyIcon} />
              <img src={Flutter} alt="Flutter" className={css.technologyIcon} />
              <img src={Next} alt="Next" className={css.technologyIcon} />
              <img src={Cpp} alt="Cpp" className={css.technologyIcon} />
              <img src={Apple} alt="Apple" className={css.technologyIcon} />
              <img
                src={Embedded}
                alt="Embedded"
                className={css.technologyIcon}
              />
              <img src={Php} alt="Php" className={css.technologyIcon} />
              <img src={Android} alt="Android" className={css.technologyIcon} />
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}

        <div className={css.contactSection}>
          <div className={css.servicesTitle}>Contact Us</div>

          <div className={css.contactContainer}>
            <div className={css.formContainer}>
              <form
                name="contact"
                className={`${css.contactInform} ${css.form}`}
              >
                <div className={css.oneSection}>
                  <div className={css.formControl}>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname" // Added id
                      className={css.formInput}
                      placeholder="First Name" // Updated placeholder
                      required
                    />
                    <label htmlFor="firstname" className={css.formLabel}>
                      First Name
                    </label>
                  </div>
                  <div className={css.formControl}>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname" // Added id
                      className={css.formInput}
                      placeholder="Last Name" // Updated placeholder
                      required
                    />
                    <label htmlFor="lastname" className={css.formLabel}>
                      Last Name
                    </label>
                  </div>
                </div>

                <div className={css.oneSection}>
                  <div className={css.formControl}>
                    <input
                      type="email"
                      name="email"
                      id="email" // Added id
                      className={css.formInput}
                      placeholder="Email" // Updated placeholder
                      required
                    />
                    <label htmlFor="email" className={css.formLabel}>
                      Email
                    </label>
                  </div>
                  <div className={css.formControl}>
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber" // Added id
                      className={css.formInput}
                      placeholder="Phone Number" // Updated placeholder
                      required
                    />
                    <label htmlFor="phoneNumber" className={css.formLabel}>
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className={css.formControl}>
                  <textarea
                    name="message"
                    id="message" // Added id
                    className={css.formInput}
                    placeholder="Message" // Updated placeholder
                    required
                  />
                  <label htmlFor="message" className={css.formLabel}>
                    Message
                  </label>
                </div>
                <button type="submit" className={css.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className={css.footerSection}>
          <img src={waveSvg} alt="Test" className={css.footerHorizontalBar} />
          <div className={css.footerIconsContainer}>
            <img
              src={GooglePlayLogo}
              alt="GooglePlayLogo"
              className={css.footerStoreIcon}
            />
            <img
              src={AppleStoreLogo}
              alt="AppleStoreLogo"
              className={css.footerStoreIcon}
            />
          </div>
          <ul className={css.footerListSection}>
            <li className={css.footerListItem}>Features</li>
            <li className={css.footerListItem}>Help Center</li>
            <li className={css.footerListItem}>Terms of Use</li>
            <li className={css.footerListItem}>Privacy Policy</li>
            <li className={css.footerListItem}>FAQ</li>
          </ul>
          <div className={css.footerSocialContainer}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={css.footerFontIcon}
            />
            <FontAwesomeIcon icon={faTwitter} className={css.footerFontIcon} />
            <FontAwesomeIcon icon={faYoutube} className={css.footerFontIcon} />
            <FontAwesomeIcon icon={faLinkedin} className={css.footerFontIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
