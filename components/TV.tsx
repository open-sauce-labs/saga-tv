import { Box } from '@mui/material'
import useSound from 'use-sound'

const TV: React.FC = () => {
	const [play, { stop }] = useSound('/assets/sounds/harlem_nocturne.mp3', { interrupt: false })

	return <Box>Temp</Box>
}

export default TV
