"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Share2, Download } from "lucide-react"
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa"


// Sample poster data
const samplePosters = [
	{
		id: 1,
		title: "Poster 1",
		imageUrl: "/socials_1.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 2,
		title: "Poster 2",
		imageUrl: "/socials_2.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 3,
		title: "Poster 3",
		imageUrl: "/socials_3.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 4,
		title: "Poster 4",
		imageUrl: "/socials_4.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 5,
		title: "Poster 5",
		imageUrl: "/socials_5.png",
		date: new Date("2025-08-27"),
	},
	{
		id: 6,
		title: "Poster 6",
		imageUrl: "/socials_6.png",
		date: new Date("2025-08-29"),
	},
	{
		id: 7,
		title: "Poster 7",
		imageUrl: "/socials_7.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 8,
		title: "Poster 8",
		imageUrl: "/socials_8.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 9,
		title: "Poster 9",
		imageUrl: "/socials_9.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 10,
		title: "Poster 10",
		imageUrl: "/socials_10.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 11,
		title: "Poster 11",
		imageUrl: "/socials_11.jpeg",
		date: new Date("2025-09-09"),
	},
]

type SortOption = "newest" | "oldest"

interface Poster {
	id: number
	title: string
	imageUrl: string
	date: Date
}

export default function PosterGallery() {
	const [sortBy, setSortBy] = useState<SortOption>("newest")
	const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)

	// Sort posters based on selected option
	const sortedPosters = [...samplePosters].sort((a, b) => {
		if (sortBy === "newest") {
			return b.date.getTime() - a.date.getTime()
		} else {
			return a.date.getTime() - b.date.getTime()
		}
	})

	// Social share functions
	const shareOnWhatsApp = (poster: Poster) => {
		const url = `https://amritaicpc.in/poster/${poster.id}`
		const text = "Promote ICPC Regionals 2025, Amritapuri!"
		window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank")
	}

	const shareOnLinkedIn = (poster: Poster) => {
		const url = `https://amritaicpc.in/poster/${poster.id}`
		const shareUrl = `https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodeURIComponent(url)}`
		window.open(shareUrl, "_blank")
	}

	const shareOnTwitter = (poster: Poster) => {
		const url = `https://amritaicpc.in/poster/${poster.id}`
		const text = `Promote ICPC Regionals 2025, Amritapuri #ICPC #Programming`
		const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
		window.open(twitterUrl, "_blank")
	}

	// Alternative: Add a download function
	const downloadImage = (poster: Poster) => {
		const imageUrl = `${window.location.origin}${poster.imageUrl}`
		const link = document.createElement("a")
		link.href = imageUrl
		link.download = `icpc-poster-${poster.id}.png`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className="w-full">
			{/* Sort Dropdown */}
			<div className="flex justify-end mb-6">
				<Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
					<SelectTrigger className="w-48">
						<SelectValue placeholder="Sort by date" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="newest">Newest First</SelectItem>
						<SelectItem value="oldest">Oldest First</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Poster Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{sortedPosters.map((poster) => (
					<Card
						key={poster.id}
						className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
						onClick={() => setSelectedPoster(poster)}
					>
						<div className="relative">
							<img
								src={poster.imageUrl || "/placeholder.svg"}
								alt={poster.title}
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
								<Share2
									className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									size={24}
								/>
							</div>
						</div>
						<div className="p-4">
							<p className="text-sm text-muted-foreground">
								{poster.date.toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
						</div>
					</Card>
				))}
			</div>

			{/* Social Share Modal */}
			{selectedPoster && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
					<div className="bg-card rounded-lg p-6 w-full max-w-md relative">
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-2 right-2"
							onClick={() => setSelectedPoster(null)}
						>
							<X size={20} />
						</Button>

						<div className="text-center mb-6">
							<img
								src={selectedPoster.imageUrl || "/placeholder.svg"}
								alt={selectedPoster.title}
								className="w-32 h-40 object-cover rounded-lg mx-auto mb-4"
							/>
							{/* <h3 className="text-lg font-semibold text-card-foreground mb-2">{selectedPoster.title}</h3> */}
							<p className="text-muted-foreground text-sm">Share this poster</p>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<Button
								variant="outline"
								className="flex items-center justify-center gap-2 h-12 bg-transparent"
								onClick={() => shareOnWhatsApp(selectedPoster)}
							>
								<FaWhatsapp className="w-5 h-5 text-green-500" />
								WhatsApp
							</Button>

							<Button
								variant="outline"
								className="flex items-center justify-center gap-2 h-12 bg-transparent"
								onClick={() => shareOnLinkedIn(selectedPoster)}
							>
								<FaLinkedin className="w-5 h-5 text-blue-600" />
								LinkedIn
							</Button>

							<Button
								variant="outline"
								className="flex items-center justify-center gap-2 h-12 bg-transparent"
								onClick={() => shareOnTwitter(selectedPoster)}
							>
								<FaTwitter className="w-5 h-5 text-blue-400" />
								Twitter
							</Button>

							{/* Add download button */}
							<Button
								variant="outline"
								className="flex items-center justify-center gap-2 h-12 bg-transparent col-span-2"
								onClick={() => downloadImage(selectedPoster)}
							>
								<Download className="w-5 h-5 text-gray-600" />
								Download Image
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
