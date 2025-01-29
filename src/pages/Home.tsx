import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div style={{height:"100vh", padding:"20px", backgroundColor:"#232323",  color:"white"}}>
            <h1 style={{fontSize:"48px", marginBottom:"20PX"}}>Homepage</h1>
            <ul style={{ listStyle: "none", padding:"0" }}>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/homepagedashboard" style={{textDecoration:"none", color:"#87CEFA"}}>HomepageDashboard
                    </Link>
                </li>
            </ul>
        </div>
    )
}