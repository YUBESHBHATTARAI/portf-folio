// components/Card.tsx
export default function Card() {
  return (
    <div className="max-w-sm mx-auto mt-[6rem] mb-[1rem]  bg-white p-6 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">Card Title</h2>
      <p className="text-gray-600">This is a simple card with all-around shadow using Tailwind CSS.</p>
    </div>
  );
}

