import { Component } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service (e.g., Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Oups ! Une erreur s'est produite
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8">
                Nous sommes désolés pour la gêne occasionnée. Une erreur inattendue s'est produite.
              </p>

              {/* Error Details (Development only) */}
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 text-left bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="font-mono text-sm text-red-800 break-all">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-red-700 hover:text-red-900">
                        Détails techniques
                      </summary>
                      <pre className="mt-2 text-xs text-red-600 overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <RefreshCw className="w-5 h-5" />
                  Réessayer
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  <Home className="w-5 h-5" />
                  Retour à l'accueil
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Si le problème persiste, n'hésitez pas à nous contacter :
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="tel:+33899250151"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    📞 0 8 99 25 01 51
                  </a>
                  <a
                    href="mailto:contact@netzinformatique.fr"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    📧 contact@netzinformatique.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
