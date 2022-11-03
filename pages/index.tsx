import type { NextPage } from 'next'
import { useWallet } from '@solana/wallet-adapter-react'
import { Box, Typography } from '@mui/material'
import Main from 'components/layout/Main'
import TV from 'components/TV'
import dynamic from 'next/dynamic'
import useTokenGating from 'hooks/useTokenGating'

const WalletMultiButtonDynamic = dynamic(
	async () => (await import('@solana/wallet-adapter-material-ui')).WalletMultiButton,
	{ ssr: false }
)

const Home: NextPage = () => {
	const { connected } = useWallet()
	const { isHolder, isChecking } = useTokenGating()

	return (
		<Main className='main'>
			{!connected && (
				<Box
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						textAlign: 'center',
					}}
				>
					<Typography variant='h6' pb={2}>
						<span style={{ textDecoration: 'line-through' }}>Prepare</span> connect your wallet
					</Typography>
					<WalletMultiButtonDynamic variant='contained' color='primary' disabled={false} />
				</Box>
			)}
			{connected && !isChecking && isHolder && <TV />}
			{connected && !isChecking && !isHolder && (
				<Box
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						textAlign: 'center',
					}}
				>
					<Typography variant='h6' pb={2}>
						Get back when you find yourself a Saga Pass NFT lol
					</Typography>
				</Box>
			)}
		</Main>
	)
}

export default Home
