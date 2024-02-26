export interface DropdownProps {
    placeholder?: string;
    options: string[];
    selectedOption: string;
    onSelectionChange: (option: string) => void;
    id: string;
    error?: string;
}

