const Footer = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="flex-grow h-0.4 bg-gray-300">
                    <hr />
                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">
                    <hr />
                </div>
                <div className="flex-grow h-0.5 bg-gray-300">
                    <hr />
                </div>
            </div>
            <footer className="bg-sky-50 p-4 text-black text-center rounded-t-lg">
                <p className="text-sm">&copy; 2024 All Rights Reserved</p>
                <div className="mt-2 flex items-center justify-center">
                    <p className="text-s">Founder : <a href="https://www.linkedin.com/in/harsh-raj-15321624a/" target="_blank" className="cursor-pointer hover:underline">
                        <span>Harsh  Raj</span>
                    </a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;