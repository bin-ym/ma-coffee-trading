export default function AboutUs() {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] w-full px-4 py-20 bg-[#f9f6f2] flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-24 animate-fade-in-down">
          🌍 About Us
        </h2>

        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-800 sm:text-xl lg:text-2xl animate-fade-in-up">
          At <span className="font-semibold text-[#6B4F4F]">MA Coffee Trading PLC</span>, we are proud exporters of
          <strong> premium Ethiopian coffee</strong>, partnering directly with local farmers to deliver
          ethically sourced, high-quality beans to the world.
        </p>

        <div className="grid gap-8 mt-10 text-left sm:grid-cols-2">
          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">🌱 Sustainability</h3>
            <p className="text-gray-700">
              We promote eco-friendly farming practices and fair trade, ensuring a better future for our farmers and the environment.
            </p>
          </div>
          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">☕ Quality First</h3>
            <p className="text-gray-700">
              Every bean is carefully selected, roasted, and packed to bring out the authentic flavors of Ethiopian coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
