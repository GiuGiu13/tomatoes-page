import React from 'react';
import classes from './Hero.module.scss';

const Hero = () => {
    return (
        <section id="top" className={classes.Hero}>
            <div className={classes.Hero__image}
                style={
                    {
                        backgroundImage: 'url(' + '../../../assets/Hero/Hero-image.jpg' + ')',
                    }
                }>
                    <div className={classes.Hero__overlay}></div>
                        <h1 className={classes.Hero__title}>
                            <span>Explore</span>
                            <span>the world of</span>
                            <span>tomatoes</span>
                        </h1>
            </div> 
          
        </section>
    )
}

export default Hero
