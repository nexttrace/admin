import Layout from "../components/layout"
import { Heading, Text, Button, Box, Label, Input } from "theme-ui"
import { useFormik } from "formik"
import React from "react"

const Submit = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <Heading as="h1" sx={{ my: [4, null, 5], mb: [3, null, 4], fontSize: [6, null, 7] }}>
        Submit
      </Heading>
      <Text sx={{ mb: [3] }}>
        Please fill out the following information about a positive test result.
      </Text>
      <Box
        as='form'
        onSubmit={formik.handleSubmit}>
        <Label htmlFor='name'>Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          mb={3}
        />
        <Label htmlFor='number'>Phone number</Label>
        <Input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
          mb={3}
        />
        <Button
          type='submit'
        >
          Submit
        </Button>
    </Box>
    </Layout>
    )
}

export default Submit