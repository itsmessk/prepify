import Link from "next/link";

const Footer = () => (
    <footer className="w-full flex justify-center px-4 py-3 mt-10 shadow-inner">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full px-6 py-2">
            <p className="text-sm text-gray-400 text-center">
                © 2025 <span className="font-semibold text-white">Prepify</span>. Made with <span className="text-red-500">♥</span> by
            </p>
            <Link
                href="https://github.com/itsmessk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-200 hover:underline"
            >
                @itsmessk
            </Link>
        </div>
    </footer>
);

export default Footer;
