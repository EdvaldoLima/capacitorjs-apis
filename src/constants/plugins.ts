interface PluginsList {
  title: string;
  plugin: string;
  description: string;
  toPage: string;
  documentation: string;
}

const plugins: Array<PluginsList> = [
  {
    title: "Action Sheet",
    plugin: "@capacitor/action-sheet",
    description:
      "The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.",
    toPage: "/action-sheet",
    documentation: "",
  },
  {
    title: "App Launcher",
    plugin: "@capacitor/app-launcher",
    description:
      "The AppLauncher API allows your app to check if an app can be opened and open it.",
    toPage: "/app-launcher",
    documentation: "",
  },
  {
    title: "App",
    plugin: "@capacitor/app",
    description:
      "The App API handles high level App state and events. For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.",
    toPage: "/app",
    documentation: "",
  },
];

export default plugins;
