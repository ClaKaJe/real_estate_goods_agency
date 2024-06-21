import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Checkbox from "./Checkbox";

export default function PropertyForm({ property }) {
  const { data, setData, post, put, processing, errors } = useForm({
    title: property.title,
    surface: property.surface,
    price: property.price,
    // rooms: 3,
    bedrooms: property.bedrooms,
    floor: property.floor,
    city: property.city,
    address: property.address,
    postal_code: property.postal_code,
    sold: property.sold,
    description: property.description,
  });

  const submit = (e) => {
    e.preventDefault();

    if (typeof property.id === "number") {
      put(route("admin.property.update"));
    } else {
      post(route("admin.property.store"));
    }
  };

  return (
    <GuestLayout>
      <Head title="New Property" />

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="title" value="Title" />

          <TextInput
            id="title"
            name="title"
            value={data.title}
            className="mt-1 block w-full"
            autoComplete="title"
            isFocused={true}
            onChange={(e) => setData("title", e.target.value)}
            required
          />

          <InputError message={errors.title} className="mt-2" />
        </div>

        <div className='grid grid-cols-2 gap-4'>

          <div className="mt-4">
            <InputLabel htmlFor="surface" value="Surface" />

            <TextInput
              id="surface"
              type="number"
              name="surface"
              value={data.surface}
              className="mt-1 block w-full"
              autoComplete="surface"
              onChange={(e) => setData('surface', e.target.value)}
            />

            <InputError message={errors.surface} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="price" value="Price" />

            <TextInput
              id="price"
              type="number"
              name="price"
              value={data.price}
              className="mt-1 block w-full"
              autoComplete="price"
              onChange={(e) => setData('price', e.target.value)}
            />

            <InputError message={errors.price} className="mt-2" />
          </div>

          {/* <div className="mt-4">
            <InputLabel htmlFor="rooms" value="Number of Rooms" />

            <TextInput
              id="rooms"
              name="rooms"
              type="number"
              value={data.rooms}
              className="mt-1 block w-full"
              autoComplete="rooms"
              onChange={(e) => setData('rooms', e.target.value)}
            />

            <InputError message={errors.rooms} className="mt-2" />
          </div> */}

          <div className="mt-4">
            <InputLabel htmlFor="bedrooms" value="Number of Bedrooms" />

            <TextInput
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={data.bedrooms}
              className="mt-1 block w-full"
              autoComplete="bedrooms"
              onChange={(e) => setData('bedrooms', e.target.value)}
            />

            <InputError message={errors.bedrooms} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="floor" value="Floor" />

            <TextInput
              id="floor"
              name="floor"
              type="number"
              value={data.floor}
              className="mt-1 block w-full"
              autoComplete="floor"
              onChange={(e) => setData('floor', e.target.value)}
            />

            <InputError message={errors.floor} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="city" value="City" />

            <TextInput
              id="city"
              name="city"
              value={data.city}
              className="mt-1 block w-full"
              autoComplete="city"
              onChange={(e) => setData('city', e.target.value)}
            />

            <InputError message={errors.city} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="address" value="Address" />

            <TextInput
              id="address"
              name="address"
              value={data.address}
              className="mt-1 block w-full"
              autoComplete="address"
              onChange={(e) => setData('address', e.target.value)}
            />

            <InputError message={errors.address} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="postal_code" value="Postal Code" />

            <TextInput
              id="postal_code"
              name="postal_code"
              value={data.postal_code}
              className="mt-1 block w-full"
              autoComplete="postal_code"
              onChange={(e) => setData('postal_code', e.target.value)}
            />

            <InputError message={errors.postal_code} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                id="sold"
                name="sold"
                checked={data.sold}
                autoComplete="sold"
                onChange={(e) => setData('sold', e.target.checked)}
              />
              <span className="ms-2 text-sm text-gray-600">Solded</span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="description" value="Description" />

          <TextInput
            textarea="true"
            id="description"
            name="description"
            value={data.description}
            className="mt-1 block w-full"
            autoComplete="description"
            onChange={(e) => setData('description', e.target.value)}
          />

          <InputError message={errors.description} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
            {typeof property.id === "number" ? 'Update' : 'Register'}
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
