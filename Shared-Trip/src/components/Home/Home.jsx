import React from "react";
import styles from './Home.module.css';


export const Home = () => {
    return (
        <section className={styles['site-home']}>
            <div className={styles['card-container']}>
                <div className={styles.container}>
                    <h1>Shared Trip App</h1>
                    <p>Let's make shared trip easy, enjoyable, safe and accessible for everyone.</p>

                    <div className={styles['card-list']}>
                        <div className={styles.card}>
                            <span><i className={`${styles.icon1} fa-solid fa-car`}></i></span>
                            <h5>Fast and Easy</h5>
                            <p>If you are a driver, just create an ad. And everyone can rejoin your shared ride</p>
                        </div>
                        <div className={styles.card}>
                            <span><i className={`${styles.icon2} fa-solid fa-tree`}></i></span>
                            <h5>Eko</h5>
                            <p>Using the ridesharing app not only reduces the number of cars on the road, it also
                                reduces air pollution and carbon emissions.</p>
                        </div>
                        <div className={styles.card}>
                            <span><i className={`${styles.icon3} fa-regular fa-face-grin-wide`}></i></span>
                            <h5>Fun</h5>
                            <p>Shared Trip allows you to connect with like-minded people and share common interests
                                that
                                can create a new, exciting friendship.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <hr> --> */}
            <div className={styles['how-work']}>
                <div className={styles.container}>
                    <h2>How does the app work?</h2>
                    <div className={styles['number-list']}>
                        <div className={styles['card-number']}>
                            <p><span>1</span></p>
                            <h5>Create or search for a trip</h5>
                            <p>Looking or offering? Shared trip app connects you with the most suitable travelers
                                for your destination.</p>
                        </div>
                        <div className={styles['card-number']}>
                            <p><span>2</span></p>
                            <h5>Rate your companion</h5>
                            <p>After the trip, drivers and passengers can rate each other, creating a community of
                                trusted travelers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['top-liked-users']}>
                <div className={styles.container}>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/345169709_1248405912770886_2259216878399975591_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=GXjxS_7Y1fMAX-f55_Y&_nc_ht=scontent.fsof11-1.fna&oh=00_AfB7JZSEGUVHV1evarz_GbtxN6dCgozIIDYO2dSIkt0Dzw&oe=657050F3" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Georgi Petrov</h5>
                            <p>It's super dumb to travel alone in the car when you can help someone get there faster
                                and more comfortably. Shared Trip saves me a lot of time, nerves and money when
                                organizing a shared trip. I've been using it for over a few months and it's
                                constantly being improved and maintained so it works whenever you need it.
                            </p>
                        </div>
                    </div>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.6435-9/45304557_10217440315102050_1035466651711045632_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=fexsfaNcQa4AX-CEYWx&_nc_ht=scontent.fsof11-1.fna&oh=00_AfABGlV590Mr1Nq6NHyI25D8ITxzJHlBurV9lDl5Hm0W4g&oe=6592C1FB" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Svilen Ivanov</h5>
                            <p>I have been using Shared Trip for several months. I have over 10 shared rides just as
                                a driver. With the confidence that I offer something really good, because of your
                                idea, the way it was implemented, vision, practicality, security and reliability, I
                                recommend it to my friends and relatives.
                            </p>
                        </div>
                    </div>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.18169-9/20664184_1577679205640807_7878936832495842299_n.jpg?stp=c0.53.480.480a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=nOVORtIDOPoAX-G_d6o&_nc_ht=scontent.fsof11-1.fna&oh=00_AfA1oIhHAACyMSdt_lVIGMmvxN8QrXxpwh5M526TAhOGVQ&oe=658D8431" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Milena Mandjoukuva</h5>
                            <p>The Shared trip app gives its users a great opportunity to organize and share their
                                travel for the respective destination. The possibility of general chat in the closed
                                group for the specific carpool further facilitates the coordination between the
                                travelers. Travel is fast, easy and convenient with Shared Trip!
                            </p>
                        </div>
                    </div>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.6435-9/32976668_1601185786646041_7557653672151220224_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=JOjjXjDmck0AX-8P4no&_nc_ht=scontent.fsof11-1.fna&oh=00_AfDYKOJfI9eKJLdpvVaXkkRXL6SkRbhNM-_NM25Wtk6kiw&oe=658D67F3" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Filip Zidarov</h5>
                            <p>Through Shared Trip, things are more synchronized like day and time, you don't have
                                to stay on Facebook and constantly scroll through some time, which saves a lot of
                                time. Importantly, it's a completely separate app and can be used by people without
                                Facebook to organize their carpool, which is great.
                            </p>
                        </div>
                    </div>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t1.18169-9/10666060_362001067284303_8116683269297877337_n.jpg?stp=dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=518VqylvLe0AX_iNIWc&_nc_ht=scontent.fsof11-1.fna&oh=00_AfCI1V9s89yXLwo7PRmrZhrucZ_K6vM_Abk6EGmZgMC1UA&oe=658D7F61" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Jivka Stoycheva</h5>
                            <p>I have been using the app as it has been, first as a passenger and then with my
                                husband as the driver. I like it a lot because it gives you the opportunity to
                                organize your shared trip at the time you want, safe, fast and practical! I prefer
                                it over public transport in terms of time saved and convenience!
                            </p>
                        </div>
                    </div>

                    <div className={styles['user-card']}>
                        <div className={styles['user-card-media']}>
                            <img src="https://scontent.fsof11-1.fna.fbcdn.net/v/t31.18172-8/14114906_10205406480479799_1077856341855556677_o.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=lf1a_UlWJbIAX8wd3Kl&_nc_ht=scontent.fsof11-1.fna&oh=00_AfBGJVYmtByaGTmdn9IL_7hkN3GhxcRiyWj82h9P40BA0A&oe=658D70BA" alt="profile-pic" />
                        </div>
                        <div className={styles['user-card-content']}>
                            <h5>Ivelin Raykov</h5>
                            <p>I've been using Rideshare since early 2023, mostly as a driver. I always travel for work. The app beats any Facebook travel group because it saves me trouble with travelers. The big advantage for me is that when I go on a trip with someone, I can look at their profile, people's ratings of them and turn them down if needed.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}