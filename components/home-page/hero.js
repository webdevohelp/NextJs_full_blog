import Image from 'next/image';

import classes from './hero.module.css';
function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/1.JPG"
                    alt="image of author"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I am Shubhang!</h1>
            <p>
                Here you can do the preparation of govt exams. You can study
                here as well as solve model papers.
            </p>
        </section>
    );
}

export default Hero;
