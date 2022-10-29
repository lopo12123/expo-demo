import Navigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from "react-native-toast-notifications";
import JSONBig from 'json-bigint';
import axios from 'axios';

// 添加后台long类型数据的处理
const CustomJson = JSONBig({ storeAsString: true })
axios.defaults.transformResponse = data => CustomJson.parse(data)

export default function App() {
    return (
        <SafeAreaProvider>
            <ToastProvider>
                <Navigation/>
                <StatusBar/>
            </ToastProvider>
        </SafeAreaProvider>
    )
}