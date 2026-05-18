import Image from 'next/image';

const About = () => {

    return (
        <div id="about" className="border border-border w-full flex bg-accent p-10 rounded-2xl">
            <div className="md:m-20">
                <h2 className="text-4xl">Sobre mi</h2>
                <p className="mt-6 md:mt-10 text-xl text-muted-foreground ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum arcu a est scelerisque facilisis. Quisque ut purus eget neque malesuada mattis ac ac sapien. Nullam egestas sapien sed varius ultricies. Suspendisse potenti. Duis id arcu tempor, tincidunt tortor vel, laoreet ligula. Pellentesque tempor velit eget velit finibus lobortis. </p>
            </div>
            
            <Image 
                src="https://r2-worker.mikelmm1999.workers.dev/about-me.jpeg"
                alt="about-me"
                width={300}
                height={500}
                quality={75}
                loading="lazy"
                className="hidden md:block object-cover w-full h-auto rounded-xl"
            />
        </div>
    )
}

export default About;