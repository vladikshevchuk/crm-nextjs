import AddCompanyButton from '@/app/components/add-company-button'
import SearchInput from '@/app/components/search-input'
import Toolbar from '@/app/components/toolbar'

export interface PageProps {}

export default function Page({}: PageProps) {
	return (
		<Toolbar action={<AddCompanyButton />}>
			<SearchInput />
		</Toolbar>
	)
}
