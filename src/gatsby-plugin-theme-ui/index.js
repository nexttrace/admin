export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: "#fff",
    primary: "#62B0FA",
    secondary: "#f3d160",
    muted: "#fbaf86",
  },
  text: {
    input: {
      fontFamily: 'monospace',
      fontSize: [1],
      mx: [2],
      pb: [1],
      borderBottomWidth: '2px',
      borderBottomStyle: 'dotted',
      borderBottomColor: 'text',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      position: 'relative',
      bg: 'primary',
      fontWeight: 'bold',
      cursor: 'pointer',
      '&:hover': {
        color: 'background',
        bg: 'primary',
        transform: 'scale(1.05)',
      },
      '&:focus': {
        transform: 'scale(1.05)',
        outline: 'none'
      },
      '&:active': {
        top: '2px',
      }
    }
  },
  links: {
    nav: {
      color: "inherit",
      "&.active": {
        color: "primary",
      },
      "&:hover": {
        color: "primary"
      },
      textDecoration: "none",
      fontSize: [2],
      fontWeight: "bold",
      cursor: "pointer"
    }
  },
  forms: {
    input: {
      fontSize: [1],
      fontFamily: 'monospace',
      padding: [2],
      pl: [0],
      mb: [3],
      borderRadius: '0px',
      maxWidth: '500px',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'text',
      '&:focus': {
        borderColor: 'primary',
        outline: 'none'
      }
    },
    radio: {
      cursor: 'pointer'
    },
    label: {
      cursor: 'pointer'
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "primary",
      "&:active": {
        color: "primary",
      },
      "&:hover": {
        color: "primary",
        borderBottom: "solid",
        borderWidth: 2,
        borderColor: "primary"
      },
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer"
    }
  },
}
