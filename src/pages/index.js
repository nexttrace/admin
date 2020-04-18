/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { jsx, Heading, Box, Text, Grid, Link, Button } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { useState } from "react"


const Index = () => {

  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], mb: [3, null, 4], fontSize: [6, null, 7] }}>
        NextTrace Admin
      </Heading>
      <Text>
        This is a site for adminstering a NextTrace deployment.
      </Text>
    </Layout>
  )
}

export default Index
