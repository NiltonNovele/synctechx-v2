"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
   Zod Schemas
--------------------------------------------------------- */
const step1Schema = z.object({
  firstName: z.string().min(3, { message: "O primeiro nome é obrigatório" }),
  lastName: z.string().optional(),
});

const step2Schema = z.object({
  email: z.string().email({ message: "Insira um e-mail válido" }),
  phone: z
    .string({
      message:
        "Use 00 antes de digitar o código do seu país e número de telefone. Por exemplo, 0092 300 1234567",
    })
    .optional(),
});

const step3Schema = z.object({
  company: z.string().min(2, { message: "O nome da empresa é obrigatório" }),
  role: z.string().min(2, { message: "Sua função é obrigatória" }),
});

const step4Schema = z.object({
  aiChallenges: z.string().min(5, {
    message:
      "Descreva seus desafios de IA (mínimo de 10 caracteres). Se não tiver certeza, diga 'Não tenho certeza'.",
  }),
});

const step5Schema = z.object({
  industry: z.string().min(2, { message: "Selecione seu setor" }),
  companySize: z
    .string()
    .min(1, { message: "Selecione o tamanho da sua empresa" }),
});

const step6Schema = z.object({
  budget: z
    .string()
    .min(2, { message: "Please enter the investment you're willing to make" }),
  urgency: z.string().min(1, { message: "How urgent is this for you?" }),
});

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
export function ContactSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    aiChallenges: "",
    industry: "",
    companySize: "",
    budget: "",
    urgency: "",
  });

  /* ---------------------------------------------------------
     Init Cal.com
  --------------------------------------------------------- */
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  /* ---------------------------------------------------------
     Intersection Observer (animations)
  --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
     Step Forms
  --------------------------------------------------------- */
  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
    },
  });

  const step2Form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: { email: formData.email, phone: formData.phone },
  });

  const step3Form = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: { company: formData.company, role: formData.role },
  });

  const step4Form = useForm<z.infer<typeof step4Schema>>({
    resolver: zodResolver(step4Schema),
    defaultValues: { aiChallenges: formData.aiChallenges },
  });

  const step5Form = useForm<z.infer<typeof step5Schema>>({
    resolver: zodResolver(step5Schema),
    defaultValues: {
      industry: formData.industry,
      companySize: formData.companySize,
    },
  });

  const step6Form = useForm<z.infer<typeof step6Schema>>({
    resolver: zodResolver(step6Schema),
    defaultValues: { budget: formData.budget, urgency: formData.urgency },
  });

  /* ---------------------------------------------------------
     Step Navigation Logic
  --------------------------------------------------------- */
  const onStep1Submit = (data: z.infer<typeof step1Schema>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const onStep2Submit = (data: z.infer<typeof step2Schema>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };

  const onStep3Submit = (data: z.infer<typeof step3Schema>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(4);
  };

  const onStep4Submit = (data: z.infer<typeof step4Schema>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(5);
  };

  const onStep5Submit = (data: z.infer<typeof step5Schema>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(6);
  };

  const onStep6Submit = async (data: z.infer<typeof step6Schema>) => {
    const finalFormData = { ...formData, ...data };
    setFormData(finalFormData);
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = {
        fullName: `${finalFormData.firstName} ${finalFormData.lastName}`.trim(),
        email: finalFormData.email,
        phone: finalFormData.phone || "",
        companyName: finalFormData.company,
        companySize: finalFormData.companySize,
        role: finalFormData.role,
        aiChallenges: finalFormData.aiChallenges,
        currentProcess: finalFormData.industry,
        biggestChallenge: finalFormData.aiChallenges,
        budget: finalFormData.budget,
        urgency: finalFormData.urgency,
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
          result.message ||
            "Obrigado! Suas informações foram enviadas com sucesso."
        );
        setCurrentStep(7);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message ||
            "Ocorreu um erro ao enviar suas informações. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Ocorreu um erro ao enviar suas informações. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const onFinalSubmit = () => {
    setCurrentStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      aiChallenges: "",
      industry: "",
      companySize: "",
      budget: "",
      urgency: "",
    });
    setSubmitStatus("idle");
    setSubmitMessage("");

    step1Form.reset();
    step2Form.reset();
    step3Form.reset();
    step4Form.reset();
    step5Form.reset();
    step6Form.reset();
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full border border-white/10 bg-white/5">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-white/80">
            Pronto para transformar
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 md:mb-6 leading-tight px-4 md:px-0">
          Você está a um passo de{" "}
          <span className="text-blue-500">transformar seu negócio</span> com IA
        </h2>

        <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
          Conte-nos sobre seu negócio e suas necessidades de IA
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Box */}
          <div className="max-w-lg mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg text-center transition-all duration-300 hover:bg-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Agende uma reunião conosco
            </h3>
            <p className="text-white/60 mb-6">
              Escolha um horário que funcione para você e fale diretamente com
              nossa equipe. Estamos aqui para tirar suas dúvidas e entender suas
              necessidades.
            </p>

            {/* Schedule Button */}
            <button
              data-cal-namespace="30min"
              data-cal-link="nilton-novele-ecxmm3/30min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition w-full"
            >
              Agendar Agora
            </button>

            {/* Contact Info */}
            <div className="mt-6 space-y-4 text-left text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <span className="font-semibold">Localização: </span>
                  Maputo, Moçambique
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <span className="font-semibold">Telefone: </span>
                  +258 84 752 9665
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <span className="font-semibold">Email: </span>
                  info@synctechx.com
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full">
            {/* Progress Bar */}
            <div className="mb-6 md:mb-8">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / 7) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/60">
                <span>Começar</span>
                <span>Completo</span>
              </div>
            </div>

            {/* Form Container */}
            <div
              className={`p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-500 w-full
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
            >
              <div
                className={`relative ${
                  currentStep === 7 ? "" : "overflow-hidden"
                }`}
                style={{ minHeight: currentStep === 7 ? "auto" : "320px" }}
              >
                {/* STEP 1 */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 1
                      ? "translate-x-0 opacity-100"
                      : currentStep < 1
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">
                    Conte-nos sobre você
                  </h3>

                  <Form {...step1Form}>
                    <form
                      onSubmit={step1Form.handleSubmit(onStep1Submit)}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={step1Form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80 text-sm">
                                Nome
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="João"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={step1Form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80 text-sm">
                                Apelido
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Da Silva"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full group px-6 py-4 md:py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                      >
                        Continuar
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </Form>
                </div>

                {/* Step 2: Contact Information */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 2
                      ? "translate-x-0 opacity-100"
                      : currentStep < 2
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-light text-white mb-6">
                    Como podemos entrar em contato com você?
                  </h3>

                  <Form {...step2Form}>
                    <form
                      onSubmit={step2Form.handleSubmit(onStep2Submit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={step2Form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="João.dasilva@exemplo.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={step2Form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Telefone
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="0092 12345678"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={goToPreviousStep}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          Continuar
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>

                {/* Step 3: Company Information */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 3
                      ? "translate-x-0 opacity-100"
                      : currentStep < 3
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-light text-white mb-6">
                    Conte-nos sobre sua empresa
                  </h3>

                  <Form {...step3Form}>
                    <form
                      onSubmit={step3Form.handleSubmit(onStep3Submit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={step3Form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Nome da empresa
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Exemplo Lda."
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={step3Form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Sua posição
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="CEO, CTO, Director de Marketing, etc."
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={goToPreviousStep}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          Continuar
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>

                {/* Step 4: AI Challenges */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 4
                      ? "translate-x-0 opacity-100"
                      : currentStep < 4
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-light text-white mb-6">
                    Seus desafios de IA
                  </h3>

                  <Form {...step4Form}>
                    <form
                      onSubmit={step4Form.handleSubmit(onStep4Submit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={step4Form.control}
                        name="aiChallenges"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Quais desafios de IA você precisa resolver?
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Conte-nos sobre suas necessidades e desafios específicos..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500 resize-none min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={goToPreviousStep}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          Continuar
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>

                {/* Step 5: Business Context */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 5
                      ? "translate-x-0 opacity-100"
                      : currentStep < 5
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-light text-white mb-6">
                    Contexto de negócios
                  </h3>

                  <Form {...step5Form}>
                    <form
                      onSubmit={step5Form.handleSubmit(onStep5Submit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={step5Form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Setor
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-blue-500 focus:ring-blue-500">
                                  <SelectValue placeholder="Selecione seu setor" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black/90 border-white/10 text-white">
                                <SelectItem
                                  value="technology"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Tecnologia
                                </SelectItem>
                                <SelectItem
                                  value="finance"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Finanças
                                </SelectItem>
                                <SelectItem
                                  value="healthcare"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Saúde
                                </SelectItem>
                                <SelectItem
                                  value="retail"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Varejo
                                </SelectItem>
                                <SelectItem
                                  value="manufacturing"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Recursos Humanos
                                </SelectItem>
                                <SelectItem
                                  value="education"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Educação
                                </SelectItem>
                                <SelectItem
                                  value="other"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Outro
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={step5Form.control}
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
                                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-gold focus:ring-gold">
                                  <SelectValue placeholder="Selecione o tamanho da empresa" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black/90 border-white/10 text-white">
                                <SelectItem
                                  value="1-10"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  1-10 funcionários
                                </SelectItem>
                                <SelectItem
                                  value="11-50"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  11-50 funcionários
                                </SelectItem>
                                <SelectItem
                                  value="51-200"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  51-200 funcionários
                                </SelectItem>
                                <SelectItem
                                  value="201-500"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  201-500 funcionários
                                </SelectItem>
                                <SelectItem
                                  value="501+"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  501+ funcionários
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={goToPreviousStep}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                        >
                          Continuar
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>

                {/* Step 6: Budget & Urgency */}
                <div
                  className={`transition-all duration-500 ${
                    currentStep === 7 ? "hidden" : "absolute"
                  } w-full ${
                    currentStep === 6
                      ? "translate-x-0 opacity-100"
                      : currentStep < 6
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-light text-white mb-6">
                    Investimento e cronograma
                  </h3>

                  <Form {...step6Form}>
                    <form
                      onSubmit={step6Form.handleSubmit(onStep6Submit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={step6Form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Qual é a sua faixa de investimento?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-blue-500 focus:ring-blue-500">
                                  <SelectValue placeholder="Selecione sua faixa de orçamento" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black/90 border-white/10 text-white">
                                <SelectItem
                                  value="$1k-$5k"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  $1k-$5k
                                </SelectItem>
                                <SelectItem
                                  value="$6k-$10k"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  $6k-$10k
                                </SelectItem>
                                <SelectItem
                                  value="$10k+"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  $10k+
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={step6Form.control}
                        name="urgency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
                              Quão urgente isso é para você?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-blue-500 focus:ring-blue-500">
                                  <SelectValue placeholder="Selecione o nível de urgência" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black/90 border-white/10 text-white">
                                <SelectItem
                                  value="very urgent"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Muito urgente
                                </SelectItem>
                                <SelectItem
                                  value="want to implement in the next 1-3 months"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Deseja implementar nos próximos 1 a 3 meses
                                </SelectItem>
                                <SelectItem
                                  value="simply want to understand whats possible"
                                  className="focus:bg-blue-500/20 focus:text-white"
                                >
                                  Simplesmente quero entender o que é possível
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={goToPreviousStep}
                          disabled={isSubmitting}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 group px-6 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader className="mr-2 w-4 h-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar
                              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>

            {/* Step 7: Thank You */}
            <div
              className={`transition-all duration-500 ${
                currentStep === 7 ? "relative" : "absolute hidden"
              } w-full ${
                currentStep === 7
                  ? "translate-x-0 opacity-100"
                  : currentStep < 7
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="text-center py-8">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-3xl font-light text-white mb-4">
                    Obrigado por entrar em contato!
                  </h3>
                  <p className="text-lg text-white/60 max-w-md mx-auto mb-6">
                    Suas informações foram enviadas com sucesso.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">
                    O que acontece a seguir?
                  </h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">1</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">
                          Analisaremos suas necessidades e prepararemos uma
                          abordagem personalizada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">2</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">
                          Agende uma reunião de 30 minutos para discutir suas
                          oportunidades em IA.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-medium text-gold">3</span>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">
                          Receba uma proposta detalhada com cronograma e opções
                          de investimento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={onFinalSubmit}
                  className="group px-8 py-6 text-sm font-medium bg-blue-500 hover:bg-blue-500/90 text-black rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Enviar outra solicitação
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={`mt-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h4 className="text-lg font-medium text-white mb-4">
            Prefere entrar em contato diretamente?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-white/60">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@synctechx.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Indicators */}
      <div
        className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 md:px-8 py-4 rounded-2xl border border-white/10 bg-white/5 w-full max-w-lg mx-auto">
          {/* Item 1 */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span className="text-white/80 text-sm md:text-base">
              Confidencial
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-10 md:h-6 md:w-px bg-white/20" />

          {/* Item 2 */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span className="text-white/80 text-sm md:text-base">
              Sem Compromisso
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-10 md:h-6 md:w-px bg-white/20" />

          {/* Item 3 */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span className="text-white/80 text-sm md:text-base">
              30 minutos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
