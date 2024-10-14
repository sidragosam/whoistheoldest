export default function OldestPersonDetails({ title, person, gradientClass }) {
  return (
    <div className={`p-6 ${gradientClass} text-white rounded-lg shadow-lg`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">
        <span className="font-semibold">Name:</span> {person.name}
      </p>
      <p>
        <span className="font-semibold">Age:</span> {person.age}
      </p>
      <p>
        <span className="font-semibold">Country:</span> {person.country}
      </p>
    </div>
  );
}
