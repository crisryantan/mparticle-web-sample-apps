declare module '*.js' {
  const content: any;
  export default content;
}

// Extend Window interface to include mParticle
declare global {
    interface Window {
        mParticle: any;
    }
}

interface MParticleWindow extends Window {
    mParticle: {
        config?: {
            kitConfigs: Array<any>;
        };
    };
}

declare let window: MParticleWindow;
