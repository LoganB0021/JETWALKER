import { Howl } from 'howler';

export const playSound = (src: string) => {
    const sound = new Howl({
        src: [src],
        autoplay: true,
        onend: function() {
            console.log('Finished!');
        }
    });

    sound.play();
}