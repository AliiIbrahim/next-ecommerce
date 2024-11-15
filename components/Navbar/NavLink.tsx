import Link from "next/link"

const NavLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<li>
			<Link
				href={href}
				className="px-4 py-2 capitalize hover:bg-accent rounded-lg transition-all">
				{title}
			</Link>
		</li>
	)
}
export default NavLink
