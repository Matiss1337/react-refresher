function ScrollToTopButton() {
    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="cursor-pointer fixed right-6 bottom-6 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:text-gray-900"
        >
            Back to top
        </button>
    );
}

export default ScrollToTopButton;
