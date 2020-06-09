import React from "react";
import classes from "./AxesProSection.module.css"

const AxesProSection = ({
                            section
                        }: {
    section: [
        {
            mainProperty: string,
            property: string,
            value: string,
        }
    ]

}) => {


    return (
        <section className={classes.section}>
            <div className={classes.header}>{
                section.map((s) => {
                    if (s.mainProperty){
                        return (
                            <div className={classes.headerChild}>
                                <div className={classes.mainProperty + " " + classes.left + " " + classes.item}>{s.mainProperty}</div>
                                {/*<div className={classes.lineContainer}>*/}
                                <div>
                                    <div className={classes.button}></div>
                                </div>
                                <div className={classes.deadZone + " " + classes.right + " " + classes.item}></div>
                            </div>
                        )
                    }
                })
            }
            </div>
            <div className={classes.body}>
                {section.map((p) => {
                    if (p.value && p.property){
                        return (
                            <div className={classes.bodyLine}>
                                <div className={classes.left + " " + classes.item}>{p.property}</div>
                                {/*<div className={classes.lineContainer}>*/}
                                {/*    <div className={classes.line}></div>*/}
                                {/*</div>*/}
                                <div className={classes.right + " " + classes.item}>{p.value}
                                <div className={classes.rightOverlay}>
                                    <div className={classes.stick}></div>
                                </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default AxesProSection;