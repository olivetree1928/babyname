import { nameStyles, NameStyle } from '../data/nameStyles';

interface StyleSelectorProps {
  selectedStyle: string | null;
  onSelectStyle: (styleId: string) => void;
}

export function StyleSelector({ selectedStyle, onSelectStyle }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {nameStyles.map((style) => (
        <button
          key={style.id}
          onClick={() => onSelectStyle(style.id)}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            selectedStyle === style.id
              ? 'border-amber-500 bg-amber-50 shadow-lg scale-105'
              : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
          }`}
        >
          <div className="text-3xl mb-3">{style.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{style.title}</h3>
          <p className="text-sm text-amber-600 font-medium mb-2">{style.description}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{style.characteristics}</p>
        </button>
      ))}
    </div>
  );
}
