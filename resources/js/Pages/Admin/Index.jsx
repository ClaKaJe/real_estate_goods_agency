import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

const Index = ({ auth, properties }) => {
  const { flash } = usePage().props;

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Properties
          </h2>

          <Link
            href='property/create'
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            dangerouslySetInnerHTML={{ __html: 'Add property' }}
          />
        </div>
      }
    >
      <Head title="Properties" />

      {flash}

      <div className="overflow-x-auto my-5 lg:mx-[15%]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Surface</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.data.map((property) => (
              <tr key={property.id}>
                <td className="border px-4 py-2">
                  {property.title}
                </td>
                <td className="border px-4 py-2">
                  {property.surface}m²
                </td>
                <td className="border px-4 py-2">
                  {property.price}$
                </td>
                <td className="border px-4 py-2">
                  {property.city}
                </td>
                <td className="border px-4 py-2">
                  <Link
                    href={`/admin/property/${property.id}/edit`}
                  >
                    <PrimaryButton>
                      Edit
                    </PrimaryButton>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex justify-center mt-4">
        {properties.links.map((link, index) => (
          <li key={index} className="mx-2">
            <Link
              href={link.url}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          </li>
        ))}
      </ul>
    </AuthenticatedLayout>
  );
};

export default Index;
