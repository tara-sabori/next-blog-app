const ButtonIcon = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center gap-x-1"
        >
            {children}
        </button>
    );
}

export default ButtonIcon;
