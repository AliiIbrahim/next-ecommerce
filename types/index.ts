export type productProps = {
	id: number
	title: string
	description: string
	category: string
	price: number
	rating: number
	thumbnail: string
	message: string
	images: string[]
	discountPercentage: number
	warrantyInformation: string
	shippingInformation: string
	availabilityStatus: string
	reviews: {
		rating: number
		comment: string
		date: string
		reviewerName: string
		reviewerEmail: string
	}[]
}

export type metaDataProps = {
	params: { productId: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export type SearchParamsProp = {
	search?: string
	page?: number
	sortBy?: string
	order?: string
	limit?: number
}
