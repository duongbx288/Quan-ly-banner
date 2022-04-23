import "../../styles/section/SectionList.css";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Section from "./Section";
function SectionList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/SapoFnB/sections`)
        .then(res => res.json())
        .then(
            (sections) => {
            setIsLoaded(true);
            setSections(sections);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    const displaySections = sections.map(
    (data) => {
        console.log("data",data);
        return (
            <Section id={data.id}/>
        )
    }
    )
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                {displaySections}
            </div>
        )
    }
}

export default SectionList;