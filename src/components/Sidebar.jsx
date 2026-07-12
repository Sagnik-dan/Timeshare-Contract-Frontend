import { Link } from "react-router-dom";

function Sidebar() {

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        display: "block",
        padding: "14px",
        marginBottom: "12px",
        borderRadius: "10px",
        textAlign: "center"
    };

    return (

        <div
            style={{
                width: "220px",
                height: "100vh",
                backgroundColor: "#0f172a",
                color: "white",
                position: "fixed",
                padding: "25px"
            }}
        >

            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "30px"
                }}
            >
                🏨 Timeshare
            </h2>

            <Link to="/" style={linkStyle}>
                📊 Dashboard
            </Link>

            <Link to="/clients" style={linkStyle}>
                👥 Clients
            </Link>

            <Link to="/hotels" style={linkStyle}>
                🏢 Hotels
            </Link>

            <Link to="/contracts" style={linkStyle}>
                📄 Contracts
            </Link>

        </div>

    );

}

export default Sidebar;