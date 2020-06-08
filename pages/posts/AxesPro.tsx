import React from "react";
import classes from "./AxesPro.module.css";
import AxesProTableTitle from "../../components/AxesProTableTitle";
import {GetStaticProps} from "next";

const AxesPro =
    ({
         title,
         collection,
     }: {
        title: [{
           titleProperty: string,
           titleValue: string,
        }],
        collection: [{
            property: string,
            value: string,
        }],
    }) => {

        return (
            <>
                <div className={classes.container}>
                    <AxesProTableTitle title = {title}/>
                    <div className={classes.gg}>{collection.map(
                        (s) => {
                            return (
                                <>
                                    <div>{s.property}</div>
                                    <div>{s.value}</div>
                                </>
                            )
                        }
                    )}
                    </div>
                    <div>
                        {/*    {collection.map(*/}
                        {/*    (s, index, array) => {*/}
                        {/*        // debugger;*/}
                        {/*        if (index !== array.length - 1) {*/}
                        {/*            return (*/}
                        {/*                <>*/}
                        {/*                    <div>{s}</div>*/}
                        {/*                    /!*<div className={classes.line}></div>*!/*/}
                        {/*                </>*/}
                        {/*            )*/}
                        {/*        }*/}
                        {/*        else {*/}
                        {/*            return (*/}
                        {/*                <Link smooth to={s.hash}>*/}
                        {/*                    <div className={classes.circle}>*/}
                        {/*                        <div className={classes.section}>{s.text}</div>*/}
                        {/*                    </div>*/}
                        {/*                </Link>*/}
                        {/*            )*/}

                        {/*        }*/}
                        {/*    }*/}
                        {/*)}*/}
                    </div>
                </div>
            </>
        )
    }

export default AxesPro;

export const getStaticProps: GetStaticProps = async () => {
    const collection = [
        {
            property: "Документ",
            value: "Профиль требований к должности"
        },
        {
            property: "Должность",
            value: "Инженер"
        },
        {
            property: "Функциональное направление",
            value: "Логистика"
        },
        {
            property: "Специализация",
            value: "Обслуживание и ремонт механического, энергетического и электрооборудования"
        }
    ];

    const title = [{
        titleProperty: "Свойство",
        titleValue: "Значение",
    }]


    return {
        props: {
            title,
            collection,
        }
    }
}