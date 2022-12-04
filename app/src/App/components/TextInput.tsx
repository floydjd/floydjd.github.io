import React from "react";

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  "data-testid": string;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, ...props }) => (
  <input
    className="border border-midContrast rounded px-2 bg-background"
    value={value}
    onChange={e => onChange(e.target.value)}
    data-testid={props["data-testid"]}
  />
);
