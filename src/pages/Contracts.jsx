import { useEffect, useState } from "react";
import api from "../api/axios";

function Contracts() {

    const [contracts, setContracts] = useState([]);
    const [clients, setClients] = useState([]);
    const [hotels, setHotels] = useState([]);

    const [formData, setFormData] = useState({
        contractNumber: "",
        contractValue: "",
        purchaseDate: "",
        startDate: "",
        endDate: "",
        status: "ACTIVE",
        clientId: "",
        hotelId: ""
    });

    useEffect(() => {

        async function loadData() {

            try {

                const contractResponse = await api.get("/contracts");
                const clientResponse = await api.get("/clients");
                const hotelResponse = await api.get("/hotels");

                setContracts(contractResponse.data);
                setClients(clientResponse.data);
                setHotels(hotelResponse.data);

            } catch (error) {
                console.log(error);
            }

        }

        loadData();

    }, []);

    function handleChange(event) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            await api.post("/contracts", formData);

            alert("Contract Created Successfully!");

            const response = await api.get("/contracts");
            setContracts(response.data);

            setFormData({
                contractNumber: "",
                contractValue: "",
                purchaseDate: "",
                startDate: "",
                endDate: "",
                status: "ACTIVE",
                clientId: "",
                hotelId: ""
            });

        } catch (error) {
            console.log(error);
            alert("Failed to create contract.");
        }

    }

    return (

        <div>
<h1 className="page-title">
    Contract Management
</h1>

<p className="page-subtitle">
    Create and manage hotel timeshare contracts
</p>
            <h1>Contracts</h1>
            <div className="form-container">
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="contractNumber"
                    placeholder="Contract Number"
                    value={formData.contractNumber}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="contractValue"
                    placeholder="Contract Value"
                    value={formData.contractValue}
                    onChange={handleChange}
                />

                <br /><br />

                <label>Purchase Date</label>
                <br />
                <input
                    type="date"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                />

                <br /><br />

                <label>Start Date</label>
                <br />
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />

                <br /><br />

                <label>End Date</label>
                <br />
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="clientId"
                    value={formData.clientId}
                    onChange={handleChange}
                >
                    <option value="">Select Client</option>

                    {clients.map((client) => (
                        <option
                            key={client.clientId}
                            value={client.clientId}
                        >
                            {client.firstName} {client.lastName}
                        </option>
                    ))}

                </select>

                <br /><br />

                <select
                    name="hotelId"
                    value={formData.hotelId}
                    onChange={handleChange}
                >
                    <option value="">Select Hotel</option>

                    {hotels.map((hotel) => (
                        <option
                            key={hotel.hotelId}
                            value={hotel.hotelId}
                        >
                            {hotel.hotelName}
                        </option>
                    ))}

                </select>

                <br /><br />

                <button type="submit">
                    Create Contract
                </button>

            </form>
            </div>      
            <br />
            <hr />
            <br />

            <h2>Existing Contracts</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Contract No</th>
                        <th>Client</th>
                        <th>Hotel</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>

                </thead>

                <tbody>

                    {contracts.map((contract) => (

                        <tr key={contract.contractId}>

                            <td>{contract.contractId}</td>
                            <td>{contract.contractNumber}</td>
                            <td>{contract.clientName}</td>
                            <td>{contract.hotelName}</td>
                            <td>{contract.contractValue}</td>
                            <td>{contract.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Contracts;