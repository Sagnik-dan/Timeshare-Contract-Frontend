import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {

    const [clientCount, setClientCount] = useState(0);
    const [hotelCount, setHotelCount] = useState(0);
    const [contractCount, setContractCount] = useState(0);

    useEffect(() => {

        async function loadDashboard() {

            try {

                const clients = await api.get("/clients");
                const hotels = await api.get("/hotels");
                const contracts = await api.get("/contracts");

                setClientCount(clients.data.length);
                setHotelCount(hotels.data.length);
                setContractCount(contracts.data.length);

            } catch (error) {
                console.log(error);
            }

        }

        loadDashboard();

    }, []);

    return (

       <div className="page-container">

    <h1 className="page-title">
        Dashboard
    </h1>

    <p
        style={{
            color: "#6b7280",
            marginBottom: "25px"
        }}
    >
        Welcome to the Timeshare Contract Management System
    </p>

    <div className="dashboard-container">

        <div className="dashboard-card">
            <div className="dashboard-title">
                Total Clients
            </div>

            <div className="dashboard-value">
                {clientCount}
            </div>
        </div>

        <div className="dashboard-card">
            <div className="dashboard-title">
                Total Hotels
            </div>

            <div className="dashboard-value">
                {hotelCount}
            </div>
        </div>

        <div className="dashboard-card">
            <div className="dashboard-title">
                Total Contracts
            </div>

            <div className="dashboard-value">
                {contractCount}
            </div>
        </div>

    </div>

</div>

    );

}

export default Dashboard;