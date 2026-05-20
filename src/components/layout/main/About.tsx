const About = () => {

    return (
        <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div>
            <p className="text-accent text-sm tracking-widest uppercase mb-3">
              Sobre mi
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
              La Artista
            </h2>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
             Laura Zambrano es una artista visual contemporánea originaria de Managua, cuya obra explora paisajes, escenarios oníricos y retratos a través del grafito, la acuarela y los pasteles grasos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con una sensibilidad artística distintiva, Laura combina textura, color y detalle expresivo para crear composiciones evocadoras que transmiten atmósferas de introspección, imaginación y emoción. Su trabajo busca capturar la belleza sutil de lo cotidiano y lo imaginario, dando vida a escenas cargadas de profundidad y carácter.
            </p>
        
          </div>
        </div>
      </div>
    </section>
    )
}

export default About;