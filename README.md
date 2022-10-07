# Start with React Starter Pack for FE

### General Folder Structure have to be below as for src folder

```
.
├── README.md
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── api.ts
│   │   ├── endpoints.ts
│   │   └── services
│   │       ├── apiService.ts
│   │       ├── example
│   │       │   ├── exampleInterface.ts
│   │       │   └── exampleService.ts
│   │       └── silentServices.ts
│   ├── assets
│   │   └── icons
│   │       └── apple.svg
│   ├── common
│   │   └── constants
│   │       ├── apiServiceMethods.ts
│   │       ├── errors.ts
│   │       ├── localStorageConstants.ts
│   │       └── networkConstants.ts
│   ├── components
│   │   ├── common
│   │   │   ├── Loading.tsx
│   │   │   └── PageHeader.tsx
│   │   ├── header
│   │   │   └── Header.tsx
│   │   └── icons
│   │       ├── Apple.tsx
│   │       └── index.ts
│   ├── hooks
│   │   ├── useRedux.ts
│   │   └── useSlices.ts
│   ├── i18n
│   │   ├── config.ts
│   │   ├── en
│   │   │   └── en.json
│   │   └── tr
│   │       └── tr.json
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── redux
│   │   ├── slices
│   │   │   ├── loadingSlice.ts
│   │   │   └── mainSlice.ts
│   │   └── store.ts
│   ├── routes
│   │   └── routeData.ts
│   ├── tailwind.css
│   ├── utils
│   │   ├── errorUtils.ts
│   │   ├── loadableUtil.ts
│   │   └── translateUtil.ts
│   └── views
│       ├── home
│       │   └── Home.tsx
│       └── layouts
│           ├── MainLayout.tsx
│           └── PageLayout.tsx
├── tailwind.config.js
├── tsconfig.json
└── webpack
    ├── index_template.html
    ├── webpack.config.common.js
    ├── webpack.config.dev.js
    └── webpack.config.prod.js

```

**Naming case type of util files:** `camelCase`

**Naming case type of folder:** `kebab-case`

**Naming case type of components:** `PascalCase`

# Installation Steps
## For macOSx
### Install Brew

If you not have brew package manager you have to this tool.
Below are the commands required to install

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Detail information: https://brew.sh/index_tr

### Install NodeJS with NVM (version: 14.xx)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

If it didn't add path. You have to add by manually 
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Let's install nodejs with nvm 
```
    nvm install 14.xx.x
```
Detail information: https://github.com/nvm-sh/nvm

### Project Installation
```
yarn install
yarn start
```
