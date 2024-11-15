"use client"

import { Button, ButtonProps } from "./ui/button"

const AddToCartButton = (props: ButtonProps) => {
	const { className, variant } = props

	return (
		<>
			<Button className={className} variant={variant}>
				Add to Cart
			</Button>
		</>
	)
}
export default AddToCartButton
