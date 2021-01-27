# LearningReactNative
Respositorio dedicado a aprender React Native


## Configuracion e instalacion de dependendencias:
### Windows
* Desde powershell Instalar: [Chocolatey](https://chocolatey.org/install)
* Una vez que se tenga instalado Chocolatey ejecutar: _choco install -y nodejs.install python2 jdk8_
* Descargar e instalar Android Studio: [Android Studio](https://developer.android.com/studio?hl=es-419)
  * Una vez que se tenga Android Studio instalar lo siguiente en SDK Manager:
  * SDK Platform -> Show package details-> Intel x86 Atom_64 System Image para la API 28,29 y 30
  * SDK Tools -> Show package details->28.0.3, 29.0.3, 30.0.3
* Configurar variables de entorno ANDROID_HOME
  * En variables de entono colocar una nueva variable llamada ANDROID_HOME con la ruta %LOCALAPPDATA%\Android\Sdk
  * En variables de entorno->Path añadir %LOCALAPPDATA%\Android\Sdk\platform-tools
* Creando y ejecutando primer App
  * npx react-native init 'NombreProyecto'
  * npx react-native run-android
* Ctrl + M -> Debug para abrir Explorador con debug
* Instalar Debbugger: [Debugger](https://github.com/jhen0409/react-native-debugger/releases/tag/v0.10.13)


### MacOS
* Instalar XCode desde APPStore y probar una APP de prueba
* Instalar HomeBrew desde la terminal, mediante curl o wget
* Instalar Node.JS
* _brew install watchman_
  * Dentro de XCode->Preferences volver a seleccionar CommandLines
* Instalar CocoaPods _sudo gem install cocoapods_
* comandos:
  * _npx react-native init 'NombreProyecto'_
  * _npx react-native run-ios_
  * Instalar debugger: _npm install -d react-devtools_
  * Para usar debbuger: _react-devtools_
* Instalar Android Studio y ejecutar:
  * _brew tap AdoptOpenJDK/openjdk_
  * _sudo brew cask install adoptopenjdk8_
* Dentro de Android Studio:
  * SDK Platform -> Show package details-> Intel x86 Atom_64 System Image para la API 28,29 y 30, y Google APIS x86
  * SDK Tools -> Show package details->28.0.3, 29.0.3, 30.0.3
* Agregar lo siguiente a las variables de entorno:

```export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

* Acceder a maquinas virtuales Android
  * _emulator -list-avds_
  * _adb devices_
  * _emulator -avd 'NombreEmulador'_

* Acceder a dispositivos fisicos
  * _adb devices_
  * _adb -s 'idDispositivo' reverse tcp:8081 tcp:8081_

* Correr aplicacion
  * _npx react-native run-android_