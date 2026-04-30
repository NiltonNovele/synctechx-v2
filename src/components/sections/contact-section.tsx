"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Loader,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

/* ---------------------------------------------------------
   Schema
--------------------------------------------------------- */
const contactSchema = z.object({
  firstName: z.string().min(3, { message: "O nome é obrigatório" }),
  lastName: z.string().optional(),
  company: z.string().min(2, { message: "O nome da empresa é obrigatório" }),
  email: z.string().email({ message: "Insira um e-mail válido" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  interests: z.array(z.string()).min(1, {
    message: "Selecione pelo menos uma área de interesse",
  }),
  budgetMin: z.string().optional(),
  budgetMax: z.string().optional(),
  currency: z.string().min(1, { message: "Selecione a moeda" }),
  projectDetails: z
    .string()
    .min(10, { message: "Descreva o projecto com pelo menos 10 caracteres" }),
  urgency: z.string().min(1, { message: "Selecione a urgência" }),
  companySize: z.string().min(1, { message: "Selecione o tamanho da empresa" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  interests: [],
  budgetMin: "",
  budgetMax: "",
  currency: "MZN",
  projectDetails: "",
  urgency: "",
  companySize: "",
};

const interestOptions = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "SEO",
  "Content Creation",
  "E-commerce",
  "Analytics",
  "Consulting",
  "AI Automation",
  "Branding",
  "Systems Integration",
];

const steps = [
  "Dados",
  "Projecto",
  "Orçamento",
  "Enviar",
];

function ContactFields({
  form,
  isSubmitting,
  onSubmit,
  desktop = false,
}: {
  form: UseFormReturn<ContactFormValues>;
  isSubmitting: boolean;
  onSubmit: (data: ContactFormValues) => void;
  desktop?: boolean;
}) {
  const selectedInterests = form.watch("interests");

  const toggleInterest = (interest: string) => {
    const current = form.getValues("interests") || [];
    if (current.includes(interest)) {
      form.setValue(
        "interests",
        current.filter((item) => item !== interest),
        { shouldValidate: true }
      );
    } else {
      form.setValue("interests", [...current, interest], {
        shouldValidate: true,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div
          className={
            desktop ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-5"
          }
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="O seu nome"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Empresa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nome da empresa"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="o.seu@email.com"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+258 84 000 0000"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Serviço principal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white focus:border-blue-500">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-white/10 bg-black/95 text-white">
                  <SelectItem value="website">Website Profissional</SelectItem>
                  <SelectItem value="ecommerce">Loja Online / E-commerce</SelectItem>
                  <SelectItem value="system">Sistema Web Personalizado</SelectItem>
                  <SelectItem value="mobile">Aplicação Mobile</SelectItem>
                  <SelectItem value="marketing">Marketing Digital</SelectItem>
                  <SelectItem value="ai">Automação com IA</SelectItem>
                  <SelectItem value="consulting">Consultoria Tecnológica</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* s */}

        <div
          className={
            desktop ? "grid grid-cols-1 md:grid-cols-3 gap-5" : "space-y-5"
          }
        >
          <FormField
            control={form.control}
            name="budgetMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Orçamento mínimo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Min"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetMax"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Orçamento máximo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Max"
                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Moeda</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white focus:border-blue-500">
                      <SelectValue placeholder="Moeda" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-white/10 bg-black/95 text-white">
                    <SelectItem value="MZN">MZN</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="ZAR">ZAR</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div
          className={
            desktop ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-5"
          }
        >
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Tamanho da empresa</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white focus:border-blue-500">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-white/10 bg-black/95 text-white">
                    <SelectItem value="1-10">1-10 colaboradores</SelectItem>
                    <SelectItem value="11-50">11-50 colaboradores</SelectItem>
                    <SelectItem value="51-200">51-200 colaboradores</SelectItem>
                    <SelectItem value="201-500">201-500 colaboradores</SelectItem>
                    <SelectItem value="501+">501+ colaboradores</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urgency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Urgência</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white focus:border-blue-500">
                      <SelectValue placeholder="Quando pretende iniciar?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-white/10 bg-black/95 text-white">
                    <SelectItem value="immediate">Imediatamente</SelectItem>
                    <SelectItem value="1-3 months">Nos próximos 1-3 meses</SelectItem>
                    <SelectItem value="researching">Ainda estou a avaliar</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">
                Conte-nos sobre o projecto
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva o projecto, objectivos, funcionalidades, prazo e qualquer detalhe importante..."
                  className="min-h-[150px] resize-none rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="group h-14 w-full rounded-full bg-blue-500 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-400 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar pedido
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
export function ContactSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const desktopForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const mobileForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const mobileValues = mobileForm.watch();

  const progress = useMemo(() => {
    return Math.min((currentStep / steps.length) * 100, 100);
  }, [currentStep]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    })();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const submitForm = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = {
        fullName: `${data.firstName} ${data.lastName || ""}`.trim(),
        email: data.email,
        phone: data.phone || "",
        companyName: data.company,
        companySize: data.companySize,
        role: "Contact form lead",
        aiChallenges: data.projectDetails,
        currentProcess: data.service,
        biggestChallenge: data.interests.join(", "),
        budget: `${data.budgetMin || "N/A"} - ${data.budgetMax || "N/A"} ${
          data.currency
        }`,
        urgency: data.urgency,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message || "Obrigado! O seu pedido foi enviado com sucesso."
        );
        setCurrentStep(5);
        desktopForm.reset(defaultValues);
        mobileForm.reset(defaultValues);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Ocorreu um erro ao enviar. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Ocorreu um erro ao enviar. Verifique a sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextMobileStep = async () => {
    let fields: (keyof ContactFormValues)[] = [];

    if (currentStep === 1) {
      fields = ["firstName", "company", "email", "phone"];
    }

    if (currentStep === 2) {
      fields = ["service", "interests"];
    }

    if (currentStep === 3) {
      fields = ["budgetMin", "budgetMax", "currency", "companySize", "urgency"];
    }

    const valid = await mobileForm.trigger(fields);

    if (valid) {
      setCurrentStep((step) => Math.min(step + 1, 4));
    }
  };

  const previousMobileStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const toggleMobileInterest = (interest: string) => {
    const current = mobileForm.getValues("interests") || [];
    if (current.includes(interest)) {
      mobileForm.setValue(
        "interests",
        current.filter((item) => item !== interest),
        { shouldValidate: true }
      );
    } else {
      mobileForm.setValue("interests", [...current, interest], {
        shouldValidate: true,
      });
    }
  };

  const resetAfterSuccess = () => {
    setCurrentStep(1);
    setSubmitStatus("idle");
    setSubmitMessage("");
    desktopForm.reset(defaultValues);
    mobileForm.reset(defaultValues);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium text-white/75">
              Vamos construir algo com impacto
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Vamos transformar a sua ideia numa solução digital real.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Preencha o formulário ou agende uma reunião de 30 minutos para
            falarmos sobre websites, sistemas, lojas online, automações e
            estratégia digital.
          </p>
        </div>

        <div
          className={`grid gap-8 transition-all duration-700 lg:grid-cols-[0.9fr_1.4fr] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/20">
                <CalendarDays className="h-7 w-7 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Agende uma reunião
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Escolha um horário no Cal.com e fale directamente connosco sobre
                o seu projecto, orçamento, prazos e melhor solução técnica.
              </p>

              <button
                data-cal-namespace="30min"
                data-cal-link="nilton-novele-ecxmm3/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Agendar agora
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-6 grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Localização</p>
                    <p className="text-sm text-white/55">Maputo, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Telefone</p>
                    <p className="text-sm text-white/55">+258 84 752 9665</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <p className="text-sm text-white/55">info@synctechx.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  icon: ShieldCheck,
                  title: "Confidencial",
                  text: "Os seus dados são tratados com segurança.",
                },
                {
                  icon: CheckCircle,
                  title: "Sem compromisso",
                  text: "Primeira conversa apenas para entender o projecto.",
                },
                {
                  icon: Clock,
                  title: "30 minutos",
                  text: "Reunião rápida, objectiva e estratégica.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <item.icon className="mb-3 h-5 w-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block xl:p-8">
            {submitStatus === "success" ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-5 h-16 w-16 text-emerald-400" />
                <h3 className="text-3xl font-semibold text-white">
                  Pedido enviado com sucesso!
                </h3>
                <p className="mt-4 max-w-md text-white/60">
                  {submitMessage}
                </p>
                <Button
                  onClick={resetAfterSuccess}
                  className="mt-8 rounded-full bg-blue-500 px-8 py-6 text-black hover:bg-blue-400"
                >
                  Enviar outro pedido
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-white">
                    Let’s make an impact
                  </h3>
                  <p className="mt-2 text-white/55">
                    Conte-nos os detalhes e entraremos em contacto.
                  </p>
                </div>

                <ContactFields
                  form={desktopForm}
                  isSubmitting={isSubmitting}
                  onSubmit={submitForm}
                  desktop
                />

                {submitStatus === "error" && (
                  <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                    {submitMessage}
                  </p>
                )}
              </>
            )}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden">
            {submitStatus === "success" || currentStep === 5 ? (
              <div className="py-8 text-center">
                <CheckCircle className="mx-auto mb-5 h-16 w-16 text-emerald-400" />
                <h3 className="text-2xl font-semibold text-white">
                  Pedido enviado!
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-white/60">
                  {submitMessage || "Obrigado! Entraremos em contacto em breve."}
                </p>
                <Button
                  onClick={resetAfterSuccess}
                  className="mt-7 rounded-full bg-blue-500 px-8 py-6 text-black hover:bg-blue-400"
                >
                  Enviar outro pedido
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between text-xs text-white/55">
                    <span>
                      Passo {currentStep} de {steps.length}
                    </span>
                    <span>{steps[currentStep - 1]}</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <Form {...mobileForm}>
                  <form
                    onSubmit={mobileForm.handleSubmit(submitForm)}
                    className="space-y-5"
                  >
                    {currentStep === 1 && (
                      <>
                        <h3 className="text-2xl font-semibold text-white">
                          Os seus dados
                        </h3>

                        <FormField
                          control={mobileForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Nome</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="O seu nome"
                                  className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={mobileForm.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Empresa
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nome da empresa"
                                  className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={mobileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="o.seu@email.com"
                                  className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={mobileForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Telefone
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+258 84 000 0000"
                                  className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    {currentStep === 2 && (
                      <>
                        <h3 className="text-2xl font-semibold text-white">
                          Sobre o projecto
                        </h3>

                        <FormField
                          control={mobileForm.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Serviço principal
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white">
                                    <SelectValue placeholder="Selecione um serviço" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="border-white/10 bg-black/95 text-white">
                                  <SelectItem value="website">
                                    Website Profissional
                                  </SelectItem>
                                  <SelectItem value="ecommerce">
                                    Loja Online / E-commerce
                                  </SelectItem>
                                  <SelectItem value="system">
                                    Sistema Web Personalizado
                                  </SelectItem>
                                  <SelectItem value="mobile">
                                    Aplicação Mobile
                                  </SelectItem>
                                  <SelectItem value="marketing">
                                    Marketing Digital
                                  </SelectItem>
                                  <SelectItem value="ai">
                                    Automação com IA
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <div>
                          <FormLabel className="text-white/80">
                            Interessado em
                          </FormLabel>

                          <div className="mt-3 grid grid-cols-2 gap-3">
                            {interestOptions.slice(0, 10).map((interest) => {
                              const active =
                                mobileValues.interests.includes(interest);

                              return (
                                <button
                                  key={interest}
                                  type="button"
                                  onClick={() => toggleMobileInterest(interest)}
                                  className={`rounded-2xl border px-3 py-4 text-xs transition-all ${
                                    active
                                      ? "border-blue-400 bg-blue-500/20 text-blue-200"
                                      : "border-white/10 bg-white/[0.05] text-white/70"
                                  }`}
                                >
                                  {interest}
                                </button>
                              );
                            })}
                          </div>

                          {mobileForm.formState.errors.interests?.message && (
                            <p className="mt-2 text-sm text-red-400">
                              {mobileForm.formState.errors.interests.message}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    {currentStep === 3 && (
                      <>
                        <h3 className="text-2xl font-semibold text-white">
                          Orçamento e prazo
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          <FormField
                            control={mobileForm.control}
                            name="budgetMin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/80">
                                  Mínimo
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Min"
                                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={mobileForm.control}
                            name="budgetMax"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white/80">
                                  Máximo
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Max"
                                    className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={mobileForm.control}
                          name="currency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Moeda</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white">
                                    <SelectValue placeholder="Moeda" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="border-white/10 bg-black/95 text-white">
                                  <SelectItem value="MZN">MZN</SelectItem>
                                  <SelectItem value="USD">USD</SelectItem>
                                  <SelectItem value="ZAR">ZAR</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={mobileForm.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Tamanho da empresa
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="border-white/10 bg-black/95 text-white">
                                  <SelectItem value="1-10">
                                    1-10 colaboradores
                                  </SelectItem>
                                  <SelectItem value="11-50">
                                    11-50 colaboradores
                                  </SelectItem>
                                  <SelectItem value="51-200">
                                    51-200 colaboradores
                                  </SelectItem>
                                  <SelectItem value="201-500">
                                    201-500 colaboradores
                                  </SelectItem>
                                  <SelectItem value="501+">
                                    501+ colaboradores
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={mobileForm.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Urgência
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-14 rounded-2xl border-white/10 bg-white/[0.06] text-white">
                                    <SelectValue placeholder="Quando pretende iniciar?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="border-white/10 bg-black/95 text-white">
                                  <SelectItem value="immediate">
                                    Imediatamente
                                  </SelectItem>
                                  <SelectItem value="1-3 months">
                                    Nos próximos 1-3 meses
                                  </SelectItem>
                                  <SelectItem value="researching">
                                    Ainda estou a avaliar
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    {currentStep === 4 && (
                      <>
                        <h3 className="text-2xl font-semibold text-white">
                          Últimos detalhes
                        </h3>

                        <FormField
                          control={mobileForm.control}
                          name="projectDetails"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">
                                Conte-nos sobre o projecto
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Descreva o projecto, objectivos, funcionalidades e prazo..."
                                  className="min-h-[170px] resize-none rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-white/35"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </>
                    )}

                    {submitStatus === "error" && (
                      <p className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                        {submitMessage}
                      </p>
                    )}

                    <div className="flex gap-3 pt-2">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          onClick={previousMobileStep}
                          variant="outline"
                          className="h-14 flex-1 rounded-full border-white/15 bg-transparent text-white hover:bg-white/10"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Voltar
                        </Button>
                      )}

                      {currentStep < 4 ? (
                        <Button
                          type="button"
                          onClick={nextMobileStep}
                          className="h-14 flex-1 rounded-full bg-blue-500 text-black hover:bg-blue-400"
                        >
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="h-14 flex-1 rounded-full bg-blue-500 text-black hover:bg-blue-400 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}