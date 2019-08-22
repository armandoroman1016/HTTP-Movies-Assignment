import React, { useEffect, useState } from 'react'
import axios from 'axios'



const UpdateMovieForm = props => {

    const [values, setValues] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setValues(res.data))
            .catch(err => console.log(err.response));
    }, [props.match.params.id])

    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${props.match.params.id}`, values)
          .then(res => {  
            props.history.push('/')
        })
          .catch(err => console.log(err.response));
    };

    const handleChange = event => {
        setValues({
            ...values, [event.target.name] : event.target.value
        });
    }

    return (
        <>
        { values ?
            <form onSubmit = { handleSubmit }>
                <input type = 'text' name = 'title' placeholder = 'Movie Title . . .' value = {values.title} onChange = {handleChange}/>
                <input type='text' name='director' placeholder='Director . . .' value={values.director} onChange = {handleChange}/>
                <input type='text' name='metascore' placeholder='Metascore . . .' value={values.metascore} onChange = {handleChange}/>
                <input type='text' name='stars' placeholder='Stars . . .' value={values.stars} onChange = {handleChange}/>
                <button type='submit'>Update Stars</button>
            </form> 
        : false}
        </>
    )
}

export default UpdateMovieForm