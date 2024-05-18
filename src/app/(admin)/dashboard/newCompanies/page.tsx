import Header from '@/app/components/header'

export interface PageProps {}

export default function Dashboard({}: PageProps) {
	return (
		<>
			<Header>Dashboard / New companies</Header>
			<div>Some additional info</div>
		</>
	)
}
