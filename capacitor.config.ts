import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'UI',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
plugins:{
  SplashScreen:{
    backgroundColor:"green",
    showSpinner: false,
    androidSpinnerStyle: "small",
    iosSpinnerStyle: "small",
    splashFullScreen: true,
    splashImmersive: true,
    


  }
}
}
export default config;
