import { Navbar } from '@senkou/components/navbar';
import { getServicesById } from '@senkou/lib/services';
import Footer from '@senkou/sections/footer';

export default async function DetailServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service = await getServicesById(id);

  return (
    <div className="flex flex-col items-center justify-center min-w-screen min-h-screen pt-10 pb-2 p-4 bg-white text-gray-800">
      <Navbar />
      <section className="py-12 w-full max-w-2xl mx-auto overflow-hidden">
        {service?.image && (
          <div className="flex flex-col mt-4">
            <div className="mt-3 text-center mb-8">
              <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-6">
                Service
              </span>
              <h1 className="text-2xl font-medium">{service.title}</h1>
              <p className="text-sm font-thin text-neutral-400">
                {service.description}
              </p>
            </div>
            <img
              src={service.image.src!}
              alt={service.title}
              className="w-full rounded-sm max-w-screen"
            />

            {service.extra && (
              <div className="flex flex-col mt-4">
                {typeof service.extra === 'string' ? (
                  <span className="text-sm font-thin text-neutral-400">
                    {service.extra}
                  </span>
                ) : (
                  service.extra
                )}
              </div>
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
