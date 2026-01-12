import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiTailwindcss,
    SiGit,
    SiDocker,
    SiMongodb,
    SiSpring,
    SiPython,
    SiHtml5,
} from "react-icons/si";

const icons = [
    { Icon: SiReact, delay: "0s", position: "top-20 left-[10%]" },
    { Icon: SiTypescript, delay: "1s", position: "top-40 right-[15%]" },
    { Icon: SiJavascript, delay: "2s", position: "top-[60%] left-[2%]" },
    { Icon: SiNodedotjs, delay: "0.5s", position: "top-[30%] right-[8%]" },
    { Icon: SiTailwindcss, delay: "1.5s", position: "bottom-[20%] left-[12%]" },
    { Icon: SiGit, delay: "2.5s", position: "bottom-[35%] right-[10%]" },
    { Icon: SiDocker, delay: "3s", position: "top-[50%] left-[8%]" },
    { Icon: SiMongodb, delay: "0.8s", position: "top-[70%] right-[1%]" },
    { Icon: SiSpring, delay: "2.2s", position: "top-[25%] left-[18%]" },
    { Icon: SiHtml5, delay: "1.2s", position: "bottom-[5%] right-[18%]" },
    { Icon: SiPython, delay: "2.8s", position: "top-[80%] left-[20%]" },
];

export default function FloatingIcons() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
            {icons.map(({ Icon, delay, position }, index) => (
                <div
                    key={index}
                    className={`absolute ${position} animate-float`}
                    style={{ animationDelay: delay }}
                >
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary/50" />
                </div>
            ))}
        </div>
    );
}
