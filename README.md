# LearningReactNative
Respositorio dedicado a aprender React Native


## Configuracion e instalacion de dependendencias:
### Windows
* Desde powershell Instalar: [Chocolatey](https://chocolatey.org/install)
* Una vez que se tenga instalado Chocolatey ejecutar: _choco install -y nodejs.install python2 jdk8_
* Descargar e instalar Android Studio: [Android Studio](https://developer.android.com/studio?hl=es-419)
*  Una vez que se tenga Android Studio instalar lo siguiente en SDK Manager:
*  SDK Platform -> Show package details-> Intel x86 Atom_64 System Image para la API 28,29 y 30
*  SDK Tools -> Show package details->28.0.3, 29.0.3, 30.0.3
* Configurar variables de entorno ANDROID_HOME
*  En variables de entono colocar una nueva variable llamada ANDROID_HOME con la ruta %LOCALAPPDATA%\Android\Sdk
*  En variables de entorno->Path añadir %LOCALAPPDATA%\Android\Sdk\platform-tools
* Creando y ejecutando primer App
*  npx react-native init 'NombreProyecto'
*  npx react-native run-android
* Ctrl + M -> Debug para abrir Explorador con debug
* Instalar Debbugger: [Debugger](https://github.com/jhen0409/react-native-debugger/releases/tag/v0.10.13)