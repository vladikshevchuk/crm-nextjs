import AddPromotionButton from '@/app/components/add-promotion-button'
import SearchInput from '@/app/components/search-input'
import Toolbar from '@/app/components/toolbar'

export interface PageProps {
	params: { id: string }
}

export default function Page({ params }: PageProps) {
	return (
		<Toolbar action={<AddPromotionButton companyId={params.id} />}>
			<SearchInput />
		</Toolbar>
	)
}
