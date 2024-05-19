'use client'

import PromotionFormModal from '@/app/components/promotion-form-modal'
import { useRouter } from 'next/navigation'

export interface PageProps {
	params: { id: string }
}

export default function Page({ params }: PageProps) {
	const router = useRouter()
	return (
		<PromotionFormModal
			companyId={params.id}
			show={true}
			onClose={() => router.back()}
		/>
	)
}
