import { SearchParamsProp, productProps } from "@/types"
import ProductsListItem from "./ProductsListItem"
import { getProducts } from "@/lib/queries"
import PaginationComponent from "./PaginationComponent"
import { Suspense } from "react"

const ProductsList = async ({
	search,
	page = 1,
	sortBy,
	order
}: SearchParamsProp) => {
	const itemsPerPage = 30
	const data = await getProducts({
		search,
		page,
		limit: itemsPerPage,
		sortBy,
		order
	})

	return (
		<section className="pb-10">
			<div
				className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow "
				aria-label="Product Listing">
				{!data.products.length && <div>No products here :(</div>}
				{data.products.map((product: productProps) => (
					<ProductsListItem key={product.id} product={product} />
				))}
			</div>
			{!!data.products.length && (
				<Suspense fallback="loading...">
					<PaginationComponent
						totalProducts={data.total}
						itemsPerPage={itemsPerPage}
						currentPage={page}
					/>
				</Suspense>
			)}
		</section>
	)
}
export default ProductsList
