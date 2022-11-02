import { useCallback, useEffect, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useCancelablePromise } from 'hooks'
import { Metaplex, Metadata } from '@metaplex-foundation/js'
import { PublicKey } from '@solana/web3.js'

type TokenGatingHook = () => { isHolder: boolean; isChecking: boolean }

export const useTokenGating: TokenGatingHook = () => {
	const [isHolder, setIsHolder] = useState(false)
	const [isChecking, setIsChecking] = useState(false)
	const { connection } = useConnection()
	const { publicKey } = useWallet()
	const makeCancelable = useCancelablePromise()

	const verifyWallet = useCallback(async () => {
		if (!publicKey) setIsHolder(false)
		else {
			setIsChecking(true)
			const metaplex = new Metaplex(connection)

			const ownedNfts = (await metaplex
				.nfts()
				.findAllByOwner({ owner: new PublicKey(publicKey.toString()) })) as Metadata[]

			const ownedSagaPass = ownedNfts.filter((nft) => {
				return nft.name.includes('Saga Pass')
			})

			setIsHolder(ownedSagaPass.length > 0)
			setIsChecking(false)
		}
	}, [connection, publicKey])

	useEffect(() => {
		makeCancelable(verifyWallet())
	}, [publicKey, makeCancelable, verifyWallet])

	return { isHolder, isChecking }
}

export default useTokenGating
