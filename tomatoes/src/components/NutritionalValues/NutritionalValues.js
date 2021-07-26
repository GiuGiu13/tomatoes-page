import React from 'react';
import classes from './NutritionalValues.module.scss'

const NutritionalValues = ({contentNutritionalValues}) => {
    console.log(contentNutritionalValues)
    const values = contentNutritionalValues.values;
    return (
        <section id="nutritionalValues" className={`${classes.NutritionalValues}`}>
             <div className={`container-fluid`}>
                <h2 className={`title-section ${classes.NutritionalValues__titleSection}`}>
                    Nutritional Values
                </h2>
                <div className={classes.NutritionalValues__divider}></div>
            </div>
            <div className={`container ${classes.NutritionalValues__contentContainer}`}>
                <h2 className={classes.NutritionalValues__contentTitle}>{contentNutritionalValues.title}</h2>
                <p>{contentNutritionalValues.subtitle}</p>
                <div className={`col-md-8 ${classes.NutritionalValues__tableContainer}`}>
                    <div className="row p-0 m-0">
                        <div className={`col ${classes.NutritionalValues__rowTitle} ${classes.NutritionalValues__rowTitleLeft}`}>
                            <h4 style={{textAlign:'right', paddingRight:'1.5rem'}}>Energy</h4>
                        </div>
                        <div className={`col ${classes.NutritionalValues__rowTitle} ${classes.NutritionalValues__rowTitleRight}`}>
                            <h4 style={{textAlign:'left', paddingLeft:'1.5rem'}}>74kJ (18 kcal)</h4>
                        </div>
                    </div>
                    <div className='row p-0 m-0'>
                        <div className={`col p-0 m-0 ${classes.NutritionalValues__tableColumn}`}>
                            <ul className={classes.NutritionalValues__namesColumn}>
                            {values.map((el, index) => (
                                <li key={index} className={`${classes.NutritionalValues__tableListItem}`}>
                                    <p className={`${classes.NutritionalValues__tableListItemTitle}`}>{el.title}</p>
                                  
                                    {el.subvalues ? 
                                        el.subvalues.map((el, ind) => <p key={ind} className={`${classes.NutritionalValues__subvalues}`}>{el.title}</p>) : ''}
                                    
                                </li>

                            ))}
                            </ul>
                        </div>
                        <div className={`col p-0 m-0 ${classes.NutritionalValues__tableColumn}`}>
                            <ul className={classes.NutritionalValues__valuesColumn}>
                            {values.map((el, index) => (
                                <li key={index} className={`${classes.NutritionalValues__tableListItem}`}>
                                    <p className={`${classes.NutritionalValues__tableListItemTitle}`}>{el.value}</p>
                                    {el.subvalues ? 
                                        el.subvalues.map((el, ind) => <p key={ind} className={`${classes.NutritionalValues__subvalues}`}>{el.value}</p>) : ''}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionalValues
