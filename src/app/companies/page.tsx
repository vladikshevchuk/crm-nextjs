import AddCompanyButton from '@/app/components/add-company-button'
import CompanyRow from '@/app/components/company-row'
import CompanyTable from '@/app/components/company-table'
import Header from '@/app/components/header'
import SearchInput from '@/app/components/search-input'
import { Status } from '@/app/components/status-label'
import Toolbar from '@/app/components/toolbar'

export interface PageProps {}

export default function Page({}: PageProps) {
	return (
		<>
			<Header>Companies</Header>
			<main>
				<Toolbar action={<AddCompanyButton />}>
					<SearchInput />
				</Toolbar>
				<CompanyTable>
					<CompanyRow
						id={1}
						category='Products'
						company='Costco'
						status={Status.Pending}
						promotion={true}
						country='USA'
						joinedDate='02.19.2023'
					/>
				</CompanyTable>
			</main>
		</>
	)
}
