function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <img className="logo" src="src/img/devcamp_logo_navy 1.png" alt="logo" />

                <div className="pill-profile">
                    <div className="avatar-wrapper">
                        <img src="src/img/avt.jpg" alt="avt" className="avatar" />
                    </div>
                    <div className="user-info">
                        <p className="user-role">Admin</p>
                        <p className="user-name">Khoidesu</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;