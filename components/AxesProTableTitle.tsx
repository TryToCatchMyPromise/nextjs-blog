import classes from "./AxesProTableTitle.module.css"
import React from "react";

const AxesProTableTitle = ({
                               title
                           }: {
    title: [{
        titleProperty: string,
        titleValue: string,
    }]

}) => {
// debugger
    return (
        <div className={classes.tableTitleContainer}>
            {
                title.map((s) => {
                    return (
                        <>
                            <div className={classes.titleItem}>{s.titleProperty}</div>
                            <div className={classes.titleItem}>{s.titleValue}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default AxesProTableTitle;