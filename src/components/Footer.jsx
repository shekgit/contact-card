const Footer = () => {
    return (
        <div className={
            "text-center py-4 capitalize w-full  mt-auto bg-gray-900 border-t border-gray-700/50 "
        }>
            <a href="https://github.com/shekgit/contact-card"
               className={
                   "border border-gray-600 px-4 py-2 rounded-lg " +
                   "text-gray-300 hover:text-cyan-400 hover:border-cyan-400 " +
                   "transition-all duration-300 hover:bg-gray-800/50"
               }
               target="_blank"
               rel="noopener noreferrer">
                🔗 Github Repo
            </a>
        </div>
    );
};

export default Footer;