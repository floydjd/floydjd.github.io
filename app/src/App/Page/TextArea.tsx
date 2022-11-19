import React, { useEffect, useRef } from "react";

export interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  }, [ref, value]);

  return (
    <textarea
      className="w-full bg-background px-4 pt-1 pb-3 border border-midContrast rounded"
      ref={ref}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );
};
