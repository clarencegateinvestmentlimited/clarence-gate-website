import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    number: "01",
    question: "What does Clarence Gate Group do?",
    answer:
      "Clarence Gate Group is a diversified investment holding company building sustainable enterprises across Africa’s most dynamic sectors, including Real Estate, Finance & Insurance, Hospitality, Trading, and Energy & Infrastructure. We identify, invest in, and support high-potential businesses to create long-term value.",
  },
 {
  id: "2",
  number: "02",
  question: "How can I become an investment partner?",
  answer: (
    <>
      We welcome conversations with investors and partners who share our vision for sustainable growth. Please reach out via our Get in Touch form, or contact us directly at{" "}
      <a href="mailto:info@clarencegategroup.com" className="text-teal-300 hover:underline">
        info@clarencegategroup.com
      </a>{" "}
      to explore partnership opportunities.
    </>
  ),
}

  {
    id: "3",
    number: "03",
    question: "What industries do you invest in?",
    answer:
      "We focus on sectors that drive Africa’s economic growth: Real Estate, Finance & Insurance, Hospitality, Trading, Energy & Infrastructure. For each sector, we invest in innovative businesses that demonstrate scalability, sustainability, and long-term value creation.",
  },
  {
    id: "4",
    number: "04",
    question: "Can I visit your offices?",
    answer:
      "Yes! We welcome scheduled visits from partners and investors. Please refer to our Visit Our Office section or contact us to arrange a meeting.",
  },
{
  id: "5",
  number: "05",
  question: "Who can I contact for media inquiries?",
  answer: (
    <>
      For media or press-related inquiries, please reach out to{" "}
      <a href="mailto:info@clarencegategroup.com" className="text-teal-300 hover:underline">
        info@clarencegategroup.com
      </a>
      , and our communications team will assist you.
    </>
  ),
}

];

const FAQ = () => {
  return (
    <section className="px-[8%] py-24 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
           Explore answers to frequently asked questions about Clarence Gate Group, our investments, and the opportunities we offer for collaboration and growth

          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-white/10 pb-6"
            >
              <AccordionTrigger className="hover:no-underline group w-full flex justify-between items-center [&>svg]:hidden">
                <div className="flex items-center gap-12 text-left">
                  <span className="text-[#4ecdc4] text-3xl md:text-4xl font-bold transition-colors">
                    {item.number}
                  </span>
                  <span className="text-lg md:text-xl font-medium">
                    {item.question}
                  </span>
                </div>

                {/* 👇 Custom plus/minus icon */}
                <div className="transition-transform duration-300 group-data-[state=open]:rotate-180">
                  <Plus className="w-5 h-5 text-cyan group-data-[state=open]:hidden" />
                  <Minus className="w-5 h-5 text-cyan hidden group-data-[state=open]:block" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="pl-16 md:pl-20 pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
