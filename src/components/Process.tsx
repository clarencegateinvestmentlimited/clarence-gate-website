import { useEffect, useRef, useState } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string[];
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateStepState = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportMid = window.innerHeight / 2;

      if (rect.top <= viewportMid && rect.bottom > viewportMid) {
        setIsActive(true);
        setIsPast(false);
      } else if (rect.bottom <= viewportMid) {
        setIsActive(false);
        setIsPast(true);
      } else {
        setIsActive(false);
        setIsPast(false);
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStepState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateStepState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
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

  return (
    <section
      ref={ref}
      className={`process-step py-16 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-30"
      } ${isActive ? "scale-100" : "scale-95"} ${isPast ? "opacity-50" : ""}`}
    >
      <div className={`step-number font-raleway font-bold text-[80px] md:text-[120px] leading-none mb-6 transition-colors duration-300 ${
        isActive ? "text-accent" : "text-muted"
      }`}>
        {number}
      </div>
      <h3 className="font-raleway font-semibold text-[28px] md:text-[36px] mb-6">{title}</h3>
      {description.map((para, index) => (
        <p key={index} className="text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground mb-4 max-w-[700px]">
          {para}
        </p>
      ))}
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: [
        "We identify promising opportunities, visionary founders, and emerging markets with transformative potential.",
        "Through deep industry insight and a forward-looking lens, we uncover ideas that align with Africa's evolving economic and social landscape.",
      ],
    },
    {
      number: "02",
      title: "Research",
      description: [
        "We conduct rigorous due diligence and market analysis to validate each opportunity's strength, scalability, and sustainability. This process allows us to de-risk investments and ensure that every decision is grounded in data, market intelligence, and strategic fit.",
      ],
    },
    {
      number: "03",
      title: "Investments",
      description: [
        "Once opportunities are validated, we deploy capital and strategic support to help our portfolio companies scale and thrive. Beyond funding, we offer operational expertise, strategic partnerships, and governance guidance, ensuring our investments deliver measurable impact and enduring value.",
      ],
    },
  ];

  return (
    <section id="processSection" className="px-4 md:px-[8rem] py-20">
      <div className="process">
        <div className="mb-12">
          <div className="process-content flex items-center gap-4 mb-6">
            <img src="/Images/Vector 2.png" alt="" />
            <h3 className="font-raleway font-semibold text-[20px]">Process</h3>
          </div>
          <h2 className="section-title font-raleway font-semibold text-[36px] md:text-[50px] leading-[1.16]">
            Our Approach
          </h2>
        </div>

        <div className="process-container">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        <div className="spacer-bottom h-[200px]"></div>
      </div>
    </section>
  );
};

export default Process;
