import { AppShell, Burger, Drawer, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { SwitchTheme } from "../SwitchTheme";
import { useTranslation } from "react-i18next";
import { SwitchLang } from "../SwitchLang";

export function Layout({ children }: PropsWithChildren) {
  const [opened, { toggle, close }] = useDisclosure();
  const { t } = useTranslation();
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <div className="flex items-center justify-center w-full relative">
            <Burger
              className="absolute z-10 left-0"
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div className="flex-1 text-center">
              <Text size="xl" fw={600} className="font-fredoka">
                {t("title")}
              </Text>
            </div>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <SwitchLang />
      <SwitchTheme />
      <Drawer opened={opened} onClose={close} title="Implement later">
        {/* Drawer content */}
      </Drawer>
    </AppShell>
  );
}
