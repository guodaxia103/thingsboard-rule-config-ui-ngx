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
  selector: 'tb-enrichment-node-filter-and-count-config',
  templateUrl: './filter-and-count-config.component.html',
  styleUrls: []
})
export class FilterAndCountConfigComponent extends RuleNodeConfigurationComponent {

  filterAndCountForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;
  intervalTimeType = FilterAndCountIntervalTimeType;
  intervalTimeTypes = Object.keys(FilterAndCountIntervalTimeType);
  intervalTimeTranslation = filterAndCountIntervalTimeTranslations;
  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.filterAndCountForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.filterAndCountForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, [Validators.required]],
      intervalTimeType:[configuration ? configuration.intervalTimeType : this.intervalTimeType.DAYS, []],
      startTime: [configuration ? configuration.startTime : 0, []],
      rateValue: [configuration ? configuration.startTime : 0, []],
      rateKey: [configuration ? configuration.rateKey : 'rateKey', [Validators.required]],
      count: [configuration ? configuration.count : 'count', [Validators.required]],
      linkKey:[configuration ? configuration.linkKey : false, []],
      everyTime:[configuration ? configuration.everyTime : true, []],
      filterInvalidKey:[configuration ? configuration.filterInvalidKey : true, []],
      output:[configuration ? configuration.output : true, []],
      dataCheck:[configuration ? configuration.dataCheck : true, []],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.filterAndCountForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.filterAndCountForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.filterAndCountForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.filterAndCountForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
