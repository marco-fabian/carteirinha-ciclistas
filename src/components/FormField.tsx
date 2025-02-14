interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export function FormField({ label, name, type = "text", value, onChange, required, options }: FormFieldProps) {
  return (
    <div>
      <label className="block text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded text-gray-900"
          required={required}
        >
          <option value="">Selecione</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded text-gray-900"
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded text-gray-900"
          required={required}
        />
      )}
    </div>
  );
}