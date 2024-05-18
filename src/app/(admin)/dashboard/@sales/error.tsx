'use client'

export interface ErrorComponentProps {
	error: Error
}

export default function Error({}: ErrorComponentProps) {
	return <div>Unexpected error inside slot sales</div>
}
