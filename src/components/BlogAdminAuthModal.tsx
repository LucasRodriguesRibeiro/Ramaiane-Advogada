import React, { useState } from 'react';
import { X, Lock, KeyRound, ShieldAlert, Sparkles } from 'lucide-react';

interface BlogAdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const BlogAdminAuthModal: React.FC<BlogAdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === 'ramaiane2026') {
      setError(false);
      setPin('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden p-6 sm:p-7 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#B8BBC0] hover:text-[#F7F7F5] rounded-full hover:bg-[#18191B] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-[#B8BBC0]/40 bg-[#16171C] flex items-center justify-center text-[#F7F7F5] mx-auto shadow-lg">
            <Lock className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h3 className="font-serif-title text-xl text-[#F7F7F5] uppercase tracking-wider">
            Painel da Advogada
          </h3>
          <p className="text-xs text-[#B8BBC0] font-light leading-relaxed">
            Digite a senha para acessar o gerenciamento de artigos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              SENHA DE ACESSO
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8BBC0]">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                autoFocus
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                placeholder="••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors tracking-widest"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-[11px] text-red-400 bg-red-950/40 p-2.5 rounded border border-red-800/40">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Senha incorreta. Tente novamente.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md text-center text-xs font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all shadow-md cursor-pointer active:scale-98 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>ACESSAR</span>
          </button>
        </form>
      </div>
    </div>
  );
};

