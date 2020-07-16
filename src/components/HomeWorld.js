import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HomeWorld = (props) => {
    const [homeworld, setHomeworld] = useState({});

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setHomeworld(response.data);
            })
            .catch(console.log)
    }, [props.url]);
    return (
        <div>
            <h3>Home World: {homeworld.name} </h3>
        </div>
    )
}

export default HomeWorld
