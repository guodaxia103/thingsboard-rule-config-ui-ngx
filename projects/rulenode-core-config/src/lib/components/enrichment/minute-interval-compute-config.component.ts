import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  MinuteIntervalComputeDataType, minuteIntervalComputeDataTypeTranslations,
  MinuteIntervalComputeFilterType, minuteIntervalComputeFilterTypeTranslations,
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-enrichment-node-minute-interval-compute',
  templateUrl: './minute-interval-compute-config.component.html',
  styleUrls: []
})
export class MinuteIntervalComputeConfigComponent extends RuleNodeConfigurationComponent {

  minuteIntervalComputeForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;
  dataType = MinuteIntervalComputeDataType;
  dataTypes = Object.keys(MinuteIntervalComputeDataType);
  dataTypeTranslation = minuteIntervalComputeDataTypeTranslations;
  intervalValues : number[] = [1,3,5,10,15,20,30,60];
  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.minuteIntervalComputeForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.minuteIntervalComputeForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, [Validators.required]],
      dataType: [configuration ? configuration.filterType : this.dataType.INCREMENT, []],
      intervalValue: [configuration ? configuration.interval : 15, []],
      am: [configuration ? configuration.am : null, [Validators.required]],
      everyTime:[configuration ? configuration.everyTime : true, []],
      zero:[configuration ? configuration.zero : false, []],
      putOff:[configuration ? configuration.zero : false, []],
      putHours: [configuration ? configuration.putHours : 24, []],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.minuteIntervalComputeForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.minuteIntervalComputeForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.minuteIntervalComputeForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.minuteIntervalComputeForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
