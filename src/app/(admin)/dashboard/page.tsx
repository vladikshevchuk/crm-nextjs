import MagicButton from '@/app/components/magic-button'

export interface PageProps {}

export default function Dashboard({}: PageProps) {
	return (
		<main>
			<h1 className='text-xl'>Dashboard</h1>
			<MagicButton />
		</main>
	)
}
