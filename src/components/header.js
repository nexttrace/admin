/** @jsx jsx */
import React from "react"
import { Component } from 'react'
import { Flex, Box, Link, Image, MenuButton } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { jsx } from "theme-ui"
import logo from "../logo.svg"

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {expanded: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render () {
    const { expanded } = this.state

    return <Box>
      <Flex
        sx={{
          margin: `0 auto`,
          width: "100%",
          maxWidth: 960,
          paddingTop: "2rem",
          paddingBottom: "1.45rem",
          paddingLeft: "1.0875rem",
          paddingRight: " 1.0875rem",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{zIndex: 1000}}>
          <GatsbyLink to="/"><Image src={logo} sx={{width: 40, verticalAlign: "text-top", marginTop: "-10px", marginRight: "10px"}}></Image></GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav"}} to="/">NextTrace</GatsbyLink>
        </Box>
        <Box sx={{display: ['none', 'inherit', 'inherit']}}>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/submit">Submit</GatsbyLink>
          <GatsbyLink sx={{variant: "links.nav", mr: [3]}} to="/dashboard">Dashboard</GatsbyLink>
        </Box>
      </Flex>
    </Box>
  }
}

export default Header
