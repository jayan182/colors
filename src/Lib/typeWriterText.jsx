import Typewriter from 'typewriter-effect';

const TypeWriterText = (text) => {
    return (
        <Typewriter
            options={{
                strings: [`${text}`],
                autoStart: true,
                loop: true,
            }}
        />
    );
}

export default TypeWriterText;