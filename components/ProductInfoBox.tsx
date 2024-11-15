const ProductInfoBox = ({
	icon,
	text
}: {
	icon: React.ReactNode
	text: string
}) => {
	return (
		<div className="text-center flex flex-col gap-4 justify-center items-center rounded-lg border border-gray-300 p-4">
			{icon}
			<div>{text}</div>
		</div>
	)
}
export default ProductInfoBox
