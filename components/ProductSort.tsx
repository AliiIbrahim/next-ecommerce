import { Suspense } from "react"
import SortForm from "./forms/SortForm"
import { SelectItem } from "./ui/select"

const ProductSort = () => {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			<Suspense fallback="Loading sort options">
				<SortForm placeholder="Sort" type="sortBy">
					<SelectItem value="title">Title</SelectItem>
					<SelectItem value="price">Price</SelectItem>
					<SelectItem value="rating">Rating</SelectItem>
				</SortForm>
			</Suspense>

			<Suspense fallback="Loading order options">
				<SortForm placeholder="Order" type="order">
					<SelectItem value="asc">Ascending </SelectItem>
					<SelectItem value="desc">Descending</SelectItem>
				</SortForm>
			</Suspense>
		</div>
	)
}
export default ProductSort
