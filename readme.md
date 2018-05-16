# Flexible modal solutions

## About the project

This repository contains App prototype which illustrates flexible modal solution. The solution employs a flexible pattern that most of modal features are implemented on data layer, leaving only mandatory parts in the view layer. 

The implementation is simple but powerful, and greatly demonstrate separation of concerns.
For more information see the [slides](https://docs.google.com/presentation/d/1SU-AEw1eU_VRQLCBr_BJuiTJG9b-jUBpxN2nZXkWUbA/edit?usp=sharing).

VueJS, Twig, no Vuex.

## Instalation
Since this solution has google maps component, you will need your own GoogleMaps API key. When you have it, make a config.local.js of a src/app/config/config.js file and add the key. You will see instruction link for obtaining a key, if you don't have it yet.

```javascript
# backend 
npm install
npm run serve

# frontend
cd src/
npm install
npm run start
```

 Both processes must run when launching an App.
