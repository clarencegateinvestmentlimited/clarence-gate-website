import IndustryCard from "./IndustryCard";
import  PortfolioSection from "./IndustryCard2"

const Industries = () => {
  const topCards = [
    {
      icon: "/Images/building-4 copy.png",
      title: "Real Estate",
      description:
        "We are passionate about creating sustainable developments that redefine modern living and urban infrastructure.",
      details: [
        {
          image: "/Images/Clarence Gate Logo.png",
          title: "Dealo Global Services Limited",
          year: "2022",
        },
        {
          image: "/Images/Card2.jpg",
          title: "Dealo Energy Limited",
          year: "2009",
          imageClass: "ligt",
        },
      ],
    },
    {
      icon: "/Images/coin.png",
      title: "Finance & Insurance",
      description:
        "Empowering financial systems and providing innovative risk solutions.",
      details: [
        {
          image: "/Images/TURBOSERV_LOGO_4x-100-removebg-preview.png",
          title: "Turboserv Insurance Limited",
          year: "2022",
          imageClass: "teal",
        },
      ],
    },
    {
      icon: "/Images/lamp-on.png",
      title: "Hospitality",
      description:
        "Building brands that deliver exceptional guest experiences across Africa's destinations.",
      details: [
        {
          image: "/Images/Card4.jpg",
          title: "Dealo Global Services Limited",
          year: "2022",
        },
        {
          image: "/Images/Card5.jpg",
          title: "Dealo Energy Limited",
          year: "2009",
          imageClass: "ligt",
        },
      ],
    },
  ];

  const bottomCards = [
    {
      icon: "/Images/diagram.png",
      title: "Technology",
      description:
        "Innovating digital solutions that transform businesses and empower communities.",
      details: [
        {
          image: "/Images/Card8.jpg",
          title: "20B Limited",
          year: "2022",
        },
      ],
    },
    {
      icon: "/Images/building-4 copy.png",
      title: "Consulting",
      description:
        "Strategic advisory services that drive growth and operational excellence.",
      details: [
        {
          image: "/Images/Card7.jpg",
          title: "Dealo Global Services Limited",
          year: "2022",
        },
        {
          image: "/Images/Card9.jpg",
          title: "Dealo Energy Limited",
          year: "2009",
          imageClass: "ligt",
        },
      ],
    },
  ];

  return (
    <section className="focuses text-center px-4 md:px-8 py-16" id="portfolio">
      <div className="section-label flex items-center justify-center gap-4 mb-8 text-[32px]">
        <img src="/Images/Vector 2.png" alt="" className="h-5" />
        <h4 className="font-raleway font-semibold text-[20px]">Focuses</h4>
      </div>
      <h2 className="section-title font-raleway font-semibold text-[36px] md:text-[50px] leading-[1.16] tracking-normal text-center mb-12">
        Industries We Invest In
      </h2>
      <div className="cards-container flex flex-col items-center gap-8 max-w-[1200px] mx-auto">
        {/* <div className="top-cards flex flex-wrap justify-center gap-6 w-full">
          {topCards.map((card, index) => (
            <IndustryCard key={index} {...card} />
          ))}
        </div>
        <div className="bottom-row flex flex-wrap justify-center gap-6 w-full max-w-[750px]">
          {bottomCards.map((card, index) => (
            <IndustryCard key={index} {...card} />
          ))}
        </div> */}

        <PortfolioSection/>
      </div>
    </section>
  );
};

export default Industries;
