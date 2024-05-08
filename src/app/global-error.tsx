'use client'

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
	return (
		<html>
			<body>
				<div>
					<p>Something globally went wrong</p>
				</div>
			</body>
		</html>
	)
}
