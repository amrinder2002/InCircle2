import Constants from "expo-constants";

const DEFAULT_URL = "http://***.***.*.**:9000/api";

const settings = {
        dev: {
                apiUrl:
                        Constants.manifest?.extra?.devApiUrl || DEFAULT_URL,
        },
        staging: {
                apiUrl:
                        Constants.manifest?.extra?.stagingApiUrl || DEFAULT_URL,
        },
        prod: {
                apiUrl:
                        Constants.manifest?.extra?.prodApiUrl || DEFAULT_URL,
        },
};

const getCurrentSettings = () => {
        if (__DEV__) return settings.dev;
        if (Constants.manifest.releaseChannel === "staging")
                return settings.staging;
        return settings.prod;
};

export default getCurrentSettings();
