import DashboardCard from '@/app/components/dashboard-card'
import { getSummaryCountries } from '@/lib/api'
import clsx from 'clsx'
import Image from 'next/image'

export interface PageProps {}

export default async function Page({}: PageProps) {
	const data = await getSummaryCountries()

	return (
		<DashboardCard label='Countries of companies'>
			<div className='flex items-end pb-5 px-5 gap-2'>
				<div>
					{data.map(({ countryId, countryTitle, count }) => (
						<p
							key={countryId}
							className={clsx(
								'text-sm text-gray-900 font-medium',
								'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
							)}
						>{`${countryTitle} - ${count}`}</p>
					))}
				</div>
				<Image width={395} height={262} src='/images/world.svg' alt='world' />
			</div>
		</DashboardCard>
	)
}
