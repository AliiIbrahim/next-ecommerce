import { productProps } from "@/types"
import Image from "next/image"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "./ui/card"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"

const ProductsListItem = ({ product }: { product: productProps }) => {
	return (
		<article>
			<Card className="h-full">
				<Link href={`/products/${product.id}`}>
					<figure className="flex justify-center">
						<Image
							src={`${product.thumbnail}`}
							alt={`${product.title} image`}
							width={300}
							height={100}
							className="md:w-full md:h-auto"
						/>
					</figure>

					<CardHeader>
						<CardTitle>{product.title}</CardTitle>
						<CardDescription className="font-bold">
							${product.price}
						</CardDescription>
						<CardDescription>
							Rating: {product.rating}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>{product.description}</p>
					</CardContent>
				</Link>
				<CardFooter>
					<AddToCartButton />
				</CardFooter>
			</Card>
		</article>
	)
}
export default ProductsListItem
