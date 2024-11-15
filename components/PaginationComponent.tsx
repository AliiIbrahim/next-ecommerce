"use client"

import range from "@/lib/utils"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from "./ui/pagination"
import { usePathname, useSearchParams } from "next/navigation"

type PaginationProps = {
	totalProducts: number
	itemsPerPage: number
	currentPage: number
}

const PaginationComponent = ({
	totalProducts,
	itemsPerPage,
	currentPage
}: PaginationProps) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const totalPages = Math.ceil(totalProducts / itemsPerPage)

	const buildHref = (page: number) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set("page", page.toString())
		return `${pathname}?${params.toString()}`
	}

	return (
		<Pagination className="mt-10 hidden sm:flex">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={buildHref(currentPage - 1)}
						className={`${
							currentPage == 1
								? "opacity-55 pointer-events-none"
								: ""
						}`}
					/>
				</PaginationItem>
				{range(1, totalPages).map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							isActive={currentPage == page}
							href={buildHref(page)}>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						href={buildHref(currentPage + 1)}
						className={`${
							currentPage == totalPages
								? "opacity-55 pointer-events-none"
								: ""
						}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationComponent
