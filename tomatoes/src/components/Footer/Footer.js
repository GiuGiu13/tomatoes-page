import React from 'react';
import classes from './Footer.module.scss';
import Newsletter from './Newsletter';


const Footer = ({contentNewsletter}) => {

    return (
        <div id='footer' className={classes.Footer}>
            <div className={classes.Footer__newsletterContainer}>
            <Newsletter contentNewsletter={contentNewsletter} />
            </div>
            <div className={classes.Footer__copyright}>
                <p>Copyright Digital Detox 2021</p>
            </div>
        </div>
    )
}

export default Footer
