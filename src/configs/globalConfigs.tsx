
/**
 * The primary purpose of this component is to initialize the hooks that are used globally in the app.
 * This component will never get unmounted unless the app is closed.
 * Also will not return anything.
 * @returns null
 */

import useNetworkStatus from "../hooks/useNetworks";

const GlobalConfigs = () => {
    useNetworkStatus();
    return null;
};

export default GlobalConfigs;
