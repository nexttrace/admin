/** @jsx jsx */
import { Box } from "theme-ui"
import { jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box
      sx={{
        m: `0 auto`,
        p: `1.45rem 1.0875rem`,
        maxWidth: 960,
        display: ['none', 'inherit', 'inherit']
      }}
    >
    © NextTrace 2020
    </Box>
  )
}

export default Footer
