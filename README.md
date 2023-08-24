# dream-org
Integrated monorepo built with NX and React application inside.

## Start the app

To start the development server run `nx serve aqeum-web`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Enable translation service for an application or a library

Use `@dream-org/shared-web/i18n` package, operate with `i18nInstance()` to get access to the service.
Call `i18nInstance()` in an app for its initialization.
Call `i18nInstance()` in libs to load required namespaces (TBD).

To connect i18n translations to an app you should update `project.json` of this app, `assets` section with the following:
Outdated for webpack:
```
"assets": [
          ...
          {
            "glob": "**/*",
            "input": "libs/shared-web/i18n/src/lib/locales",
            "output": "./assets/locales"
          }
        ],
```

Actual for vite:
In `vite.config.ts` add:
```
viteStaticCopy({
      targets: [
        {
          src: '../../libs/shared-web/i18n/src/lib/locales',
          dest: 'assets'
        }
      ]
```
## Apps & Libs alignment

Please, try to go with nested folders approach. Folder name should correlate with mentioned `scope:*`.

### Boundaries

#### Types
-  `type:app`
-  `type:service`
-  `type:feature`
-  `type:ui`
-  `type:util`

Types are pretty aligned with standard NX notation. `type:service` is a special type of `type:util` with the difference that util is expected to be rather pure in comparison to a service.
Service can provide a data layer, configurations, specific components/wrappers/providers if it makes sense, etc.

If service consists only from UI component(s) but still has a dependency on some external service(s) - it should be a `type:service` (or it can also be a `type:feature`).

`type:ui` should be presentational only and do not depend on any external services or data layers.
#### Scopes
-   `aqeum-web`
-   `shared-web`


## File types & naming convention

We can outline next specific types of files:
- component `<component-name>.tsx`;
- api `<service-name>.api.ts|tsx`
- store `<store-name>.store.ts|tsx`
- service `<service-name>.service.ts|tsx`
- types `<store-name>.types.ts|tsx`
- constants `<store-name>.constants.ts|tsx`
- utils `<store-name>.utils.ts|tsx`

In case it makes sense to have several files in the same folder, it is good to omit suffix and put files in a folder with a name that meets sufix.


### File Purpose
- #### Component
  In general, component should not contain any heavy logic, API calls, etc. All this stuff should be encapsulated inside **services** and/or **utils**.
- ##### Service
  Service file should keep any kind of logic and export, mostly, hooks, that are consumed by components.
  It should be a facade for components and interact with **api**, **store** and sometimes **utils**.
  - ##### Api
    Special type of service that should cover plain API interaction only
  - ##### Store
    Special type of service that should cover work with state only
- #### Types, Constants, Utils
  They are pretty self-explanatory.

Of course, it is possible to go beyond this agreement if it makes sense.
