import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './main/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'Production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

//document.addEventListener('DOMContentLoaded', main);


if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}



// Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { });
} else {
    enableProdMode();
}

// Boot the application, either now or when the DOM content is loaded
const platform = platformBrowserDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === 'complete') {
    window.onload = () => main();
    location.reload();
} else {
    document.addEventListener('DOMContentLoaded', main);
}