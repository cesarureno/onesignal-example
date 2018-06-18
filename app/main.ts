// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as application from 'application';

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);

var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;

if (application.android) {
    application.on(application.launchEvent, function(args: application.ApplicationEventData) {
        try {
            console.log('TnsOneSignal', TnsOneSignal);
            TnsOneSignal.startInit(application.android.context).init();
        } catch (error) {
            console.error('Error: ', error);
        }

    })
}
