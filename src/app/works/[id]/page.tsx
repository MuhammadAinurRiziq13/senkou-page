import { Navbar } from '@senkou/components/navbar';
import { getWorksById } from '@senkou/lib/works';
import Image from 'next/image';

export default async function WorkResultDetailPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { id } = params;

  const work = await getWorksById(id);

  return (
    <div className="flex flex-col items-center justify-center min-w-screen min-h-screen pt-10 pb-2 bg-white text-gray-800">
      <Navbar />

      <section className="pt-12 w-full max-w-2xl mx-auto overflow-hidden">
        {work?.image && (
          <div className="flex flex-col mt-4">
            <Image
              src={work.image}
              alt={work.title}
              className="w-full rounded-sm max-w-screen"
              width={500}
              height={300}
            />
            <div className="mt-3">
              <span className="text-sm">
                {new Date(work.createdAt).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <h1 className="text-3xl font-semibold mt-2">{work.title}</h1>
            </div>
          </div>
        )}

        {work && work.blog}
      </section>
    </div>
  );
}
