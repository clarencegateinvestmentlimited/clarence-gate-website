import { useState } from "react";

interface DetailItem {
  image: string;
  title: string;
  year: string;
  imageClass?: string;
}

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
  details: DetailItem[];
}

const IndustryCard = ({ icon, title, description, details }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-wrapper relative flex-1 max-w-[350px] min-w-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`card bg-card border border-white/20 rounded-xl p-8 text-left transition-all duration-300 h-[310px] w-full max-w-[350px] flex flex-col justify-between cursor-pointer ${
          isHovered ? "bg-[#0a4d3c] border-accent -translate-y-1" : ""
        }`}
      >
        <div className="card-content flex justify-between items-start">
          <img src={icon} alt="" className="w-12 h-12" />
          <img src="/Images/arrow-right.png" alt="" className="w-6 h-6" />
        </div>
        <div>
          <h2 className="card-title font-raleway font-semibold text-[28px] mb-4">{title}</h2>
          <p className="card-description text-[16px] leading-[1.5] mb-4 text-muted-foreground">
            {description}
          </p>
          <a href="#" className="card-link text-foreground hover:text-accent transition-colors duration-300">
            Learn more →
          </a>
        </div>
      </div>

      <div
        className={`detail-cards-container absolute top-full left-0 w-full mt-4 bg-card border border-border rounded-xl p-6 transition-all duration-300 z-10 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {details.map((detail, index) => (
          <div key={index}>
            {index > 0 && <div className="detail-divider h-[1px] bg-border my-4"></div>}
            <div className="detail-card-item flex gap-4 items-center">
              <div className="detail-image-wrapper flex-shrink-0">
                <div className={`image-placeholder w-[80px] h-[80px] rounded-lg overflow-hidden bg-muted ${detail.imageClass || ''}`}>
                  <img src={detail.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="detail-info flex-1 flex justify-between items-center">
                <div className="detail-text">
                  <h3 className="detail-title font-raleway font-medium text-[16px] mb-1">
                    {detail.title}
                  </h3>
                  <p className="detail-year text-muted-foreground text-[14px]">{detail.year}</p>
                </div>
                <img src="/Images/arrow-right.png" alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCard;
