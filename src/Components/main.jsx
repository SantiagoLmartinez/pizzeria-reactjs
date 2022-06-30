import React from 'react'
import '../App.css';

import styled from 'styled-components'
function MainComp() {
    return (
        <MainCompStyled>
                    <div className='main-portada' id='portada'>
                    </div>
        </MainCompStyled>
    )
}

export default MainComp

const MainCompStyled = styled.div`
    .main-portada{
        min-height: 100hv;
        background: url('https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg');
    }
`

