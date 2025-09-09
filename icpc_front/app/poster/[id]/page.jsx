import { notFound } from "next/navigation";

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
  // ...other posters
];

export async function generateMetadata({ params }) {
  const poster = samplePosters.find(p => p.id === Number(params.id));
  if (!poster) return notFound();

  return {
    title: poster.title,
    description: "Promote ICPC Regionals 2025, Amritapuri",
    openGraph: {
      title: poster.title,
      description: "Promote ICPC Regionals 2025, Amritapuri",
      images: [
        {
          url: poster.imageUrl,  // absolute URL
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      url: `https://localhost:3000/poster/${poster.id}`,
    },
  };
}

export default function PosterPage({ params }) {
  const poster = samplePosters.find(p => p.id === Number(params.id));
  if (!poster) return <p>Poster not found</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img src={poster.imageUrl} alt={poster.title} className="max-w-full rounded-lg" />
    </div>
  );
}
