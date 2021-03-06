import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Rnd } from "react-rnd";

function Section(props) {
    let { position_web } = useParams();
    let { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [section, setSection] = useState([]);
    id = props.id;
    console.log("id", id)

    useEffect(() => {
        fetch(`http://localhost:8080/api/sapofnb/sections/${id}`)
            .then(res => res.json())
            .then(
                (section) => {
                    setIsLoaded(true);
                    setSection(section);
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


    const mystyle = {
        position: 'absolute',
        left: section.position_x,
        top: section.position_y,
        width: section.width,
        height: section.height,
        display: section.display,

    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log("section:", section)
        return (
            <div>
                {/* <Rnd
            default={{
                x: section.position_x,
                y: section.position_y,
                width: section.width,
                height: section.height,
              }}
              minWidth={20}
              minHeight={20}
              bounds="window"
            > */}
            <Link to={'/banner/delete/' + section.id}>
                <button className="section" style={mystyle}>   
                        <h1>Section: {section.id}</h1>
                </button>
            </Link>
                {/* </Rnd> */}
            </div>
        )

    }
}

export default Section;