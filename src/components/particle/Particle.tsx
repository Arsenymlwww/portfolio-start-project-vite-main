import { useEffect, useState } from "react";
import type { Container, Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Добавили initParticlesEngine
import { loadSlim } from "@tsparticles/slim";

export const Particle = () => {
    const [init, setInit] = useState(false);

    // В v3 инициализация делается ТАК:
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    // Компонент рендерим только КОГДА движок готов (init === true)
    if (init) {
        return (
            
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded} // Вместо loaded
                options={{
                    // background: {
                    //     color: { value: "#0d47a1" },
                    // },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            // onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: { enable: true },
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 200,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                width: 1920,
                                height: 1080,
                            },
                            value: 80,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 0.2, max: 1 } },
                    },
                    detectRetina: true,
                }}
            />
        );
    }

    return null;
};

export default Particle;
