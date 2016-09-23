// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { RootModule } from './modules/root/root.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(RootModule);