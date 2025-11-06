import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, X, Send, Bot, User, ExternalLink, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  analyzeIntent,
  getSuggestedActionsDetails,
  ConversationContext,
  generateSmartResponse,
  requiresHumanAgent,
  trackChatbotEvent,
} from '@/utils/chatbotAI'
import { transitionToLiveAgent, isTawkReady } from '@/utils/tawkTo'
import { motion, AnimatePresence } from 'framer-motion'

const ChatWidget = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [context] = useState(() => new ConversationContext())
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const locale = i18n.language || 'fr'

  // Initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetings = {
        fr: "Bonjour ! 👋 Je suis l'assistant virtuel de NETZ Informatique. Comment puis-je vous aider aujourd'hui ?",
        en: "Hello! 👋 I'm the NETZ Informatique virtual assistant. How can I help you today?",
        de: "Hallo! 👋 Ich bin der virtuelle Assistent von NETZ Informatique. Wie kann ich Ihnen heute helfen?",
        tr: "Merhaba! 👋 Ben NETZ Informatique'in sanal asistanıyım. Bugün size nasıl yardımcı olabilirim?",
      }

      const greeting = greetings[locale] || greetings.fr

      setMessages([
        {
          id: Date.now(),
          role: 'assistant',
          content: greeting,
          timestamp: new Date(),
        },
      ])

      // Track widget open
      trackChatbotEvent('widget_opened')
    }
  }, [isOpen, messages.length, locale])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Toggle widget
  const toggleWidget = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      trackChatbotEvent('widget_opened')
    }
  }

  // Handle send message
  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const result = generateSmartResponse(inputValue, context, locale)

      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: result.answer,
        timestamp: new Date(),
        suggestedActions: result.suggestedActions,
        intent: result.intent,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      // Check if human agent is needed
      if (requiresHumanAgent(inputValue, result)) {
        setTimeout(() => {
          const agentSuggestion = {
            id: Date.now() + 2,
            role: 'system',
            content: getAgentSuggestionMessage(locale),
            timestamp: new Date(),
            suggestedActions: ['live_agent'],
          }
          setMessages((prev) => [...prev, agentSuggestion])
        }, 1000)
      }
    }, 800)
  }

  // Get agent suggestion message
  const getAgentSuggestionMessage = (locale) => {
    const messages = {
      fr: "Il semble que vous ayez besoin d'une assistance personnalisée. Souhaitez-vous parler à un de nos conseillers ?",
      en: 'It seems you need personalized assistance. Would you like to talk to one of our advisors?',
      de: 'Es scheint, dass Sie persönliche Unterstützung benötigen. Möchten Sie mit einem unserer Berater sprechen?',
      tr: 'Kişiselleştirilmiş yardıma ihtiyacınız var gibi görünüyor. Danışmanlarımızdan biriyle konuşmak ister misiniz?',
    }
    return messages[locale] || messages.fr
  }

  // Handle action button click
  const handleActionClick = (action) => {
    trackChatbotEvent('action_clicked', { action: action.action, target: action.target })

    if (action.action === 'navigate') {
      window.location.href = action.target
    } else if (action.action === 'external') {
      window.open(action.target, '_blank')
    } else if (action.action === 'tawk') {
      openTawkChat()
    } else if (action.action === 'faq') {
      // Trigger FAQ question
      setInputValue(action.target)
      handleSend()
    }
  }

  // Open Tawk.to chat and transfer context
  const openTawkChat = () => {
    const success = transitionToLiveAgent(context, { locale })

    if (success) {
      trackChatbotEvent('tawk_opened')
      // Close custom widget
      setIsOpen(false)
    } else {
      // Fallback to contact page
      window.location.href = '/contact'
    }
  }

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Format timestamp
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      {/* Chat Widget Button */}
      <motion.button
        onClick={toggleWidget}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-2xl transition-all ${
          isOpen ? 'bg-gray-800' : 'bg-gradient-to-r from-primary to-secondary'
        } text-white p-4 hover:scale-110`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}

        {/* Notification badge */}
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            1
          </motion.span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Assistant NETZ</h3>
                  <p className="text-xs opacity-90">En ligne • Répond instantanément</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.location.href = 'tel:+33367310201'}
                  className="hover:bg-white/20 p-2 rounded-lg transition"
                  aria-label="Appeler"
                >
                  <Phone size={18} />
                </button>
                <button
                  onClick={toggleWidget}
                  className="hover:bg-white/20 p-2 rounded-lg transition"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id}>
                  {/* Message Bubble */}
                  <div
                    className={`flex gap-2 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="bg-primary text-white rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-primary text-white'
                          : message.role === 'system'
                          ? 'bg-yellow-100 text-yellow-900 border border-yellow-300'
                          : 'bg-white text-gray-800 shadow'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>

                    {message.role === 'user' && (
                      <div className="bg-gray-300 rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <User size={16} />
                      </div>
                    )}
                  </div>

                  {/* Suggested Actions */}
                  {message.suggestedActions && message.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-10">
                      {getSuggestedActionsDetails(message.suggestedActions).map(
                        (action, index) => (
                          <button
                            key={index}
                            onClick={() => handleActionClick(action)}
                            className="text-xs px-3 py-1 bg-white border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition flex items-center gap-1"
                          >
                            {action.label}
                            {action.action === 'external' && <ExternalLink size={12} />}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="bg-primary text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <Send size={18} />
                </Button>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Propulsé par NETZ Informatique AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
