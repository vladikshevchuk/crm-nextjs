'use client'

import CompanyForm from '@/app/components/company-form'

interface PageProp {}

export default function Page({}: PageProp) {
	return (
		<div className='py-6 px-10'>
			<CompanyForm onSubmit={console.log} />
		</div>
	)
}
