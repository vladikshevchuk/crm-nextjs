import Providers from '@/app/components/providers'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Sidebar from './components/sidebar'
import './globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Providers>
					<Sidebar />
					<div className='ml-60'>{children}</div>
				</Providers>
			</body>
		</html>
	)
}
