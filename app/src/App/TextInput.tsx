import React from "react";

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({  value, onChange }) => (
  <input
    className="border border-midContrast rounded px-2 bg-background"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
