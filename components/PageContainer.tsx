const PageContainer = ({
	children,
	className = ""
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div className={`mx-auto max-w-[90rem] px-4 ${className}`}>
			{children}
		</div>
	)
}
export default PageContainer
