import React from 'react';
import {dataState, PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {
    const params=useParams()
    const pageId = Number(params.id)

    return isNaN(pageId) || dataState.pages.length < pageId
        ? <Error404/>
        : (
        <div>
           <div>{props.pages[pageId].heading}</div>
           <div>{props.pages[pageId].about}</div>
        </div>
    );
};

