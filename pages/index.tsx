import type { NextPage } from 'next'
import Main from 'components/layout/Main'
import TV from 'components/TV'

const Home: NextPage = () => {
	return (
		<Main className='main'>
			<TV />
		</Main>
	)
}

export default Home
