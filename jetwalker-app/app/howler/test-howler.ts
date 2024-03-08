import { Howl } from 'howler';

export const playSound = (src: string) => {
    const sound = new Howl({
        src: [src],
        autoplay: true,
        html5: true
    });

    sound.play();
}