import React from "react-dom"
import Section from "../components/section/Section";
import SectionList from "../components/section/SectionList";

export default function SapoWeb(props) {

    const handleClick = () => {
        props.history.push('/banner/delete');
    }

    return (
        <div>
            <button onClick={() => handleClick()}>  tạo khu vực banner </button>
            <SectionList />
        </div>
    )
}