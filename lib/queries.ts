import { SearchParamsProp } from "@/types"

export const getProducts = async (params: SearchParamsProp) => {
	const { page = 1, search, sortBy, order, limit = 30 } = params
	const skip = (page - 1) * limit

	let url
	if (search) {
		url = new URL(`https://dummyjson.com/products/search`)
		url.searchParams.append("q", search)
	} else {
		url = new URL("https://dummyjson.com/products/")
	}

	url.searchParams.append("page", page.toString())
	url.searchParams.append("limit", limit.toString())
	url.searchParams.append("skip", skip.toString())
	if (sortBy) url.searchParams.append("sortBy", sortBy)
	if (order) url.searchParams.append("order", order)
	try {
		const res = await fetch(url.toString(), { cache: "no-cache" })
		const products = await res.json()
		return products
	} catch (e) {
		console.log(e)
		return { products: [], total: 0 }
	}
}

export const getProduct = async (id: string) => {
	const res = await fetch(`https://dummyjson.com/products/${id}`)
	const product = await res.json()
	return product
}
