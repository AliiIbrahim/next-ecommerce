import PageContainer from "@/components/PageContainer"
import ProductSort from "@/components/ProductSort"
import ProductsList from "@/components/ProductsList"

import { SearchParamsProp, metaDataProps } from "@/types"
import { Suspense } from "react"

export async function generateMetadata({ searchParams }: metaDataProps) {
	const search = searchParams.search || ""
	const page = searchParams.page || 1
	const title = search
		? `Search Results for "${search}" | Thread Flow`
		: `Products page ${page} | Thread Flow`

	const description = search
		? `Explore the products matching "${search}". Discover quality products at great prices.`
		: `Browse our range of products. Discover quality products at great prices.`

	return {
		title,
		description
	}
}

const page = async ({
	searchParams
}: {
	searchParams: Promise<SearchParamsProp>
}) => {
	const search = (await searchParams).search || ""
	const page = (await searchParams).page || 1
	const sortBy = (await searchParams).sortBy || ""
	const order = (await searchParams).order || ""

	return (
		<PageContainer>
			<div className="flex justify-between mt-10 gap-4 flex-wrap">
				<div className="text-3xl">
					{!!search ? (
						<>
							Searched for <strong>{search}</strong>
						</>
					) : (
						"Showing all products"
					)}
				</div>

				<ProductSort />
			</div>

			<Suspense key={Math.random()} fallback={<div>Loading...</div>}>
				<ProductsList
					search={search}
					page={page}
					sortBy={sortBy}
					order={order}
				/>
			</Suspense>
		</PageContainer>
	)
}
export default page
