const BreathCircle = ({ phase }: { phase: string }) => {
    return (
        <svg
            id="breath-circle-wrapper"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                id="breath-circle"
                className={`breath-box-phase-${phase}`}
                cx="50"
                cy="50"
                r="15"
            />
        </svg>
    );
};

export default BreathCircle;
