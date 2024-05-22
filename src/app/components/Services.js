// components/Services.js
"use client";

import Image from 'next/image';
import web from "../Assets/webdev.png";
import graphic from "../Assets/graphicdesigning.png";
import hiring from "../Assets/hiring.png";
import business from "../Assets/businessmanagement.jpg";
import social from "../Assets/socialmedia.png";
import { useRouter } from 'next/navigation';


import React from 'react'

const Services = () => {

    const router = useRouter();

    const gotopaymentpage = () => {
        router.push("/paymentsystem");
    }

    return (
        <div>
            <div className="service-name">OUR SERVICES</div>
            <div className="services1">
                <div className="service">
                    <div className="heading1">WEB DESIGNING</div>
                </div>
                <div className="service">
                    <div className="heading2">SOCIAL MEDIA MANAGEMENT</div>
                </div>
                <div className="service">
                    <div className="heading3 ">GRAPHIC DESIGNING</div>
                </div>
                <div className="service">
                    <div className="heading4">BUSINESS MANAGEMENT</div>
                </div>
                <div className="service">
                    <div className="heading5">HIRING AND RECRUITMENT</div>
                </div>
            </div>

            <br /> <br />

            <div className="services">
                <div className="web">
                    <div>
                        <div className="heading1 fs-44">WEB DESIGNING</div>
                        <hr className="hr-1" />
                    </div>
                    <div className="servicesflex">
                        <div className="img1">
                            <Image className="default" src={web}
                                alt='Webdev' />
                        </div>
                        <div className="content1">
                            <p className="para1">Welcome to BasicBrush Studios, Your premier partner in story telling and brand
                                elevation.
                                Our passion-filled team specializes in crafting campaigns that delivers tangible results .With
                                expertise
                                in Social media management, web management, and Business management, we ensure that your brands
                                story
                                resonates deeply with your
                                audience, exceeding expectations and driving growth. Join us on this journey of creativity and
                                success.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="web">
                    <div>
                        <div className="heading2 fs-44">SOCIAL MEDIA MANAGEMENT</div>
                        <hr className="hr-1" />
                    </div>
                    <div className="servicesflex flip">
                        <div className="img1">
                            <Image className="default" src={social}
                                alt='Social Media Management' />
                        </div>
                        <div className="content1">
                            <p className="para1">Empower your startup’s with Strategic social media management !!

                                Ready to maximize your online impact ? Our seasoned team specializes in crafting tailored social
                                media strategies to engage your audience, amplify your brand, and deliver tangible results. Lets
                                collaborate to elevate your online presence and achieve your business goals. Connect with us
                                today and unlock the full potential of social media for your startup


                            </p>
                        </div>
                    </div>
                </div>
                <div className="web">
                    <div>
                        <div className="heading3 fs-44">GRAPHICS DESIGNING</div>
                        <hr className="hr-1" />
                    </div>
                    <div className="servicesflex">
                        <div className="img1">
                            <Image className="default" src={graphic}
                                alt='Graphic Designing' />
                        </div>
                        <div className="content1">
                            <p className="para1">Empower your startup with custom graphic design solution!!
                                Looking to make a memorable impression?? Our skilled designers offered tailored graphic design
                                services to amplify your brands identity. From eye-catching logos to impactful marketing
                                materials , we’ll craft visuals that resonates with your audience. Let’s collaborate to bring
                                your vision to life and create something truly exceptional. Elevate your startup’s brand with
                                our expert graphic design solutions!!

                            </p>
                        </div>
                    </div>
                </div>
                <div className="web">
                    <div>
                        <div className="heading4 fs-44">BUSINESS MANAGEMENT</div>
                        <hr className="hr-1" />
                    </div>
                    <div className="servicesflex flip">
                        <div className="img1">
                            <Image className="default" src={business}
                                alt='Business management' />
                        </div>
                        <div className="content1">
                            <p className="para1">Empower your startup’s with Tailored business management solutions!!
                                Ready to take your startup to next level ? Our comprehensive business management services are
                                designed to streamline your operations and boost efficiency. From strategic planning to seamless
                                implementation, we provide the expertise and support you need to achieve your goals with
                                precision. Let’s collaborate and elevate your business together. Explore our solutions today!!

                            </p>
                        </div>
                    </div>
                </div>
                <div className="web">
                    <div>
                        <div className="heading5 fs-44">HIRING AND RECRUITMENT</div>
                        <hr className="hr-1" />
                    </div>
                    <div className="servicesflex">
                        <div className="img1">
                            <Image className="default" src={hiring}
                                alt='Hiring' />
                        </div>
                        <div className="content1">
                            <p className="para1">Join Our Thriving Team and Ignite Your Career!

                                Discover exhilarating career prospects with us! We're a forward-thinking startup committed to
                                fostering growth, innovation, and excellence. Explore diverse opportunities tailored to your
                                skills and aspirations. Embark on a fulfilling journey with a company poised for success. Your
                                future begins here ! join us and be part of something remarkable!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <button className='btn' onClick={gotopaymentpage} >Get services</button>
            </div>
        </div>
    )
}

export default Services


