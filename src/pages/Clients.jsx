import { useEffect, useState } from "react";
import api from "../api/axios";

function Clients() {

    const [clients, setClients] = useState([]);

    useEffect(() => {

        async function loadClients() {
            try {
                const response = await api.get("/clients");
                setClients(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadClients();

    }, []);

    return (
        <div>
            <h1 className="page-title">
    Client Management
</h1>

<p style={{color:"#6b7280"}}>
    Manage all registered timeshare clients.
</p>
            <h1>Clients</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {clients.map(client => (
                        <tr key={client.clientId}>
                            <td>{client.clientId}</td>
                            <td>{client.firstName} {client.lastName}</td>
                            <td>{client.email}</td>
                            <td>{client.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;