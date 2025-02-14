import Image from "next/image";

interface PhotoUploadProps {
  imagePreview: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function PhotoUpload({ imagePreview, onChange, required }: PhotoUploadProps) {
  return (
    <div>
      <label className="block text-gray-700">
        Foto de Perfil
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="w-full p-2 border rounded"
        required={required}
      />
      {imagePreview && (
        <div className="mt-2 relative w-32 h-32">
          <Image
            src={imagePreview}
            alt="Preview"
            fill
            className="object-cover rounded-full"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}