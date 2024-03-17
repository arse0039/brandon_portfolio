import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadFireflyPreset } from "@tsparticles/preset-firefly";


export const AnimatedBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
            await loadFireflyPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div>
            {init && <Particles id="tsparticles" options={{preset:"firefly"}} />}
        </div>
    );
};

