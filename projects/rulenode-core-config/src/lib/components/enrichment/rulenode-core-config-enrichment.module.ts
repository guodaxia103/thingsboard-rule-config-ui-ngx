import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/public-api';
import {CustomerAttributesConfigComponent} from './customer-attributes-config.component';
import {RulenodeCoreConfigCommonModule} from '../common/rulenode-core-config-common.module';
import {EntityDetailsConfigComponent} from './entity-details-config.component';
import {DeviceAttributesConfigComponent} from './device-attributes-config.component';
import {OriginatorAttributesConfigComponent} from './originator-attributes-config.component';
import {OriginatorFieldsConfigComponent} from './originator-fields-config.component';
import {GetTelemetryFromDatabaseConfigComponent} from './get-telemetry-from-database-config.component';
import {RelatedAttributesConfigComponent} from './related-attributes-config.component';
import {TenantAttributesConfigComponent} from './tenant-attributes-config.component';
import {IntervalComputeConfigComponent} from './interval-compute-config.component';
import {SubsetTelemetryConfigComponent} from './subset-telemetry-config.component';
import {MinuteIntervalComputeConfigComponent} from './minute-interval-compute-config.component';
import {IntervalSumConfigComponent} from './interval-sum-config.component';
import {FilterAndCountConfigComponent} from './filter-and-count-config.component';
import {SpecificValueConfigComponent} from './specific-value-config.component';
import {CustomCalculateConfigComponent} from './custom-calculate-config.component';
import {DataFilterConfigComponent} from './data-filter-config.component';
import {ValuesFilterConfigComponent} from './values-filter-config.component';

@NgModule({
  declarations: [
    CustomerAttributesConfigComponent,
    EntityDetailsConfigComponent,
    DeviceAttributesConfigComponent,
    OriginatorAttributesConfigComponent,
    OriginatorFieldsConfigComponent,
    GetTelemetryFromDatabaseConfigComponent,
    RelatedAttributesConfigComponent,
    TenantAttributesConfigComponent,
    IntervalComputeConfigComponent,
    SubsetTelemetryConfigComponent,
    MinuteIntervalComputeConfigComponent,
    IntervalSumConfigComponent,
    FilterAndCountConfigComponent,
    SpecificValueConfigComponent,
    CustomCalculateConfigComponent,
    DataFilterConfigComponent,
    ValuesFilterConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RulenodeCoreConfigCommonModule
  ],
  exports: [
    CustomerAttributesConfigComponent,
    EntityDetailsConfigComponent,
    DeviceAttributesConfigComponent,
    OriginatorAttributesConfigComponent,
    OriginatorFieldsConfigComponent,
    GetTelemetryFromDatabaseConfigComponent,
    RelatedAttributesConfigComponent,
    TenantAttributesConfigComponent,
    IntervalComputeConfigComponent,
    SubsetTelemetryConfigComponent,
    MinuteIntervalComputeConfigComponent,
    IntervalSumConfigComponent,
    FilterAndCountConfigComponent,
    SpecificValueConfigComponent,
    CustomCalculateConfigComponent,
    DataFilterConfigComponent,
    ValuesFilterConfigComponent
  ]
})
export class RulenodeCoreConfigEnrichmentModule {
}
