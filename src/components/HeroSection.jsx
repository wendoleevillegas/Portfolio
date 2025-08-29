

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hello! I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Wendolee </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Villegas </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I’m a computer science student interested in AI, cybersecurity, data science,
                        and software engineering. I’m passionate about using technology to solve real-world problems and
                        learning new skills inside and outside the classroom. (FIX THIS LATER)
                    </p>
                </div>
            </div>
        </ section >
    );
};