import { Group, Select, SelectProps } from "@mantine/core";
import { CurrencyOptions } from "../const/currency-options";
import { IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function CurrencySelection({
  label,
  defaultValue,
  onChange,
}: {
  label?: string;
  defaultValue: string | null;
  onChange?: (value: string | null) => void;
}) {
  const [value, setValue] = useState<string | null>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const renderSelectOption: SelectProps["renderOption"] = ({
    option,
    checked,
  }) => (
    <Group flex="1" gap="xs">
      {CurrencyOptions.find((c) => c.value === option.value)?.icon({
        width: 20,
      })}
      {option.label}
      {checked && <IconCheck style={{ marginInlineStart: "auto" }} />}
    </Group>
  );
  return (
    <Select
      value={value}
      label={label}
      data={CurrencyOptions}
      searchable
      renderOption={renderSelectOption}
      leftSection={CurrencyOptions.find((c) => c.value === value)?.icon({
        width: 20,
      })}
      onChange={(value) => {
        setValue(value);
        onChange && onChange(value);
      }}
    />
  );
}
