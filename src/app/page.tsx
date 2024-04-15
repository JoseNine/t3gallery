import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/fb8c105d-6973-49d1-bfbf-02978636b0db-nm33wo.jpg",
  "https://utfs.io/f/23857688-1f6f-4e2d-b1d0-76fec0b334f1-ddn28a.jpg",
  "https://utfs.io/f/a8d4fd00-f6aa-4674-ad95-e75bacd00187-1myvhg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex  gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="h-96 w-1/3 p-2">
            <img src={image.url} className="w-full" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
