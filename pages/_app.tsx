import type { AppProps } from 'next/app'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { network, endpoint } from 'constants/environment'
import { wallets } from '@open-sauce/solomon'
import ToastProvider from 'providers/ToastProvider'
import theme from 'styles/theme'
import Head from 'next/head'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={wallets[network]}>
					<WalletDialogProvider featuredWallets={6}>
						<ToastProvider>
							<CssBaseline />

							<Head>
								<meta
									name='viewport'
									content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
								/>
								<title>Saga TV</title>
							</Head>

							<Component {...pageProps} />
						</ToastProvider>
					</WalletDialogProvider>
				</WalletProvider>
			</ConnectionProvider>
		</ThemeProvider>
	)
}

export default MyApp
