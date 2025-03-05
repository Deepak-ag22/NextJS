import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

interface User {
    id: number;
    name: string;
    username: string;
}

export default function Dashboard() {
    const { data: session } = useSession();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        if (session) {
            fetchUsers();
        }
    }, [session]);

    return (
        <div>
            {session ? (
                <>
                    <p>Signed IN!! Welcome back..</p>
                    <button className="border bg-amber-50" onClick={() => signOut({ callbackUrl: "/" })}>
                        Log Out
                    </button>
                    <p>User List</p>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.id}. Name:  {user.name} Username: {user.username}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}