import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Cpu, Globe, Cloud, ArrowRight } from 'lucide-react'

const Solutions = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-primary">Solutions</span> Innovantes
          </h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/solutions/intelligence-artificielle" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover-lift h-full">
                <Cpu size={48} className="text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold mb-4">Intelligence Artificielle</h3>
                <p className="text-muted-foreground mb-6">Solutions IA offline ultra-sécurisées</p>
                <Button className="gradient-purple text-white w-full">Découvrir <ArrowRight className="ml-2" /></Button>
              </div>
            </Link>
            <Link to="/solutions/web-developpement" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover-lift h-full">
                <Globe size={48} className="text-secondary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold mb-4">Web & SEO</h3>
                <p className="text-muted-foreground mb-6">Sites web modernes et référencement optimal</p>
                <Button className="gradient-blue text-white w-full">Découvrir <ArrowRight className="ml-2" /></Button>
              </div>
            </Link>
            <Link to="/solutions/cloud" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover-lift h-full">
                <Cloud size={48} className="text-accent mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
                <p className="text-muted-foreground mb-6">Migration et optimisation cloud</p>
                <Button className="gradient-green text-white w-full">Découvrir <ArrowRight className="ml-2" /></Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
