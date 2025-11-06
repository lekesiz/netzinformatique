import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { multiStepContactSchema } from '@/schemas/contactSchema'
import { useFormAutosave } from '@/hooks/useFormAutosave'
import FileUpload from '@/components/common/FileUpload'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  AlertCircle,
  Save,
  User,
  MessageSquare,
  Upload as UploadIcon,
  Eye,
} from 'lucide-react'

const STORAGE_KEY = 'netz_contact_form_draft'

const MultiStepContactForm = ({ onSuccess, onError }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [files, setFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSavedNotice, setShowSavedNotice] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
    reset,
  } = useForm({
    resolver: zodResolver(multiStepContactSchema),
    mode: 'onChange',
    defaultValues: {
      preferredContact: 'email',
      newsletter: false,
      urgency: 'normal',
    },
  })

  // Watch all form values for auto-save
  const formData = watch()

  // Auto-save hook
  const { getSavedData, hasSavedData, clearSavedData } = useFormAutosave(
    formData,
    STORAGE_KEY,
    2000 // 2 second debounce
  )

  // Load saved data on mount
  useEffect(() => {
    if (hasSavedData()) {
      const savedData = getSavedData()
      if (savedData) {
        Object.keys(savedData).forEach((key) => {
          setValue(key, savedData[key])
        })
        setShowSavedNotice(true)
        setTimeout(() => setShowSavedNotice(false), 5000)
      }
    }
  }, [])

  // Form steps configuration
  const steps = [
    {
      id: 1,
      title: 'Informations Personnelles',
      icon: User,
      fields: ['name', 'email', 'phone', 'company'],
    },
    {
      id: 2,
      title: 'Détails de la Demande',
      icon: MessageSquare,
      fields: ['serviceType', 'subject', 'message', 'budget', 'urgency'],
    },
    {
      id: 3,
      title: 'Fichiers & Préférences',
      icon: UploadIcon,
      fields: ['preferredContact', 'newsletter'],
    },
    {
      id: 4,
      title: 'Vérification',
      icon: Eye,
      fields: [],
    },
  ]

  // Service type options
  const serviceTypes = [
    { value: 'depannage', label: 'Dépannage & Maintenance' },
    { value: 'formation', label: 'Formation Professionnelle' },
    { value: 'ia', label: 'Intelligence Artificielle' },
    { value: 'cybersecurite', label: 'Cybersécurité' },
    { value: 'cloud', label: 'Cloud & Réseau' },
    { value: 'web', label: 'Développement Web' },
    { value: 'autre', label: 'Autre Service' },
  ]

  // Validate current step
  const validateStep = async (step) => {
    const fieldsToValidate = steps[step - 1].fields
    const isValid = await trigger(fieldsToValidate)
    return isValid
  }

  // Next step
  const handleNext = async () => {
    const isValid = await validateStep(currentStep)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()

      // Append form fields
      Object.keys(data).forEach((key) => {
        formDataToSend.append(key, data[key])
      })

      // Append files
      files.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file)
      })

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok) {
        // Clear saved data and reset form
        clearSavedData()
        reset()
        setFiles([])
        setCurrentStep(1)

        if (onSuccess) {
          onSuccess(result)
        }
      } else {
        if (onError) {
          onError(result)
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      if (onError) {
        onError(error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      {/* Auto-save Notice */}
      {showSavedNotice && (
        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <Save className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            Brouillon chargé automatiquement
          </AlertDescription>
        </Alert>
      )}

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id

            return (
              <div key={step.id} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle size={20} />
                    ) : (
                      <Icon size={20} />
                    )}
                  </div>
                  <p
                    className={`text-xs mt-2 text-center ${
                      isActive ? 'font-semibold text-primary' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Informations Personnelles</h2>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Nom Complet *</label>
              <input
                type="text"
                {...register('name')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.name ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                {...register('email')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.email ? 'border-red-500' : 'border-border'
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                {...register('phone')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.phone ? 'border-red-500' : 'border-border'
                }`}
                placeholder="+33 6 XX XX XX XX"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Entreprise (optionnel)
              </label>
              <input
                type="text"
                {...register('company')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.company ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Nom de votre entreprise"
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Request Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Détails de votre Demande</h2>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Type de Service *
              </label>
              <select
                {...register('serviceType')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.serviceType ? 'border-red-500' : 'border-border'
                }`}
              >
                <option value="">Sélectionnez un service</option>
                {serviceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">Sujet *</label>
              <input
                type="text"
                {...register('subject')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.subject ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Sujet de votre demande"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                {...register('message')}
                rows="5"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition ${
                  errors.message ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Décrivez votre besoin en détail..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Budget Estimé (optionnel)
              </label>
              <select
                {...register('budget')}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary transition"
              >
                <option value="">Non spécifié</option>
                <option value="500-1000">500€ - 1,000€</option>
                <option value="1000-5000">1,000€ - 5,000€</option>
                <option value="5000-10000">5,000€ - 10,000€</option>
                <option value="10000+">Plus de 10,000€</option>
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Niveau d'Urgence
              </label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="urgent"
                    {...register('urgency')}
                    className="mr-2"
                  />
                  <span className="text-sm">🔴 Urgent</span>
                </label>
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="normal"
                    {...register('urgency')}
                    className="mr-2"
                  />
                  <span className="text-sm">🟡 Normal</span>
                </label>
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="planifie"
                    {...register('urgency')}
                    className="mr-2"
                  />
                  <span className="text-sm">🟢 Planifié</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Files & Preferences */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Fichiers & Préférences</h2>

            {/* File Upload */}
            <FileUpload
              onChange={setFiles}
              maxSize={10}
              maxFiles={3}
              accept={['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png']}
              label="Documents (optionnel)"
            />

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Méthode de Contact Préférée
              </label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="email"
                    {...register('preferredContact')}
                    className="mr-2"
                  />
                  <span className="text-sm">📧 Email</span>
                </label>
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="phone"
                    {...register('preferredContact')}
                    className="mr-2"
                  />
                  <span className="text-sm">📞 Téléphone</span>
                </label>
                <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                  <input
                    type="radio"
                    value="both"
                    {...register('preferredContact')}
                    className="mr-2"
                  />
                  <span className="text-sm">📱 Les deux</span>
                </label>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-4 bg-gray-50 rounded-lg border border-border">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  {...register('newsletter')}
                  className="mt-1 mr-3"
                />
                <div>
                  <p className="font-medium text-sm">Newsletter NETZ Informatique</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Recevez nos actualités, conseils et offres exclusives
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Vérification de votre Demande</h2>

            <div className="space-y-4">
              {/* Personal Info */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3">Informations Personnelles</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Nom:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  {formData.phone && <p><strong>Téléphone:</strong> {formData.phone}</p>}
                  {formData.company && <p><strong>Entreprise:</strong> {formData.company}</p>}
                </div>
              </div>

              {/* Request Details */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3">Détails de la Demande</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Service:</strong> {serviceTypes.find(s => s.value === formData.serviceType)?.label}</p>
                  <p><strong>Sujet:</strong> {formData.subject}</p>
                  <p><strong>Message:</strong></p>
                  <p className="whitespace-pre-wrap bg-white p-3 rounded border">{formData.message}</p>
                  {formData.budget && <p><strong>Budget:</strong> {formData.budget}€</p>}
                  <p><strong>Urgence:</strong> {formData.urgency}</p>
                </div>
              </div>

              {/* Files & Preferences */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3">Fichiers & Préférences</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Fichiers joints:</strong> {files.length > 0 ? `${files.length} fichier(s)` : 'Aucun'}</p>
                  <p><strong>Contact préféré:</strong> {formData.preferredContact}</p>
                  <p><strong>Newsletter:</strong> {formData.newsletter ? 'Oui' : 'Non'}</p>
                </div>
              </div>
            </div>

            <Alert className="border-blue-200 bg-blue-50">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                Veuillez vérifier vos informations avant de soumettre le formulaire.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1 || isSubmitting}
          >
            <ChevronLeft className="mr-2" size={16} />
            Précédent
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={handleNext}>
              Suivant
              <ChevronRight className="ml-2" size={16} />
            </Button>
          ) : (
            <Button
              type="submit"
              className="gradient-green text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  <Send className="mr-2" size={16} />
                  Envoyer
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStepContactForm
