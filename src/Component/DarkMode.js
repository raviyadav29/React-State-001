import { useState } from 'react'
import "./DarkMode.css";

export const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className={!isDarkMode ? "light" : "dark"} style={{ boxShadow:"0 0 10px black", padding:"30px",display: "flex", width: "40%", marginTop: "30px", marginLeft: "30%" }}>
            <div style={{ textAlign: "center",marginLeft:"50px" }}>
                <h2>Converting a Function to a Class</h2>
                <div>
                    <h4>Adding Local State to a Class</h4>
                    <p>In applications with many components, it’s very </p>
                </div>
                <div>
                    <h4>Adding Local State to a Class</h4>
                    <p>In applications with many components, it’s very </p>
                </div>
                <div>
                    <h4>Adding Local State to a Class</h4>
                    <p>In applications with many components, it’s very </p>
                </div>
                <div>
                    <h4>Adding Local State to a Class</h4>
                    <p>In applications with many components, it’s very </p>
                </div>
            </div>
            <div style={{marginTop:"24px",marginLeft:"60px"}}>
                <button onClick={toggleDarkMode}>Toggle</button>
            </div>
        </div>
    )
}
