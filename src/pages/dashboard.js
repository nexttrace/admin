/** @jsx jsx */
import Layout from "../components/layout"
import { jsx, Heading, Button, Box, Text, Link, Label, Radio, Input } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Formik } from 'formik'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const data = {
  "num_positive_results": 2,
  "num_reported_contacts": 10,
  "num_completed_forms": 5,
  "list_unused_codes": [
    {
      "name": "name 1",
      "phone_number": "phone_number 1",
      "code": "code 1"
    },
    {
      "name": "name 2",
      "phone_number": "phone_number 2",
      "code": "code 2"
    }
  ],
}

const Survey = () => {

  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], mb: [3, null, 4], fontSize: [6, null, 7] }}>
        Dashboard
      </Heading>
      <Text sx={{ fontSize: [3], fontWeight: "bold" }}>
        Number of positive test results recorded
      </Text>
      <Text sx={{ mb: [3] }}>
        {data.num_positive_results}
      </Text>
      <Text sx={{ fontSize: [3], fontWeight: "bold" }}>
        Number of contacts reported
      </Text>
      <Text sx={{ mb: [3] }}>
        {data.num_reported_contacts}
      </Text>
      <Text sx={{ fontSize: [3], fontWeight: "bold" }}>
        Number of completed surveys
      </Text>
      <Text sx={{ mb: [3] }}>
        {data.num_completed_forms}
      </Text>
      <Text sx={{ fontSize: [3], fontWeight: "bold" }}>
        Number of unused unique codes
      </Text>
      <Text sx={{ mb: [3] }}>
        {data.list_unused_codes ? data.list_unused_codes.length : 0}
      </Text>
      <Text sx={{ fontSize: [3], fontWeight: "bold" }}>
        Unused codes
      </Text>
      {data.list_unused_codes.map((d) =>
        <Box sx={{ mb: [1] }}>
          <Text>{d.name} {d.phone_number} {d.code}</Text>
        </Box>
      )}
    </Layout>
  )
}

export default Survey