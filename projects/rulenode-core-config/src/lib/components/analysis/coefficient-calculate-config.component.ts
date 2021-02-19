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
  selector: 'tb-analysis-node-coefficient-calculate',
  templateUrl: './coefficient-calculate-config.component.html',
  styleUrls: []
})
export class CoefficientCalculateConfigComponent extends RuleNodeConfigurationComponent {

  coefficientCalculateForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.coefficientCalculateForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.coefficientCalculateForm = this.fb.group({
      latestTsKeyNames: [configuration ? configuration.latestTsKeyNames : null, []],
      tsKeyNames: [configuration ? configuration.tsKeyNames : null, []],
      serverAttributeNames: [configuration ? configuration.serverAttributeNames : null, []],
      clientAttributeNames: [configuration ? configuration.clientAttributeNames : null, []],
      sharedAttributeNames: [configuration ? configuration.sharedAttributeNames : null, []],
      formula: [configuration ? configuration.formula : null, [Validators.required]],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.coefficientCalculateForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.coefficientCalculateForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.coefficientCalculateForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.coefficientCalculateForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
