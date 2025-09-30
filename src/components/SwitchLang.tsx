import { ActionIcon, Menu } from "@mantine/core";
import { GB, FR, VN } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function SwitchLang() {
  const { i18n } = useTranslation();
  const [resizeKey, setResizeKey] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      // force re-render to fix the bug of Mantine
      setResizeKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Menu
        shadow="md"
        width={200}
        position="left-end"
        withinPortal
        key={resizeKey}
      >
        <Menu.Target>
          <ActionIcon
            className="!fixed bottom-20 right-4"
            variant="default"
            size="xl"
          >
            {i18n.language.startsWith("fr") ? (
              <FR width={20} />
            ) : i18n.language.startsWith("vi") ? (
              <VN width={20} />
            ) : (
              <GB width={20} />
            )}
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={() => i18n.changeLanguage("en-US")}
            leftSection={<GB width={20} />}
          >
            English
          </Menu.Item>
          <Menu.Item
            onClick={() => i18n.changeLanguage("fr-FR")}
            leftSection={<FR width={20} values="fr-FR" />}
          >
            Français
          </Menu.Item>
          <Menu.Item
            onClick={() => i18n.changeLanguage("vi-VN")}
            leftSection={<VN width={20} values="vi-VN" />}
          >
            Tiếng Việt
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
