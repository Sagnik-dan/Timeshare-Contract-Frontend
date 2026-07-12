import { useEffect, useState } from "react";
import api from "../api/axios";

function Hotels() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        async function loadHotels() {
            try {
                const response = await api.get("/hotels");
                setHotels(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadHotels();

    }, []);

    return (
        <div className="page-container">
            <h1 className="page-title">
    Hotel Management
</h1>

<p style={{color:"#6b7280"}}>
    Manage partner hotels and inventory.
</p>
            <h1 className="page-title">
                Hotels
            </h1>

            <div className="table-container">
                
                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hotel Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Total Rooms</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {hotels.map((hotel) => (

                            <tr key={hotel.hotelId}>

                                <td>{hotel.hotelId}</td>
                                <td>{hotel.hotelName}</td>
                                <td>{hotel.city}</td>
                                <td>{hotel.state}</td>
                                <td>{hotel.country}</td>
                                <td>{hotel.totalRooms}</td>
                                <td
    style={{
        color: hotel.active ? "green" : "red",
        fontWeight: "bold"
    }}
>
    {hotel.active ? "Active" : "Inactive"}
</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Hotels;