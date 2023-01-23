import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/Capture"><img src={logo} alt="" /></Link></h1>
            <ul>
                <li><Link to="/Capture">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                {/* <li><Link to="/contact">Contact Us</Link></li> */}
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    min-height: 10vh;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #000000;
    h1{ 
        img{
            width: 50px;
        }
    }
    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            padding-left: 10rem;
            position: relative;
            a{
                font-weight: 500;
            }
        }
       
    }
    @media (max-width:900px) {
            flex-direction: column;
            padding: 2rem 0rem;
            ul{
                padding: 2rem;
                justify-content: space-around;
                width: 100%;
                li{
                    padding: 0;
                }
            }
        }
    


`

export default Nav;
