import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";

import { MovieData } from '../MovieData';



// Animations ===
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

const WorkDetail = () => {
    const navigate = useNavigate();

    //Getting current page url
    const url = useLocation().pathname;

    //Getting movie states
    const [movies, SetMovies] = useState(MovieData);

    //Getting solo movie 
    const [movie, setMovie] = useState(null);

    //Loading on movie component mount
    useEffect(() => {
        const currentMovie = movies.filter(m => m.url === url);

        //if no movie found
        if (currentMovie.length === 0) {
            setMovie(null);
        }

        // Since movie is array and not object
        setMovie(currentMovie[0]);
    }, [movies, url])

    return (
        <>
            {movie && (<StyledDetails variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit">
                <StyledHeadline>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} />
                </StyledHeadline>
                <StyledAwards>
                    {movie.awards.map(award => <Award award={award} key={award.title} />)}
                </StyledAwards>

                <StyledImage>
                    <img src={movie.image2} />
                </StyledImage>
            </StyledDetails>




            )}

            {!movie && (
                navigate("/work")
            )}
        </>
    );
}


// Award Component
const Award = (props) => {
    return (
        <StyledAward>
            <h3>{props.award.title}</h3>
            <div className="line"></div>
            <p>{props.award.description}</p>
        </StyledAward>
    )
}

const StyledDetails = styled(motion.div)`
    color: white;

`

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`

const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    } 
    p{
        padding: 2rem 0rem;
    }
`

const StyledImage = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

export default WorkDetail;
