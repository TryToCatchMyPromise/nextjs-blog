import React from "react";
import classes from "./AxesPro.module.css";
import AxesProTableTitle from "../../components/AxesProTableTitle";
import {GetStaticProps} from "next";
import AxesProPath from "../../components/AxesProPath";
import AxesProSection from "../../components/AxesProSection";

const AxesPro =
    ({
         title,
         collection,
     }: {
        title: [{
            titleProperty: string,
            titleValue: string,
        }],
        collection: [
            {
                section: [
                    {
                        mainProperty: string,
                        property: string,
                        value: string,
                    }
                ]
            },
        ],
    }) => {

        return (
            <>
                <AxesProPath/>
                <div className={classes.container}>
                    <AxesProTableTitle title={title}/>
                    <div>{collection.map((s) => {
                        return (
                            <AxesProSection section={s.section}/>
                        )
                    })}

                    </div>
                    {/*<AxesProSection section={collection.section}/>*/}

                    {/*<div className={classes.gg}>{collection.section.map(*/}
                    {/*    (s) => {*/}
                    {/*        return (*/}
                    {/*            <>*/}
                    {/*                <div>{s.mainProperty}</div>*/}
                    {/*                <div>{s.property}</div>*/}
                    {/*                <div>{s.value}</div>*/}
                    {/*            </>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*)}*/}
                    {/*</div>*/}


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
            section: [
                {
                    mainProperty: "Общая информация",
                },
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
            ]
        },
        {
            section: [
                {
                    mainProperty: "Образование",
                },
                {
                    property: "Степень",
                    value: "Высшее/Среднее высшее",
                },
                {
                    property: "Специализация",
                    value: "Инженерно-техническая",
                },
            ]
        },
        {
            section: [
                {
                    mainProperty: "Корпоративные компетенции",
                },
                {
                    property: "Сотрудничество",
                    value: "1",
                },
                {
                    property: "Коммуникации и убеждения",
                    value: "2",
                },
                {
                    property: "Достижение результата",
                    value: "3",
                },
                {
                    property: "Системное мышление",
                    value: "3",
                },
                {
                    property: "Культура безопасности",
                    value: "2",
                },
                {
                    property: "Сотрудничество",
                    value: "1",
                },
            ]
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