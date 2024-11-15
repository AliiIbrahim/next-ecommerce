"use client"

import { Search } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const SearchForm = () => {
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams.toString())
	const router = useRouter()
	const [searchTerm, setSearchTerm] = useState<string>(
		params.get("search") || ""
	)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (searchTerm) {
			params.set("search", searchTerm)
			params.set("page", "1")
			router.push(`/products?${params.toString()}`)
		} else router.push(`/products`)
	}
	return (
		<form onSubmit={handleSubmit} className="flex gap-2 items-center">
			<Input
				name="query"
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				placeholder="Search"
			/>
			<Button type="submit" variant="outline">
				<Search />
			</Button>
		</form>
	)
}
export default SearchForm
