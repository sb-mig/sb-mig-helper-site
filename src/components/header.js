import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: aliceblue;
  color: black;
  margin-bottom: 1.45rem;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledH1 = styled.h1`
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledH1>
        <StyledLink to="/">{siteTitle} - preview, is not ready yet</StyledLink>
      </StyledH1>
    </StyledContainer>
  </StyledHeader>
)

export default Header
