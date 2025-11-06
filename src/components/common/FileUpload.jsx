import { useState, useRef } from 'react'
import { Upload, X, FileText, File, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

/**
 * File Upload Component
 *
 * @param {Function} onChange - Callback when files change
 * @param {Array} accept - Array of accepted file types (e.g., ['.pdf', '.doc', '.docx'])
 * @param {number} maxSize - Max file size in MB (default: 10)
 * @param {number} maxFiles - Max number of files (default: 3)
 * @param {string} label - Label for the upload area
 */
const FileUpload = ({
  onChange,
  accept = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png'],
  maxSize = 10, // MB
  maxFiles = 3,
  label = 'Joindre des fichiers',
  className = '',
}) => {
  const [files, setFiles] = useState([])
  const [error, setError] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  // Convert MB to bytes
  const maxSizeBytes = maxSize * 1024 * 1024

  // Validate file
  const validateFile = (file) => {
    // Check file size
    if (file.size > maxSizeBytes) {
      return `Le fichier "${file.name}" est trop volumineux (max: ${maxSize}MB)`
    }

    // Check file type
    const fileExt = '.' + file.name.split('.').pop().toLowerCase()
    if (!accept.includes(fileExt)) {
      return `Type de fichier non accepté: ${fileExt}`
    }

    return null
  }

  // Handle file selection
  const handleFiles = (newFiles) => {
    setError(null)

    // Check max files
    if (files.length + newFiles.length > maxFiles) {
      setError(`Vous ne pouvez pas télécharger plus de ${maxFiles} fichier(s)`)
      return
    }

    // Validate each file
    const validFiles = []
    for (const file of newFiles) {
      const error = validateFile(file)
      if (error) {
        setError(error)
        return
      }
      validFiles.push(file)
    }

    // Add files
    const updatedFiles = [...files, ...validFiles]
    setFiles(updatedFiles)
    if (onChange) {
      onChange(updatedFiles)
    }
  }

  // Handle input change
  const handleInputChange = (e) => {
    const newFiles = Array.from(e.target.files || [])
    handleFiles(newFiles)
  }

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const newFiles = Array.from(e.dataTransfer.files || [])
    handleFiles(newFiles)
  }

  // Remove file
  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    setFiles(updatedFiles)
    if (onChange) {
      onChange(updatedFiles)
    }
  }

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  // Get file icon
  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
      return '🖼️'
    }
    if (['pdf'].includes(ext)) {
      return '📄'
    }
    if (['doc', 'docx'].includes(ext)) {
      return '📝'
    }
    return '📎'
  }

  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept.join(',')}
          onChange={handleInputChange}
          className="hidden"
        />

        <Upload className="mx-auto mb-4 text-muted-foreground" size={40} />

        <p className="text-sm font-medium mb-1">
          Glissez-déposez vos fichiers ici
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          ou
        </p>

        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
        >
          <FileText className="mr-2" size={16} />
          Choisir des fichiers
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Formats acceptés: {accept.join(', ')} • Max {maxSize}MB • Max {maxFiles} fichiers
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mt-4 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-2xl">{getFileIcon(file.name)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FileUpload
