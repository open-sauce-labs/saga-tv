import { Box } from '@mui/material'
import useSound from 'use-sound'
import BackgroundIcon from 'public/assets/vector-icons/background-icon.svg'
import SagaImage from 'public/assets/saga.png'
import SagaPassImage1 from 'public/assets/saga-pass-1.png'
import SagaPassImage2 from 'public/assets/saga-pass-2.png'
import useWindowDimensions from 'hooks/useWindowDimensions'
// import graphVideo from 'public/assets/graph.mp4'
import { useEffect } from 'react'
import Image from 'next/image'

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const TV: React.FC = () => {
	const { height, width } = useWindowDimensions()
	const [play] = useSound('/assets/sounds/background-song.mp3', { interrupt: false })

	useEffect(play, [play])

	return (
		<Box
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
			}}
		>
			{[...Array((Math.floor(width / 300) || 1) * 52)].map((n, i) => {
				return (
					<Image
						src={SagaPassImage1}
						alt='Saga Pass NFT'
						width={264}
						height={353}
						key={i}
						style={{
							maxWidth: '12%',
							width: `${random(40, 60)}px`,
							transform: `rotate(${random(-30, 30)}deg)`,
							left: `${random(0, 100)}%`,
							zIndex: `${random(-1, 5)}`,
							animationDuration: `${random(2, 16)}s, ${random(1, 2)}s`,
							animationDelay: `${random(4, 216)}s, 0s`,
						}}
						className='saga-pass-image'
					/>
				)
			})}
			{[...Array((Math.floor(width / 300) || 1) * 52)].map((n, i) => {
				return (
					<Image
						src={SagaPassImage2}
						alt='Saga Pass NFT'
						width={264}
						height={353}
						key={i}
						style={{
							maxWidth: '12%',
							width: `${random(40, 60)}px`,
							transform: `rotate(${random(-30, 30)}deg)`,
							left: `${random(0, 100)}%`,
							zIndex: `${random(-1, 5)}`,
							animationDuration: `${random(2, 16)}s, ${random(1, 2)}s`,
							animationDelay: `${random(4, 216)}s, 0s`,
						}}
						className='saga-pass-image'
					/>
				)
			})}
			<Image src={SagaImage} alt='Saga phone' width={140} height={340} className='saga-image' />
			<BackgroundIcon
				className='background-icon'
				style={{
					minWidth: '820px',
					width: '120%',
					position: 'absolute',
					bottom: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: -5,
				}}
			/>
			<div
				className='sun'
				style={{
					width: height > width ? height : width,
					height: height > width ? height : width,
				}}
			></div>
			<video
				loop
				autoPlay
				muted
				controls={false}
				style={{
					minHeight: '100%',
					minWidth: '100%',
					position: 'absolute',
					bottom: 0,
					left: 0,
					zIndex: -2,
				}}
				className='video'
			>
				<source src='/assets/graph.mp4' type='video/mp4' />
			</video>
		</Box>
	)
}

export default TV
