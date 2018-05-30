import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayRegionModule } from './region/region.module';
import { GatewayCountryModule } from './country/country.module';
import { GatewayLocationModule } from './location/location.module';
import { GatewayDepartmentModule } from './department/department.module';
import { GatewayTaskModule } from './task/task.module';
import { GatewayEmployeeModule } from './employee/employee.module';
import { GatewayJobModule } from './job/job.module';
import { GatewayJobHistoryModule } from './job-history/job-history.module';
import { GatewayProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatewayRegionModule,
        GatewayCountryModule,
        GatewayLocationModule,
        GatewayDepartmentModule,
        GatewayTaskModule,
        GatewayEmployeeModule,
        GatewayJobModule,
        GatewayJobHistoryModule,
        GatewayProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
