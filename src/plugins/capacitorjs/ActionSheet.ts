import { ActionSheet, ShowActionsOptions } from "@capacitor/action-sheet";

export const showActions = async (actionSheetOptions: ShowActionsOptions) => {
  return await ActionSheet.showActions(actionSheetOptions);
};
