import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-black bg-opacity-50 backdrop-blur-sm p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    The Golden Fork
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="/menu" className="text-gray-300 hover:text-white">
                        Menu
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;