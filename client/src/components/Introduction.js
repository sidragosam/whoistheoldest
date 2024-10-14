export default function Introduction() {
  return (
    <div className="mb-8 text-gray-700">
      <p className="text-lg">
        This application tracks and displays data about the oldest person
        currently alive and the oldest person ever recorded. The data is managed
        and stored locally, giving full control over updates and the ability to
        set constraints like birth date limits or country of origin.
      </p>
      <p className="mt-4 text-lg">
        The application fetches data from two API endpoints:
      </p>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>
          <strong>/oldest-living-person:</strong> Provides data about the oldest
          person alive.
        </li>
        <li>
          <strong>/oldest-person-ever:</strong> Provides data about the oldest
          person to ever live.
        </li>
      </ul>
    </div>
  );
}
