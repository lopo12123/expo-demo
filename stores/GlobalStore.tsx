import {} from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from "react";

// 全局状态存储 数据
interface GlobalStoreData {

}

// 全局状态存储
const GlobalStore = createContext<GlobalStoreData>({})

/**
 * @description 全局状态 provider, 在应用最外层提供全局状态
 * @param children 实际渲染组件
 */
export default function GlobalStoreProvider({ children }: any) {
    // region initial
    const [ initialValue, setInitialValue ] = useState<GlobalStoreData>({})

    // useEffect(() => {
    //     // do some initial job here.
    // }, [])
    // endregion

    // region always
    return (
        <GlobalStore.Provider
            value={ initialValue }>
            { children }
        </GlobalStore.Provider>
    )
    // endregion
}

/**
 * @description 获取全局状态存储的自定义钩子
 */
export const useGlobalStore = () => {
    const _globalStore__current = useContext(GlobalStore)
    return { ..._globalStore__current }
}

/// 在根组件注入全局状态存储, 使得所有页面都能访问到