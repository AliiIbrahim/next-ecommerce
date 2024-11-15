"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select"

const SortForm = ({
	type,
	placeholder,
	children
}: {
	type: string
	placeholder: string
	children: React.ReactNode
}) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()
	const params = new URLSearchParams(searchParams.toString())
	const defaultValue = params.get(type) || ""
	const buildHref = (value: string) => {
		params.set(type, value)
		params.set("page", "1")
		return `${pathname}?${params.toString()}`
	}
	const handleSortChange = (value: string) => {
		const newHref = buildHref(value)
		router.push(newHref)
	}
	return (
		<Select value={defaultValue} onValueChange={handleSortChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>{children}</SelectContent>
		</Select>
	)
}
export default SortForm
