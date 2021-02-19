import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  filterAndCountIntervalTimeTranslations, FilterAndCountIntervalTimeType,
  MinuteIntervalComputeFilterType, minuteIntervalComputeFilterTypeTranslations,
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-enrichment-node-custom-calculate-config',
  templateUrl: './custom-calculate-config.component.html',
  styleUrls: []
})
export class CustomCalculateConfigComponent extends RuleNodeConfigurationComponent {

  customCalculateForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.customCalculateForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.customCalculateForm = this.fb.group({
      fatherDeviceName: [configuration ? configuration.entityType : null, [Validators.required]],
      fatherKey: [configuration ? configuration.fatherKey : null, [Validators.required]],
      dataSource: [configuration ? configuration.dataSource : null, [Validators.required]],
      formula: [configuration ? configuration.formula : null, [Validators.required]],
      latestData: [configuration ? configuration.latestData : null, []],
      tsData: [configuration ? configuration.tsData : null, []],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.customCalculateForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.customCalculateForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.customCalculateForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.customCalculateForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
