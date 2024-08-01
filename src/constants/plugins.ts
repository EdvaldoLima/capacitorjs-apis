interface PluginsList {
  title: string;
  plugin: string;
  description: string;
  toPage?: string;
  documentation: string;
}

const plugins: Array<PluginsList> = [
  {
    title: "Action Sheet",
    plugin: "@capacitor/action-sheet",
    description:
      "The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.",
    toPage: "/action-sheet",
    documentation: "https://capacitorjs.com/docs/apis/action-sheet",
  },
  {
    title: "App Launcher",
    plugin: "@capacitor/app-launcher",
    description:
      "The AppLauncher API allows your app to check if an app can be opened and open it.",
    toPage: "/app-launcher",
    documentation: "https://capacitorjs.com/docs/apis/app-launcher",
  },
  {
    title: "App",
    plugin: "@capacitor/app",
    description:
      "The App API handles high level App state and events. For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.",
    toPage: "/app",
    documentation: "https://capacitorjs.com/docs/apis/app",
  },
  {
    title: "Background Runner",
    plugin: "@capacitor/background-runner",
    description:
      "Background Runner provides an event-based standalone JavaScript environment for executing your Javascript code outside of the web view.",
    documentation: "https://capacitorjs.com/docs/apis/background-runner",
  },
  {
    title: "Barcode Scanner",
    plugin: "@capacitor/barcode-scanner",
    description:
      "Capacitor plugin using Outsystems Barcode libs",
    documentation: "https://capacitorjs.com/docs/apis/barcode-scanner",
  },
  {
    title: "Browser",
    plugin: "@capacitor/browser",
    description:
      "The Browser API provides the ability to open an in-app browser and subscribe to browser events.",
    toPage: "/browser",
    documentation: "https://capacitorjs.com/docs/apis/browser",
  },
  {
    title: "Camera",
    plugin: "@capacitor/camera",
    description:
      "The Camera API provides the ability to take a photo with the camera or choose an existing one from the photo album.",
    toPage: "/camera",
    documentation: "https://capacitorjs.com/docs/apis/camera",
  },
];

export default plugins;
