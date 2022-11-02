import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import variables from 'styles/variables/theme.module.scss'

const spacing = parseInt(variables.spacing || '8')

const pxToInt = (pxString: string) => (pxString ? parseInt(pxString.replace('px', ''), 10) : 0)
const intToSpacing = (int?: number) => (int !== null && int !== undefined ? `${int * spacing}px` : '')
const getSpacing = (x: number, y?: number, z?: number, q?: number) => {
	return `${intToSpacing(x)} ${intToSpacing(y)} ${intToSpacing(z)} ${intToSpacing(q)}`
}

const defaultTheme = createTheme({
	spacing,
	palette: {
		primary: { main: variables.primaryColor },
		secondary: { main: variables.secondaryColor },
		text: { primary: variables.textColor },
	},
	breakpoints: {
		values: {
			xs: pxToInt(variables.xsWidth),
			sm: pxToInt(variables.smWidth),
			md: pxToInt(variables.mdWidth),
			lg: pxToInt(variables.lgWidth),
			xl: pxToInt(variables.xlWidth),
		},
	},
	typography: {
		fontSize: 18,
		fontFamily:
			'Soehne, Helvetica, Arial, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '1.5rem',
					backgroundColor: 'rgb(20, 241, 149)',
					boxShadow: 'none',
					color: '#000',
					border: '1px solid black',
					minWidth: '40px',
					width: 'fit-content',
					whiteSpace: 'nowrap',
					padding: getSpacing(1.25, 2.625),
					textTransform: 'none',
					fontWeight: 'bold',
					'&:hover': {
						backgroundColor: '#fff',
						filter: 'brightness(0.85)',
						boxShadow: '6px 4px rgba(0,0,0,0.9)',
					},
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					'.MuiDialogTitle-root': {
						alignItems: 'center',
						backgroundColor: '#555',
					},
					'.MuiDialogContent-root .MuiList-root, .MuiDialogContent-root .MuiCollapse-root .MuiList-root': {
						'.MuiListItem-root': {
							'&:hover': {
								backgroundColor: 'rgba(255,255,255, 0.05)',
							},
						},
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: variables.primaryColorLight,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: '0.4rem',
				},
			},
		},
	},
})

export default responsiveFontSizes(defaultTheme, { factor: 1.2 })
