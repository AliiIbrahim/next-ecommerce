import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel"
import { Box, Star, Truck } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { productProps } from "@/types"
import AddToCartButton from "./AddToCartButton"
import ProductInfoBox from "./ProductInfoBox"

const Product = ({ product }: { product: productProps }) => {
	return (
		<article>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<section>
					<Carousel>
						<CarouselContent>
							{product.images &&
								product.images.map((image: string) => (
									<CarouselItem key={image}>
										<figure className="product-image">
											<Image
												src={image}
												alt={`${product.title} image`}
												width={500}
												height={500}
												className="w-full h-auto"
											/>
										</figure>
									</CarouselItem>
								))}
						</CarouselContent>
						<CarouselPrevious className="left-0" />
						<CarouselNext className="right-0" />
					</Carousel>
				</section>
				<header role="region" className="flex flex-col gap-6">
					<div className="flex flex-col gap-2 pb-2">
						<h1 className="text-3xl font-bold">{product.title}</h1>
						<div className="mt-2 flex items-center gap-2">
							<data
								value={product.price}
								className="text-3xl product-price">
								${product.price}
							</data>

							<Badge variant="destructive" className="text-xs">
								Save {product.discountPercentage}%
							</Badge>
						</div>
					</div>
					<Separator />
					<p>{product.description}</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
						<ProductInfoBox
							icon={<Star />}
							text={product.warrantyInformation}
						/>
						<ProductInfoBox
							icon={<Truck />}
							text={product.shippingInformation}
						/>
						<ProductInfoBox
							icon={<Box />}
							text={product.availabilityStatus}
						/>
					</div>
					<div className="flex flex-col gap-4">
						<AddToCartButton className="w-full py-6">
							Add to Cart
						</AddToCartButton>
						<Button variant="destructive" className="w-full py-6">
							Talk to our team
						</Button>
					</div>
				</header>
			</div>

			<section className="my-10 flex flex-col gap-4">
				<h2 className="text-3xl sm:5xl font-bold">Customer Reviews</h2>
				<Separator />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{product.reviews.map((review, index: number) => (
						<Card key={`${review.reviewerName}-${index}`}>
							<CardHeader>
								<CardTitle>{review.comment}</CardTitle>
								<CardDescription>
									{review.reviewerEmail} -{" "}
									{review.reviewerName}
								</CardDescription>
							</CardHeader>
							<CardContent>
								{new Date(review.date).toLocaleDateString()}
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</article>
	)
}
export default Product
