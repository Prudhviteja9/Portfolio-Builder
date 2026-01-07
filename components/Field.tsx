import React from 'react';

interface FieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'file' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  accept?: string;
  options?: string[];
  note?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  accept,
  options,
  note,
  value,
  onChange,
}: FieldProps) {
  const baseInputStyles = `
    w-full px-5 py-4 rounded-2xl
    bg-white/5 backdrop-blur-sm border border-white/10
    text-white placeholder-white/40
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/10
    transition-all duration-300
    hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10
  `;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-white/90">
        {label} {required && <span className="text-purple-400">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={baseInputStyles}
        />
      ) : type === 'select' && options ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseInputStyles} cursor-pointer`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-gray-900">
              {option}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <div>
          <input
            id={name}
            name={name}
            type="file"
            accept={accept}
            required={required}
            onChange={onChange}
            className={`${baseInputStyles} file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500 file:cursor-pointer cursor-pointer`}
          />
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
        />
      )}

      {note && (
        <p className="text-xs text-white/50 mt-2">{note}</p>
      )}
    </div>
  );
}
