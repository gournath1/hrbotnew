import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useCombobox } from "downshift";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../components/ui/input";
import { AutoCompleteField } from "./type";

type AutoCompleteProps = AutoCompleteField<Record<string, string>>;

function getSuggestionFilter(inputValue: string) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return (suggestion: AutoCompleteProps["suggestions"][number]) => {
    return (
      !inputValue || suggestion.toLowerCase().includes(lowerCasedInputValue)
    );
  };
}

export default function AutoComplete({
  suggestions,
  name,
  label,
  description,
}: AutoCompleteProps) {
  const [items, setItems] = useState(suggestions);
  const { setValue } = useFormContext();

  const {
    isOpen,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange({ inputValue }) {
      setItems(suggestions.filter(getSuggestionFilter(inputValue)));
      setValue(name, inputValue);
    },
    itemToString(item) {
      return item || "";
    },
  });

  return (
    <FormItem className="relative">
      <FormLabel {...getLabelProps()}>{label}</FormLabel>
      <Input {...getInputProps()} name={name} />
      <div
        className={cn(
          "absolute w-full bg-white mt-1 p-0 z-10 max-h-56 border rounded-md overflow-auto",
          !(isOpen && items.length) && "hidden"
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={item}
              className={cn(
                highlightedIndex === index && "bg-neutral-300",
                "py-2 px-3 shadow-sm flex flex-col"
              )}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </div>

      <FormMessage />
      <FormDescription>{description}</FormDescription>
    </FormItem>
  );
}
