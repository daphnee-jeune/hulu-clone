import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard/VideoCard'
import axios from '../axios'
import FlipMove from 'react-flip-move'

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request
        }   

        fetchData()
    }, [selectedOption])

    const videoCards = movies.map(movie => (
            <VideoCard 
            key={movie.id}
            movie={movie}
        />
    ))

    return (
        <div className='results'>
            <FlipMove>
                {videoCards}
            </FlipMove>
        </div>
    )
}

export default Results
