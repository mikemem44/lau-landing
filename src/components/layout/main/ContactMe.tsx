"use client"

import { ContactType, searchSchema } from "@/common/types/ContactType";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMe = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { 
        register, 
        handleSubmit,
        reset,
    } = useForm({resolver: zodResolver(searchSchema)})

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        setIsSubmitting(true);
        console.log(data);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY,
                subject: `${data.name} envio un mensaje con asunto: ${data.subject}`,
                name: data.name,
                email: data.email,
                message: data.message
            }),
        });

        const result = await response.json();

        console.log(result);
        setIsSubmitting(false)
        setIsSubmitted(true)

        reset();
    }

    const onError: SubmitErrorHandler<ContactType> = (errors) =>
    console.log(errors)


    return (
    <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Section Header */}
                <div>
                    <p className="text-accent text-sm tracking-widest uppercase mb-3">Contáctame</p>
                    <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">Ponte en contacto conmigo</h2>
                    <p className="text-muted-foreground mb-8 max-w-md">¿Te interesa contactarme para comisionar una pieza, colaborar, o charlar conmigo?</p>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-6 lg:p-8 border border-border">
                    {isSubmitted ? (
                        <div className="h-full flex items-center justify-center text-center py-12">
                            <div>
                            <p className="font-serif text-2xl text-foreground mb-2">
                                ¡Gracias!
                            </p>
                            <p className="text-muted-foreground">
                                Me pondré en contacto contigo pronto.
                            </p>
                            </div>
                        </div>
                    ) : (
                        <form id="contact" onSubmit={handleSubmit(onSubmit,onError)} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm text-muted-foreground uppercase tracking-wide">Nombre</Label>
                                    <Input {...register("name")} type="text" required placeholder="Tu nombre"/>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm text-muted-foreground uppercase tracking-wide">Email</Label>
                                    <Input {...register("email")} type="email" required placeholder="tu@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm text-muted-foreground uppercase tracking-wide">Asunto</Label>
                                <Input {...register("subject")} type="text" required placeholder="¿Cual es el motivo de tu email?"/>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm text-muted-foreground uppercase tracking-wide">MENSAJE</Label>
                                <Textarea {...register("message")} required rows={5} placeholder="Dime sobre tu proyecto o pregunta..." className="resize-none"/>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="rounded-xl p-1 w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition duration-200 ease-in uppercase tracking-wide"
                            >
                                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                            </button>  
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
    );
}


export default ContactMe;