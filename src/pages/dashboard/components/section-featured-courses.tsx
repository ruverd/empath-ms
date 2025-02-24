export const SectionFeaturedCourses = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Courses</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>Card Featured Courses 1</div>
        <div>Card Featured Courses 2</div>
      </div>
    </section>
  );
};
