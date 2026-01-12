import Typewriter from "typewriter-effect";

interface TypewriterEffectProps {
    roles: string[];
}

export default function TypewriterEffect({ roles }: TypewriterEffectProps) {
    return (
        <div className="text-2xl md:text-4xl font-bold text-gradient min-h-[60px]">
            <Typewriter
                options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                }}
            />
        </div>
    );
}