const Experience = ({ number, xp }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="text-5xl sm:text-7xl font-bold">{number}</div>
            <div className="font-bold sm:text-lg text-xs text-neutral-500 max-w-32">{xp}
            </div>
        </div>
    );
};

export default Experience;