import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Send, User, Phone, Mail, MapPin, CalendarDays, MessageSquare, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { BUSINESS, SERVICES, buildWhatsAppLink } from "@/lib/site-data";

const fieldClass = "h-12 rounded-xl border-border bg-cards focus-visible:ring-primary";

export function Contact() {
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { name: "", phone: "", email: "", address: "", service: "", date: "", message: "" },
  });

  const onSubmit = (data) => {
    const link = buildWhatsAppLink(data);
    toast.success("Opening WhatsApp…", { description: "Your enquiry is ready to send to our team." });
    window.open(link, "_blank", "noopener,noreferrer");
    reset();
  };

  const contactCards = [
    { icon: User, label: "Director", value: BUSINESS.director },
    { icon: Phone, label: "Phone", value: BUSINESS.phone, href: BUSINESS.phoneHref },
    { icon: Mail, label: "Email", value: BUSINESS.email, href: BUSINESS.emailHref },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="bg-cards py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Get In Touch</SectionLabel>
          <Reveal>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
              Request your <span className="text-primary">free quote.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Fill in the form and we&apos;ll open a pre-filled WhatsApp message so you can send your enquiry in one tap.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-testid="enquiry-form"
              className="rounded-[2rem] border border-border bg-white p-6 shadow-card md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-secondary">Full Name *</Label>
                  <Input id="name" data-testid="input-name" placeholder="Jane Smith" className={fieldClass} {...register("name", { required: "Please enter your name" })} />
                  {errors.name && <p className="text-xs font-medium text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-semibold text-secondary">Phone Number *</Label>
                  <Input id="phone" data-testid="input-phone" placeholder="0400 000 000" className={fieldClass} {...register("phone", { required: "Please enter your phone" })} />
                  {errors.phone && <p className="text-xs font-medium text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-secondary">Email</Label>
                  <Input id="email" type="email" data-testid="input-email" placeholder="jane@email.com" className={fieldClass} {...register("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="font-semibold text-secondary">Address</Label>
                  <Input id="address" data-testid="input-address" placeholder="Suburb, State" className={fieldClass} {...register("address")} />
                </div>
                <div className="space-y-2">
                  <Label className="font-semibold text-secondary">Service Required *</Label>
                  <Controller
                    control={control}
                    name="service"
                    rules={{ required: "Please choose a service" }}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger data-testid="select-service" className="h-12 rounded-xl border-border bg-cards focus:ring-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          {SERVICES.map((s) => (
                            <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                          ))}
                          <SelectItem value="Other / Not sure">Other / Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && <p className="text-xs font-medium text-destructive">{errors.service.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="font-semibold text-secondary">Preferred Date</Label>
                  <Input id="date" type="date" data-testid="input-date" className={fieldClass} {...register("date")} />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message" className="font-semibold text-secondary">Message</Label>
                <Textarea id="message" data-testid="input-message" rows={4} placeholder="Tell us a little about what you need…" className="rounded-xl border-border bg-cards focus-visible:ring-primary" {...register("message")} />
              </div>

              <button
                type="submit"
                data-testid="submit-enquiry-btn"
                disabled={isSubmitting}
                className="group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-primary py-4 text-base font-bold text-white shadow-cta transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                Send Enquiry via WhatsApp
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                We&apos;ll never share your details. Response usually within a few hours.
              </p>
            </form>
          </Reveal>

          {/* Details + map */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {contactCards.map((c) => (
                <Reveal key={c.label}>
                  <a
                    href={c.href || undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-shadow duration-300 hover:shadow-card"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <c.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                      <p className="truncate font-heading text-lg font-bold text-secondary">{c.value}</p>
                    </div>
                    {c.href && <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  </a>
                </Reveal>
              ))}

              <Reveal>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/30 text-secondary">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service Region</p>
                    <p className="font-heading text-lg font-bold text-secondary">{BUSINESS.region}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-border shadow-card" data-testid="google-map">
                  <iframe
                    title="Service area map"
                    src="https://maps.google.com/maps?q=Sydney%20NSW%20Australia&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
