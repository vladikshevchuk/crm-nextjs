'use client'

import { notFound } from 'next/navigation'
import { useEffect } from 'react'

export interface PageProps {
	params: { id: string }
}

export default function Page({ params }: PageProps) {
	useEffect(() => {
		const id = Number.parseInt(params.id)
		if (Number.isNaN(id)) {
			notFound()
		}
	}, [params.id])
	return (
		<div className='py-6 px-10'>
			<p>{`Information about company (${params.id})`}</p>
		</div>
	)
}
