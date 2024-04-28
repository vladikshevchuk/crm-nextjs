import Sidebar from '../components/sidebar'

interface ILayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
	return (
		<>
			<Sidebar />
			<div className='ml-60'>{children}</div>
		</>
	)
}
