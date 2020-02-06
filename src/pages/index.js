import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkbox from "../components/Checkbox"

const divStyle = { marginBottom: "64px" }
const inputStyle = { marginLeft: "24px" }
const containerStyle = {
  padding: "20px",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
}
const itemStyle = {
  width: "25%",
  padding: "12px",
  border: "1px solid gray",
}

const listOfAvailableComponents = [
  {
    id: 0,
    name: "card",
  },
  {
    id: 1,
    name: "text-block",
  },
  {
    id: 2,
    name: "fullbleed",
  },
  {
    id: 3,
    name: "video-card",
  },
  {
    id: 4,
    name: "gallery",
  },
]

const StyledSpan = styled.span`
  margin-left: 8px;
`

const StyledLabel = styled.label`
  padding: 18px;
  display: block;

  :hover {
    background-color: antiquewhite;
  }
`

const StyledItem = styled.div`
  background-color: aliceblue;

  margin: 4px;
`

const IndexPage = () => {
  const [commandToSbMig, setCommandToSbMig] = useState(
    "npx sb-mig --generate awesome-project"
  )
  const [componentsList, setComponentsList] = useState({})
  const [boilerplateUrl, setBoilerplateUrl] = useState(
    "https://github.com/marckraw/gatsby-storyblok-boilerplate"
  )
  const [sbComponentRepo, setSbComponentRepo] = useState(
    "https://github.com/marckraw/gatsby-storyblok-component-repo"
  )

  const generateCommand = () => {
    const selectedComponents =
      Object.entries(componentsList).length > 0 &&
      Object.entries(componentsList).filter(component => component[1])

    const stringifiedSelectedComponent =
      selectedComponents.length > 0
        ? selectedComponents.reduce((prev, next) => `${prev}${next[0]} `, "")
        : ""

    const command = `npx sb-mig --generate --boilerplate ${boilerplateUrl} --componentRepo ${sbComponentRepo} --add ${stringifiedSelectedComponent}`
    setCommandToSbMig(command)
  }

  const handleCheckboxChange = event => {
    setComponentsList({
      ...componentsList,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Index page</h1>
      <div style={divStyle}>
        <label htmlFor="boilerplate">Enter your boilerplate url</label>
        <input
          style={inputStyle}
          onChange={e => setBoilerplateUrl(e.target.value)}
          type="text"
          id="boilerplate"
          name="boilerplate"
        />
        <h6>
          {" "}
          (default: https://github.com/marckraw/gatsby-storyblok-boilerplate)
        </h6>
      </div>
      <div style={divStyle}>
        <label htmlFor="storyblok-component-repository">
          Enter your storyblok component repository url
        </label>
        <input
          style={inputStyle}
          onChange={e => setSbComponentRepo(e.target.value)}
          type="text"
          id="storyblok-component-repository"
          name="storyblok-component-repository"
        />
        <h6>
          (default: https://github.com/marckraw/gatsby-storyblok-component-repo)
        </h6>
      </div>
      <h2>Choose your component</h2>
      <div style={containerStyle}>
        {listOfAvailableComponents.map(component => {
          return (
            <StyledItem key={component.id}>
              <StyledLabel>
                <Checkbox
                  fieldName={component.name}
                  checked={componentsList[component.name]}
                  onChange={handleCheckboxChange}
                />
                <StyledSpan>{component.name}</StyledSpan>
              </StyledLabel>
            </StyledItem>
          )
        })}
      </div>
      <div>
        <button onClick={generateCommand}>Generate command</button>
      </div>
      <div>
        <h3>Copy that command to your terminal</h3>
        <pre>{commandToSbMig}</pre>
      </div>
    </Layout>
  )
}

export default IndexPage
