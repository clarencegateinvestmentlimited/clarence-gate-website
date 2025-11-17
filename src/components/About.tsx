import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface StatItemProps {
  target: number;
  label: string;
  hasM?: boolean;
}

const StatItem = ({ target, label, hasM }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="stat-item text-left">
      <div className="stat-number font-raleway font-semibold text-5xl lg:text-[80px] leading-[100%] tracking-normal transition-all duration-400 opacity-100">
        {count}
        {hasM && "M"}
        <span className="plus text-accent font-raleway font-semibold text-[60px] leading-[100%] tracking-normal">
          +
        </span>
      </div>
      <div className="stat-label text-[1.1rem] text-muted-foreground">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="px-4 md:px-[8rem] lg:pt-[140px] pt-[100px] pb-20">
      <div className="section-header flex items-center gap-4 pb-8">
        <img src="/Images/Vector 2.png" alt="" />
        <h3 className="font-raleway font-semibold text-[20px] leading-[100%] tracking-normal text-center">
          ABOUT US
        </h3>
      </div>
      <div className="about grid md:grid-cols-2 gap-16 justify-between items-start border-b border-border pb-8">
        <div className="about-content">
          <h2 className="font-raleway font-semibold text-[28px] md:text-[40px] leading-[1.45] tracking-normal max-w-[338px] mb-8">
            About Our Investment Firm
          </h2>
          <p className="font-normal text-[17px] md:text-[19px] leading-[1.58] tracking-normal max-w-[476px] mb-8">
            Clarence Gate is a forward-thinking investment holding company
            building sustainable enterprises across Africa's most vital sectors:
            real estate, energy, finance, hospitality, and trade, creating
            long-term value for partners, investors, and communities.
          </p>
          <Link
            to="/about"
            className="read-more flex items-center font-raleway font-normal text-[20px] leading-[100%] text-foreground tracking-normal pb-8 no-underline hover:text-accent transition-colors duration-300"
          >
            <span className="border-b border-foreground pb-2">Read more</span>
            <img src="/Images/arrow-right.png" alt="" className="ml-2 h-5" />
          </Link>
        </div>
        <div className="stats grid grid-cols-2 gap-12 font-[Raleway]">
          <StatItem target={10} label="Companies" />
          {/* <StatItem target={5} label="Team Members" /> */}
          {/* <StatItem target={50} label="Capital Investments" hasM /> */}
          <StatItem target={10} label="Years" />
        </div>
      </div>
    </section>
  );
};


export default About;
