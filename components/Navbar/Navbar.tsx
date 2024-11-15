import Image from "next/image"
import Link from "next/link"
import PageContainer from "../PageContainer"
import NavLink from "./NavLink"
import SearchForm from "../forms/SearchForm"
import { Suspense } from "react"

const Navbar = async () => {
	return (
		<header className="header">
			<nav
				aria-label="Main Navigation"
				className="py-2 bg-white border-gray-300 border-b">
				<PageContainer className="flex sm:justify-between flex-wrap justify-center">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.png"
							width={75}
							height={75}
							alt="logo"
						/>
						<span className="font-xl font-bold tracking-widest uppercase text-xs px-2 py-1 rounded-lg bg-black text-white">
							Thread flow
						</span>
					</Link>
					<ul className="flex gap-2 items-center flex-wrap">
						<NavLink href="/products" title="all products" />
						<Suspense fallback="loading...">
							<SearchForm />
						</Suspense>
					</ul>
				</PageContainer>
			</nav>
		</header>
	)
}
export default Navbar
