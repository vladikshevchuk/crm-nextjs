import DashboardCard from '@/app/components/dashboard-card'
import MagicButton from '@/app/components/magic-button'
import SummaryTable from '@/app/components/summary-table'
import SummaryTableCell from '@/app/components/summary-table-cell'
import SummaryTableHeader from '@/app/components/summary-table-header'
import { getSummarySales } from '@/lib/api'

export interface PageProps {}

export default async function Page({}: PageProps) {
	const data: Object[] = await new Promise(res => {
		setTimeout(() => {
			res(getSummarySales())
		}, 4000)
	})

	return (
		<DashboardCard
			label={
				<>
					Sales details
					<MagicButton />
				</>
			}
		>
			<SummaryTable
				headers={
					<>
						<SummaryTableHeader>Company</SummaryTableHeader>
						<SummaryTableHeader align='center'>Sold</SummaryTableHeader>
						<SummaryTableHeader align='center'>Income</SummaryTableHeader>
					</>
				}
			>
				{data.map(({ companyId, companyTitle, sold, income }: any) => (
					<tr key={companyId}>
						<SummaryTableCell>{companyTitle}</SummaryTableCell>
						<SummaryTableCell align='center'>{sold}</SummaryTableCell>
						<SummaryTableCell align='center'>{`$${income}`}</SummaryTableCell>
					</tr>
				))}
			</SummaryTable>
		</DashboardCard>
	)
}
