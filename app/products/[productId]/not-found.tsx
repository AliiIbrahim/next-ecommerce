import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
			<title>Product not found</title>
			<div>
				Here lies what couldve been the best not found page, but alas we
				find ourself in a trexican stand off
			</div>

			<Link
				href="https://www.urbandictionary.com/define.php?term=Trexican%20Stand%20off"
				target="_blank">
				<Button>Whats a Trexican standoff</Button>
			</Link>
		</div>
	)
}
export default NotFound
