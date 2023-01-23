import React from 'react';

import styled from 'styled-components';

const NotFound = () => {
    return (
        <StyledNotFound>
            <h1>Page not found</h1>
        </StyledNotFound>
    );
}

const StyledNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    flex-wrap: wrap;
    h1{
        color:white;
        font-size: 5rem;
    }


`

export default NotFound;
