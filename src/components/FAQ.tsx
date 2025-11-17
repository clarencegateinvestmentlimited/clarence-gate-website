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
    question: "Are you actively doing investments?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus venenatis proin nunc donec venenatis. We are actively evaluating investment opportunities across various sectors.",
  },
  {
    id: "2",
    number: "02",
    question: "What is the typical investment amount?",
    answer:
      "Our investment amounts vary depending on the project scope and requirements. We typically invest between $100K to $10M depending on the opportunity and growth potential.",
  },
  {
    id: "3",
    number: "03",
    question: "Are you open for partnership?",
    answer:
      "Yes, we are always open to discussing strategic partnerships that align with our investment philosophy and can create mutual value for both parties.",
  },
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
            Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus
            venenatis proin nunc donec venenatis.
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
