import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "App" }} />
      <Stack.Screen name="configuracoes-usuario" options={{ title: "Configurações do Usuário" }} />
    </Stack>
  );
}
