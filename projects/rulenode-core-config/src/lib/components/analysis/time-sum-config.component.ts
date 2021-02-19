import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  MinuteIntervalComputeFilterType, minuteIntervalComputeFilterTypeTranslations, TimeSumTimeType, timeSumTimeTypeTranslations,
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-analysis-node-time-sum-config',
  templateUrl: './time-sum-config.component.html',
  styleUrls: []
})
export class TimeSumConfigComponent extends RuleNodeConfigurationComponent {

  timeSumForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;

  timeType = TimeSumTimeType;
  timeTypes = Object.keys(TimeSumTimeType);
  timeTypeTranslation = timeSumTimeTypeTranslations;
  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.timeSumForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.timeSumForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, [Validators.required]],
      suffix: [configuration ? configuration.suffix : 'am', []],
      sumSuffix: [configuration ? configuration.sumSuffix : 'hh', []],
      timeStart: [configuration ? configuration.timeStart : 0, [Validators.required]],
      timeType: [configuration ? configuration.timeType : this.timeType.HOUR, [Validators.required]],
      everyTime: [configuration ? configuration.everyTime : true, []],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.timeSumForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.timeSumForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.timeSumForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.timeSumForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
