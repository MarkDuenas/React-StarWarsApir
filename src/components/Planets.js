import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Planets = (props) => {
    const [ planets, setPlanets ] = useState(null);

    useEffect( () => {
        axios.get('https://swapi.dev/api/planets/' + props.id +"/")
            .then(response => {
                setPlanets(response.data);
            })
            .catch(() => navigate("/error"))
    }, [props.id]);  

    if (planets == null) {
        return "Loading..."
    }

    return (
        <div>
            <h1> {planets.name} </h1>
            <h3>Climate: {planets.climate}</h3>
            <h3>Gravity: {planets.gravity}</h3>
            <h3>Terrain: {planets.terrain}</h3>
            <h3>Population: {planets.population}</h3>
        </div>
    )
}

export default Planets
