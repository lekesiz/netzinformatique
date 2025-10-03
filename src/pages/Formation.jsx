import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, ArrowRight } from 'lucide-react'

const Formation = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Formation</span> QUALIOPI
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formations certifiées et bilan de compétences financé par CPF
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover-lift">
            <GraduationCap size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Formations Professionnelles</h3>
            <p className="text-muted-foreground mb-6">
              Programmes certifiés QUALIOPI pour développer vos compétences
            </p>
          </div>
          <Link to="/formation/bilan-competences">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift h-full">
              <Award size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bilan de Compétences</h3>
              <p className="text-muted-foreground mb-6">
                Évaluez et valorisez vos compétences professionnelles
              </p>
              <Button className="gradient-green text-white w-full">
                En Savoir Plus <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </div>
)
export default Formation
