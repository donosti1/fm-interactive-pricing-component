import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      400: "hsl(174, 77%, 80%)",
      500: "hsl(174, 86%, 45%)",
      600: "hsl(14, 92%, 95%)",
      700: "hsl(15, 100%, 70%)",
      800: "hsl(226, 100%, 87%)",
    },
    secondary: {
      ...theme.colors.messenger,
      400:"hsl(230, 100%, 99%)",
      500:"hsl(224, 65%, 95%)",
      700:"hsl(225, 20%, 60%)",
      800:"hsl(227, 35%, 25%)",
    },
    toggle:{
      500:"hsl(223, 50%, 87%)",
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xs: "540px",
      xl: "1200px",
    },
  },
  fonts: {
    body: "Manrope",
    heading: "Manrope",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({colorScheme = "secondary"}) => ({
          backgroundColor: `${colorScheme}.800`,
          borderRadius: "3xl",
          color: "primary.800",
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.800`,
            color: "white",
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
});
