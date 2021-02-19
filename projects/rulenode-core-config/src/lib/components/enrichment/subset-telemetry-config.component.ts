import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'tb-enrichment-node-subset-telemetry-config',
  templateUrl: './subset-telemetry-config.component.html',
  styleUrls: []
})
export class SubsetTelemetryConfigComponent extends RuleNodeConfigurationComponent {

  subsetTelemetryConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.subsetTelemetryConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.subsetTelemetryConfigForm = this.fb.group({
      subsetDevices: [configuration ? configuration.subsetDevices : null, [Validators.required]],
      fatherDeviceName: [configuration ? configuration.entityType : null, [Validators.required]],
      fatherKey: [configuration ? configuration.fatherKey : null, [Validators.required]],
    });
  }
}
