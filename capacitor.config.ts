import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rick-and-moorty-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
