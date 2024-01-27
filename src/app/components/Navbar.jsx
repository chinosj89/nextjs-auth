import Link from "next/link";

const Navbar = () => {

    return (
        <div className="w-full h-20 bg-indigo-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-center items-center h-full text-2xl">
                    <div className="flex flex-row gap-x-6 text-white">

                        <Link href="/" >Home</Link>

                        <Link href="/login">Login</Link>

                        <Link href="/signup">Sign-up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
