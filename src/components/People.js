import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import HomeWorld from './HomeWorld';

const People = (props) => {
    const [ people, setPeople ] = useState(null);

    useEffect( () => {
        axios.get('https://swapi.dev/api/people/' + props.id +"/")
            .then(response => {
                setPeople(response.data);
            })
            .catch(() => navigate("/error"))
    }, [props.id]);  

    if (people == null) {
        return "Loading..."
    }


    return (
        <div>
            <h1> {people.name} </h1>
            <h3>Height: {people.height}</h3>
            <h3>Mass: {people.mass}</h3>
            <h3>Hair Color: {people.hair_color}</h3>
            <h3>Complexion: {people.skin_color}</h3>
            <HomeWorld url={people.homeworld} />
            
        </div>
    )
}

export default People
