import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });

  return (
    <main className="">
      <div className="flex  gap-4">
        {images.map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="flex h-96 w-1/3 flex-col p-2"
          >
            <img src={image.url} className="w-48" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
