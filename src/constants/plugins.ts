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
    toPage: '/action-sheet',
    documentation: ''
  },
];

export default plugins;
