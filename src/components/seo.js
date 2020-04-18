import React from "react"
import { Title, Link, Meta } from "react-head"

const Seo = () => (
  <>
    <Title>NextTrace</Title>
    <Meta name="description" content="COVID-19 survey for digital participatory contact tracing." />
    <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <Link rel="canonical" content="https://survey.nexttrace.org/" />
    <Link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/microscope_1f52c.png"/>
  </>
)

export default Seo