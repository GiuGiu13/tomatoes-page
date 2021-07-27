import React from 'react';
import TinySlider from "tiny-slider-react";
import classes from './Varieties.module.scss'


const Varieties = ({contentVarieties}) => {
    const listOfTomatoes = contentVarieties.listTomatoes;
    const settings = {
        lazyload: true,
        nav: false,
        autoplayButtonOutput:false,
        mouseDrag: true,
        autoplay:true,
        controlsContainer: "#customize-controls",
      };

    return (
        <section id='varieties' className={`${classes.Varieties}`}>
            <div className={`container-fluid`}>
                <h2 className={`title-section ${classes.Varieties__titleSection}`}>
                    {contentVarieties.title}
                </h2>
                <div className={classes.Varieties__divider}></div>
            </div>
            <div className={`container ${classes.Varieties__contentContainer}`}>
                <div className={`col-md-10 ${classes.Varieties__contentTitle}`}  dangerouslySetInnerHTML={{__html:contentVarieties.content}}></div>
                    <div className={classes.Varieties__sliderContainer}>
                        <ul className={`controls ${classes.Varieties__arrowsContainer}`} id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
                            <li className="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
                                <img className={`${classes.Varieties__arrow} ${classes.Varieties__arrowPrev}` } src={`../../../assets/right-arrow.svg`} />
                            </li>
                            <li className="next" data-controls="next" aria-controls="customize" tabindex="-1">
                                <img className={`${classes.Varieties__arrow} ${classes.Varieties__arrowNext}` } src={`../../../assets/right-arrow.svg`} />
                            </li>
                        </ul>
                        <TinySlider settings={settings}>
                            {listOfTomatoes.map((el, index) => (
                            <div key={index} style={{ position: "relative" }}>
                                <div className={'row'}>
                                    <div className={'col-12 col-lg-8'}>
                                        <img
                                            className={classes.Varieties__tomatoesImage}
                                            src={`../../../assets/${el.image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className={`col-12 col-lg-4 ${classes.Varieties__tomatoesName}`}>
                                        <h3>{el.title}</h3>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </TinySlider>
                    </div>
                </div>
        </section>
    )
}

export default Varieties;
