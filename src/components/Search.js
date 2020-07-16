import React, { useState } from 'react';
import {navigate} from '@reach/router';

const Search = () => {
    const [ form, setForm ] = useState({
        option: "people",
        id: "",
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        navigate("/" + form.option + "/" + form.id ); 
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="option">Search for: </label>
                <select name="option" value = {form.option} onChange={onChangeHandler}>
                    <option value="people"> People </option>
                    <option  value="planets"> Planets </option>
                </select>

                <label htmlFor="id"> ID: </label>
                <input type="number" name="id" value={form.id} onChange={onChangeHandler}/>

                <button> Search </button>
            </form>
        </div>
    )
}

export default Search
