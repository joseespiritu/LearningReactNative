# LearningReactNative
Respositorio dedicado a aprender React Native

# --------------JP-------------------------

# Restaurante APP
* Instalación de TailwindCSS: _npm i --save-dev autoprefixer postcss-cli tailwindcss_
* Inicializando TailWindCSS: _npx tailwind init tailwind.js_
* Instalación de React Router: _npm i react-router@next react-router-dom@next_

# ASYNC STORAGE
* [AsyncStorage React Native Community](https://github.com/react-native-async-storage/async-storage)
* _npm i @react-native-community/async-storage_

# FRAMEWORK UI
* PAPER: _npm i react-native-paper_
* Vector Icons: _npm i react-native-vector-icons_ [Link Gist VectorIcons](https://gist.github.com/juanpablogdl/7d02cb231beda08d6a5e53a57efd6f7b)

# SERVER
* [JSON Server](https://www.npmjs.com/package/json-server) : _npm i json-server ngrok_
* To run server on different terminals:
  * database: _npm run db_
  * tunnel_server with session: _npm run tunnel_
* JSON Server Express: [JSON](https://github.com/typicode/json-server) _npm install -g json-server_

# API`s
* [Criptomonedas](https://min-api.cryptocompare.com/documentation)
* [Yelp](https://www.yelp.com/fusion)
* [Clima](https://home.openweathermap.org/api_keys)

# Modals
* [DateTime](https://github.com/mmazzarolo/react-native-modal-datetime-picker)
* [Picker](https://github.com/react-native-picker/picker)
* _npm i short id_
* Hacer peticiones: _npm i --save axios_

# React Navigation
* Gist JuanPablo [ReactNavigation](https://gist.github.com/juanpablogdl/86c7db533280f5fd23735794d870a38c)
* React Navigation: _npm install react-navigation_
* Dependencies: _expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view_
* Navigation Stack: _npm install react-navigation-stack @react-native-community/masked-view_
* Start the app and clear cache: _expo r -c_

# Enable autolink
* _npx react-native link_

# ----------------SG----------------------------

# Mapas
* _npx expo-cli install react-native-maps_
* Dependencia de localizacion: _npx expo-cli install expo-location_
* Resetear permisos de Localizacion:
  * IOS Simulator => Settings>General>Reset>Reset Location and Privacy
  * Android Emulator => adb shell pm reset-permissions
  * IOS Device => Settings > Expo > Toggle Permissions
  * Android Device => Google Search

# Express API
* Create a new Express API for project track
  * create json file: _npm init -y_
  * Install dependencies: _npm install bcrypt express jsonwebtoken mongoose nodemon_

# Assets
* [Icons on Expo CLI](https://icons.expo.fyi/)
* [React Native Elements](https://reactnativeelements.com/) to install: _npm install react-native-elements_

# Configure port on emulator device [Windows]
* _react-native run-android start --port=8088_

## Start with Expo CLI
* Inside rn-starter execute:
  * _npm install_
  * _npm start_
* MacOs
  * If you dont have installed Explo CLI: _sudo npm install --unsafe-perm -g expo-cli_
  * If not global npm: _export PATH=~/.npm-global/bin:$PATH_ on local variables
* Windows
  * If you dont have installed Explo CLI: _npm install expo-cli --global_
  * If not global npm: _%USERPROFILE%\AppData\Roaming\npm_ on local variables

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