import PageContainer from "@/components/PageContainer"
import Product from "@/components/Product"

import { getProduct } from "@/lib/queries"
import { metaDataProps, productProps } from "@/types"

import { notFound } from "next/navigation"

export async function generateStaticParams() {
	const staticParams = []

	for (let id = 1; id <= 10; id++) {
		staticParams.push({
			productId: id.toString()
		})
	}

	return staticParams
}

export async function generateMetadata({ params }: metaDataProps) {
	const product: productProps = await getProduct(params.productId)

	return {
		title: `${product.title} | Thread Flow`,
		description: `${product.description}`
	}
}

const page = async ({ params }: { params: { productId: string } }) => {
	const product: productProps = await getProduct(params.productId)
	if (product.message) return notFound()
	return (
		<PageContainer className="mt-10">
			<Product product={product} />
		</PageContainer>
	)
}
export default page
