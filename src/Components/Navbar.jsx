import '../main.css';


function Navbar() {
    return (
        <nav class="navbar navbar-expand-md  navbar-dark sticky-top" style={{
            backgroundColor: "#001d74", padding: "10px 100px",
            boxShadow: "0 8px 6px -6px #999"
        }}>
            <a class="navbar-brand" style={{ backgroundColor: "#ff304d", padding: "0px 20px", fontSize: "32px" }} href="#">PARVA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" >
                        <a class="nav-link" style={{ color: "white" }} href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style={{ color: "white" }} href="#">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style={{ color: "white", backgroundColor: "#ff304d", borderRadius: "10px" }} href="#">Create a Community</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;