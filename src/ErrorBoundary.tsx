import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="font-serif-title text-2xl sm:text-3xl font-light uppercase tracking-tight mb-4">
            Deyse Ramaiane Advocacia Criminal
          </h1>
          <p className="text-sm text-[#B8BBC0] mb-4 max-w-md">
            Ocorreu um erro temporário ao carregar a página.
          </p>
          {this.state.error && (
            <pre className="bg-[#18191B] p-4 rounded text-xs text-red-400 mb-6 max-w-2xl overflow-auto text-left border border-red-900/50">
              {this.state.error.toString()}
              {'\n'}
              {this.state.error.stack}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border border-[#F7F7F5]/80 hover:bg-white/10 text-[#F7F7F5] rounded-sm text-xs uppercase tracking-widest font-semibold transition-all"
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
