import React, { useContext } from "react";

interface EditModeContextConfig {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const EditModeContext = React.createContext<EditModeContextConfig>({
  editMode: false,
  setEditMode: () => { throw new Error("setEditMode not implemented"); },
});

export const EditModeProvider = EditModeContext.Provider;

export const useEditMode = () => useContext(EditModeContext);
