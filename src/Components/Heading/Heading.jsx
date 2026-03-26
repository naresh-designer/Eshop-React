import React from 'react'
import styled from 'styled-components'

const Heading = ({headingData}) => {
  return (
    <Main>
        <span>{headingData.subHeading}</span>
        <h1>{headingData.mainHeading}</h1>
    </Main>
  )
}

const Main = styled.section`
    text-align:center;
    text-transform:lowercase;
`

export default Heading