import React from 'react'
import "./movieStyle.css"


function MovieCard({ movie }) {
    return (
        <div className='card'> 
        <div key={movie.id}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=''/>
            <p style={{color:"blue",fontSize:"25px",fontFamily:"cursive"}}>{movie.original_title}</p>
        </div>
        </div>
    )
}

export default MovieCard