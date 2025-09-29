import { ActionIcon, Combobox, Text, useCombobox } from "@mantine/core";
import { GB, FR, VN } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

export function SwitchLang() {
  const { i18n } = useTranslation();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  return (
    <>
      <Combobox
        store={combobox}
        width={250}
        position="bottom-end"
        withArrow
        onOptionSubmit={(val) => {
          i18n.changeLanguage(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <ActionIcon
            className="!fixed bottom-20 right-4"
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
            onClick={() => combobox.toggleDropdown()}
          >
            {i18n.language.startsWith("fr") ? (
              <FR width={20} />
            ) : i18n.language.startsWith("vi") ? (
              <VN width={20} />
            ) : (
              <GB width={20} />
            )}
          </ActionIcon>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            <Combobox.Option value="en-US">
              <div className="flex gap-2">
                <GB width={20} />
                <Text>English</Text>
              </div>
            </Combobox.Option>
            <Combobox.Option value="fr-FR">
              <div className="flex gap-2">
                <FR width={20} />
                <Text>Français</Text>
              </div>
            </Combobox.Option>
            <Combobox.Option value="vi-VN">
              <div className="flex gap-2">
                <VN width={20} />
                <Text>Tiếng Việt</Text>
              </div>
            </Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
