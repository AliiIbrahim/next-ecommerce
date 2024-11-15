import Link from "next/link"
import { Button } from "./ui/button"

const Banner = () => {
	return (
		<div className="w-full relative flex items-center justify-center banner-image">
			<div className="text-center flex flex-col gap-4 md:gap-8 items-center px-2">
				<div className="text-5xl md:text-6xl lg:text-7xl font-bold">
					Welcome to Thread Flow
				</div>
				<div className="text-sm md:text-base w-full sm:w-[400px] md:w-[500px] lg:w-[700px]">
					Selected and curated pieces just for your pretty eyes. Dont
					just <span className="italic">browse</span>,{" "}
					<strong>Experience</strong>, Feel, and become the better
					version through our help
				</div>
				<Link href="/products">
					<Button>View all Products</Button>
				</Link>
			</div>
		</div>
	)
}
export default Banner
