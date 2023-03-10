import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";
import {Error404} from "./Error404";

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PagePropsType) => {
    const param = useParams()
    // console.log('params: ', Number(param.id))
    const pageId = Number(param.id)
    console.log(pageId)

    // return isNaN(pageId) || props.pages.length < pageId
    //     ? <Error404/>
    //     : (
    //         <div>
    //             <div>{props.pages[pageId].heading}</div>
    //             <div>{props.pages[pageId].about}</div>
    //         </div>

    return (
        <div>
            { pageId <= props.pages.length - 1
                ? <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>
                : <Error404/>
            }
        </div>


        // <div>
        //     <div>
        //         {props.pages[Number(param.id)].heading}
        //     </div>
        //     <div>
        //         {props.pages[Number(param.id)].about}
        //     </div>
        // </div>
    );
};

