import { FC } from "react";

interface User {
    id: number;
    email: string;
    username: string;
    phone: string;
    name: { firstname: string; lastname: string };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: { lat: string; long: string };
    };
}

interface Props {
    user: User;
    index: number;
}

const UserRow: FC<Props> = ({ user, index }) => (
    <tr
        className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
        } hover:bg-blue-50 transition`}
    >
        <td className="px-4 py-3 font-medium text-gray-900">{user.id}</td>
        <td className="px-4 py-3">
            {user.name.firstname} {user.name.lastname}
        </td>
        <td className="px-4 py-3">{user.email}</td>
        <td className="px-4 py-3">@{user.username}</td>
        <td className="px-4 py-3">{user.phone}</td>
        <td className="px-4 py-3">
            {user.address.number} {user.address.street}, {user.address.city}
            <div className="text-gray-500 text-xs">ZIP: {user.address.zipcode}</div>
        </td>
        <td className="px-4 py-3 text-xs text-gray-600">
            {user.address.geolocation.lat}, {user.address.geolocation.long}
        </td>
    </tr>
);

export default UserRow;
