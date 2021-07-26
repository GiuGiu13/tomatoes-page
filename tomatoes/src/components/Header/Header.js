import React from 'react';
import classes from './Header.module.scss';
import { NavHashLink as Link } from "react-router-hash-link";


const Header = () => {
    const scrollWithOffset = (el, offset) => {
        window.scroll({
          top: el.offsetTop - offset,
          left: 0,
          behavior: "smooth"
        });
      };

    return (
        <div className={`container-fluid ${classes.Header}`} >
            <div className="row">
                <div className={`col-12 col-md-4 ${classes.Header__logo}`}>
                    <h2>The Tomato</h2>
                </div>
               <div className={`col-12 col-md-8 ${classes.Header__listContainer}`}>

                    <ul className={classes.Header__list}>
                        <li className={classes.Header__listItem}>
                            <Link
                                activeStyle={{ borderTop:'3px solid #53A548'}}
                                to="/#top"
                                smooth={true}
                                scroll={(el) => scrollWithOffset(el, 75)}
                                exact
                                className={classes.Header__listItem}
                                >
                            <h5>Home</h5>
                            </Link>
                        </li>
                        <li className={classes.Header__listItem}>
                            <Link
                                activeStyle={{ borderTop:'3px solid #53A548'}}
                                to="/#nutritionalValues"
                                smooth={true}
                                scroll={(el) => scrollWithOffset(el, 75)}
                                exact
                                className={classes.Header__listItem}
                                >
                            <h5>Nutritional Values</h5>
                            </Link>
                        </li>
                        <li className={classes.Header__listItem}>
                            <Link
                                activeStyle={{ borderTop:'3px solid #53A548'}}
                                to="/#varieties"
                                smooth={true}
                                duration={500}
                                scroll={(el) => scrollWithOffset(el, 75)}
                                exact
                                className={classes.Header__listItem}
                                >
                                <h5>Varieties</h5>
                            </Link>
                        </li>
                        <li className={classes.Header__listItem}>
                            <Link
                                activeStyle={{ borderTop:'3px solid #53A548'}}
                                to="/#facts"
                                // spy={value.toString()}
                                smooth={true}
                                duration={500}
                                scroll={(el) => scrollWithOffset(el, 75)}
                                exact
                                className={classes.Header__listItem}
                                >
                                <h5>Facts</h5>
                            </Link>
                        </li>
                        <li className={classes.Header__listItem}>
                            <Link
                                activeStyle={{ borderTop:'3px solid #53A548'}}
                                to="/#footer"
                                // spy={true}
                                smooth={true}
                                duration={500}
                                scroll={(el) => scrollWithOffset(el, 75)}
                                exact
                                className={classes.Header__listItem}
                                >
                                <h5>Keep in touch</h5>
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Header;
