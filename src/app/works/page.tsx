export default function Works() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-24 md:py-36 overflow-hidden relative bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through WORKS array and render each project */}
            {/* {WORKS.map(project => (
              <WorkCard key={project.id} project={project} />
            ))} */}
          </div>
        </div>
      </section>
    </main>
  );
}
