import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/public-api';
import {RulenodeCoreConfigCommonModule} from '../common/rulenode-core-config-common.module';
import {CustomAnalysisConfigComponent} from './custom-analysis-config.component';
import {CoefficientCalculateConfigComponent} from './coefficient-calculate-config.component';
import {TimeSumConfigComponent} from './time-sum-config.component';
import {PeakValleyJudgeConfigComponent} from './peak-valley-judge-config.component';

@NgModule({
  declarations: [
    CustomAnalysisConfigComponent,
    CoefficientCalculateConfigComponent,
    TimeSumConfigComponent,
    PeakValleyJudgeConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RulenodeCoreConfigCommonModule
  ],
  exports: [
    CustomAnalysisConfigComponent,
    CoefficientCalculateConfigComponent,
    TimeSumConfigComponent,
    PeakValleyJudgeConfigComponent
  ]
})
export class RulenodeCoreConfigAnalysisModule {
}
