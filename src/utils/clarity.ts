import { ClarityConfig } from "@microsoft/react-native-clarity";

const CLARITY_PROJECT_ID = "v7h03sxqrn";

export const initClarity = (): void => {
  const config: ClarityConfig = {
    projectId: CLARITY_PROJECT_ID,
  };
  const { initialize } = require("@microsoft/react-native-clarity");
  initialize(config);
};

export { CLARITY_PROJECT_ID };
