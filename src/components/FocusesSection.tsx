import React, { useState } from "react";
import "./Focuses.css";

// --- Data Interfaces ---
interface IDetailItem {
  title: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  imageClass?: string;
  link?: string;
}

interface ICardData {
  index: number;
  title: string;
  description: string;
  iconUrl: string;
  arrowUrl: string;
  detailItems: IDetailItem[];
  containerId: string;
  containerStyle: React.CSSProperties;
  link?: string; // 👈 Added for the "Learn more" button
}

// --- Component Data ---
const cardData: ICardData[] = [
  {
    index: 0,
    title: "Real Estate",
    description:
      "We are passionate about creating sustainable developments that redefine modern living and urban infrastructure.",
    iconUrl: "/Images/building-4 copy.png",
    arrowUrl: "/Images/arrow-right.png",
    containerId: "detailCardContainer1",
    containerStyle: { left: 0 },
    link: "/clarence-gate", // 👈 link for Learn more
    detailItems: [
      {
        title: "Dealo Global Services Limited",
        year: "2022",
        imageUrl: "/Images/Clarence Gate Logo.png",
        imageAlt: "Clarence Gate Logo",
        link: "/dealo-global",
      },
      {
        title: "Dealo Energy Limited",
        year: "2009",
        imageUrl: "/Images/dpupdated-logo2.jpg",
        imageAlt: "Dealo Energy",
        imageClass: "ligt",
        link: "/dealo-energy",
      },
    ],
  },
  {
    index: 1,
    title: "Finance & Insurance",
    description:
      "Empowering financial systems and providing innovative risk solutions.",
    iconUrl: "/Images/coin.png",
    arrowUrl: "/Images/arrow-right.png",
    containerId: "detailCardContainer2",
    containerStyle: { left: "-10rem" },
    link: "/turboserv", // 👈 link for Learn more
    detailItems: [
      {
        title: "Turboserv Insurance Limited",
        year: "2022",
        imageUrl:
          "/Images/TURBOSERV_LOGO_4x-100-removebg-preview.png",
        imageAlt: "Turboserv Logo",
        imageClass: "teal",
        link: "/turboserv",
      },
    ],
  },
  {
    index: 2,
    title: "Hospitality",
    description:
      "Building brands that deliver exceptional guest experiences across Africa's destinations.",
    iconUrl: "/Images/lamp-on.png",
    arrowUrl: "/Images/arrow-right.png",
    containerId: "detailCardContainer3",
    containerStyle: { right: "47rem" },
    link: "/dealo-global", // 👈 link for Learn more
    detailItems: [
      {
        title: "Dealo Global Services Limited",
        year: "2022",
        imageUrl: "/Images/Card4.jpg",
        imageAlt: "Hospitality 1",
        link: "/dealo-global",
      },
      {
        title: "Dealo Energy Limited",
        year: "2009",
        imageUrl: "/Images/Card5.jpg",
        imageAlt: "Hospitality 2",
        imageClass: "ligt",
        link: "/dealo-energy",
      },
    ],
  },
  {
    index: 3,
    title: "Technology",
    description:
      "Innovating digital solutions that transform businesses and empower communities.",
    iconUrl: "/Images/diagram.png",
    arrowUrl: "/Images/arrow-right.png",
    containerId: "detailCardContainer4",
    containerStyle: { left: "2rem" },
    link: "/20b-limited", // 👈 link for Learn more
    detailItems: [
      {
        title: "20B Limited",
        year: "2022",
        imageUrl: "/Images/Card8.jpg",
        imageAlt: "Technology 1",
        link: "/dealo-global",
      },
    ],
  },
  {
    index: 4,
    title: "Consulting",
    description:
      "Strategic advisory services that drive growth and operational excellence.",
    iconUrl: "/Images/building-4 copy.png",
    arrowUrl: "/Images/arrow-right.png",
    containerId: "detailCardContainer5",
    containerStyle: { right: "35rem" },
    link: "/dealo-global", // 👈 link for Learn more
    detailItems: [
      {
        title: "Dealo Global Services Limited",
        year: "2022",
        imageUrl: "/Images/Card7.jpg",
        imageAlt: "Consulting 1",
        link: "/dealo-global",
      },
      {
        title: "Dealo Energy Limited",
        year: "2009",
        imageUrl: "/Images/Card9.jpg",
        imageAlt: "Consulting 2",
        imageClass: "ligt",
        link: "/dealo-global",
      },
    ],
  },
];

// Split data for the two rows
const topCards = cardData.slice(0, 3);
const bottomCards = cardData.slice(3, 5);

// --- Main Component ---
const Focuses: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Helper function to render a single card
  const renderCard = (card: ICardData) => (
    <div
      className="card-wrapper"
      key={card.index}
      onMouseEnter={() => setActiveIndex(card.index)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div
        className={`card ${
          activeIndex !== null && activeIndex !== card.index ? "inactive" : ""
        }`}
      >
        <div className="card-content">
          <img src={card.iconUrl} alt="" />
          <img src={card.arrowUrl} alt="" />
        </div>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.description}</p>

        {/* 👇 Each card’s “Learn more” link */}
        <a href={card.link || "#"} className="card-link">
          Learn more
        </a>
      </div>

      <div
        id={card.containerId}
        style={card.containerStyle}
        className="detail-cards-container"
      >
        {card.detailItems.map((item, idx) => (
          <React.Fragment key={item.title + idx}>
            {idx > 0 && <div className="detail-divider"></div>}

            {/* 👇 Each sub-detail card link */}
            <a
              href={item.link || "#"}
              className="detail-card-item"
              target="_blank" // remove if you want it to open in same tab
              rel="noopener noreferrer"
            >
              <div className="detail-image-wrapper">
                <div
                  className={`image-placeholder ${item.imageClass || ""}`}
                >
                  <img src={item.imageUrl} alt={item.imageAlt} />
                </div>
              </div>
              <div className="detail-info">
                <div className="detail-text">
                  <h3 className="detail-title">{item.title}</h3>
                  <p className="detail-year">{item.year}</p>
                </div>
                <img src={card.arrowUrl} alt="" />
              </div>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section className="focuses" id="portfolio">
      <div className="section-label">
        <img src="/Images/Vector 2.png" alt="" />
        <h4>Focuses</h4>
      </div>
      <h2 className="section-title">Industries We Invest In</h2>
      <div className="cards-container">
        <div className="top-cards">{topCards.map(renderCard)}</div>
        <div className="bottom-row">{bottomCards.map(renderCard)}</div>
      </div>
    </section>
  );
};

export default Focuses;
