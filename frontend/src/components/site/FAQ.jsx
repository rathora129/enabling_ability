import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { FAQS, BUSINESS } from "@/lib/site-data";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Good To Know</SectionLabel>
              <Reveal>
                <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
                  Frequently asked <span className="text-primary">questions.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-8 rounded-3xl bg-cards p-6">
                  <HelpCircle className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <p className="mt-4 font-heading text-lg font-bold text-secondary">Still have questions?</p>
                  <p className="mt-1 text-sm text-muted-foreground">We&apos;re happy to help. Give us a call and we&apos;ll walk you through it.</p>
                  <a href={BUSINESS.phoneHref} data-testid="faq-call-btn" className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-cta transition-transform hover:scale-[1.03]">
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <Accordion type="single" collapsible className="w-full space-y-3" defaultValue="item-0">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    data-testid={`faq-item-${i}`}
                    className="overflow-hidden rounded-2xl border border-border bg-white px-6 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="py-5 text-left font-heading text-lg font-bold text-secondary hover:text-primary hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
