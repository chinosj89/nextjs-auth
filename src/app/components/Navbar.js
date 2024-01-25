// components/Navbar.jsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>

            <Link href="/login">
                Login
            </Link>


            <Link href="/signup">
                Signup
            </Link>


            <Link href="/profile">
                Profile
            </Link>


        </nav>
    );
};

export default Navbar;
