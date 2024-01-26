import Link from "next/link";

const Navbar = () => {
    return (

        <div className="w-full h-20 bg-indigo-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="hidden md:flex gap-x-6 text-white">

                        <Link href="/" passHref>Home</Link>

                        <Link href="/login" passHref>Login</Link>

                        <Link href="/signup" passHref>Sign-up</Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
