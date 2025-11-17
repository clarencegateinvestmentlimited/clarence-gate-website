import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="hero min-h-[75vh] flex flex-col items-center px-8 pt-[120px] pb-16 md:pt-[200px] text-center relative z-[10]">

      <h1 className="mb-8 max-w-[840px] font-raleway font-bold text-[40px] md:text-[60px] leading-[1.2] tracking-normal">
        Investing in ideas that shape the future
      </h1>
      <p className="leading-[1.6] max-w-[700px] mb-12 text-foreground font-medium text-[18px] md:text-[21px] tracking-normal">
        Born from a vision to transform investments into sustainable
        enterprises, we turn bold ideas into lasting impact.
      </p>
      <div className="cta-buttons flex gap-8 flex-wrap justify-center font-raleway font-normal text-[20px] leading-[100%] tracking-normal">
        <Link to="/contact" className="cta-button inline-flex items-center gap-2 text-foreground no-underline transition-all duration-300 hover:text-accent">
          <div className="cta-button-contact flex items-center gap-1">
            <span className="border-b border-foreground pb-[10px]">Get in Touch</span>
            <img src="/Images/arrow-right.png" alt="" className="h-[35px]" />
          </div>
        </Link>
        <Link to="/portfolio" className="cta-button inline-flex items-center gap-2 text-foreground no-underline transition-all duration-300 hover:text-accent">
          <div className="cta-button-portfolio flex items-center gap-1">
            <span className="border-b border-foreground pb-[10px]">Investment Portfolio</span>
            <img src="/Images/arrow-right.png" alt="" className="h-[35px]" />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex decorative-shape absolute top-[30rem] right-[30%] w-[30vw] max-[1024px]:right-[25%] max-w-[450px] h-auto opacity-50 -z-10 pointer-events-none">
        <img src="/Images/HeroSectionImage.png" alt="" className="w-[500px] h-[400px]" />
      </div>
    </section>
  );
};

export default Hero;
