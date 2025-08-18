import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const servicesData = [
        {
            title: "Web Development",
            description:
                "We build responsive and high-performance websites that bring your ideas to life.",
            icon: assets.ads_icon,
        },
        {
            title: "Mobile App Development",
            description:
                "We create stunning mobile applications that provide seamless user experiences.",
            icon: assets.marketing_icon,
        },
        {
            title: "UI/UX Design",
            description:
                "We design user-friendly interfaces that enhance the overall user experience.",
            icon: assets.content_icon,
        },
        {
            title: "SEO Optimization",
            description:
                "We optimize your website to rank higher in search engine results and attract more organic traffic.",
            icon: assets.social_icon,
        },
    ];

    return (
        <div
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <img
                src={assets.bgImage2}
                alt=""
                className="absolute -top-110 -left-70 -z-1 dark:hidden"
            />

            <Title
                title="How can we help?"
                desc="Discover how our team can turn your vision into powerful websites, mobile apps, and digital solutions that drive results."
            />
            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Services;
