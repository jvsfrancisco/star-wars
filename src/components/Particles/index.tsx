import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
      background: {},
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: MoveDirection.none,
          random: false,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
        },
        number: {
          value: 80,
          density: {
            enable: false,
          },
        },
        opacity: {
          value: 0.9,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 0.2,
            max: 1,
          },
        },
        links: {
          enable: false,
        },
      },
    };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -10,
        }}
      />

    );
  }

  return <></>;
};

export default Particle;
