import React from "react";

export default function UsersTable({ users }) {
    return (
        <div className="users">
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Email</th>
                        <th>Port</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.secondName}</td>
                            <td>{user.email}</td>
                            <td>{user.port}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
