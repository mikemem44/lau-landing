import { ContactInput, ContactTextArea } from "@/components/ui/ContactInput";

const ContactMe = () => {

  return (
    <div id="contact" className="grid grid-cols-1 md:flex">
        <div className="flex flex-col md:justify-center py-10 px-4 md:px-10 md:max-w-1/2 gap-6">
            <h2 className="text-3xl">Contáctame</h2>
            <p className="text-muted-foreground text-xl">¿Te interesa contactarme para comisionar una pieza, colaborar, o charlar conmigo? ¡Me encantaría saber de ti!</p>
        </div>

        <form id="contact" className="border border-border md:w-1/2 px-5 py-8 grid gap-5 bg-accent rounded-4xl">
            <div className="grid md:flex md:flex-wrap gap-5 md:gap-0">
                <label className="md:w-1/2 text-muted-foreground font-bold">
                    NOMBRE
                    <ContactInput type="text" required placeholder="Tu nombre"/>
                </label>
                <label className="md:w-1/2 text-muted-foreground font-bold">
                    EMAIL
                    <ContactInput type="email" required placeholder="tu@email.com" className="md:mx-1"/>
                </label>
            </div>
            
            <label className="text-muted-foreground font-bold">
                ASUNTO
                <ContactInput type="text" required placeholder="¿Cual es el motivo de tu email?"/>
            </label>

            <label className="text-muted-foreground font-bold">
                MENSAJE
                <ContactTextArea required rows={5} placeholder="Dime sobre tu proyecto o pregunta..."/>
            </label>

            <button className="border border-border rounded-2xl p-2 bg-background hover:bg-popover-foreground hover:text-secondary-foreground transition duration-300 cursor-pointer">Enviar mensaje</button>
        </form>
    </div>
  );
}


export default ContactMe;