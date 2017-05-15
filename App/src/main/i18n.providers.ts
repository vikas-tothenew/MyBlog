import {HttpModule, Http} from '@angular/http';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './i18n/', '.json');
}
