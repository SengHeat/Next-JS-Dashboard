import UserHeader from "../../../components/ users/UserHeader";
import UserTable from "../../../components/ users/UserTable";

export default function UsersPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <UserHeader />
            <UserTable />
        </div>
    );
}
