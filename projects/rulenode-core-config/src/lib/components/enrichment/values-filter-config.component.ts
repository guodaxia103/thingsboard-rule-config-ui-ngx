import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  MinuteIntervalComputeFilterType, minuteIntervalComputeFilterTypeTranslations,
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-enrichment-node-values-filter-config',
  templateUrl: './values-filter-config.component.html',
  styleUrls: []
})
export class ValuesFilterConfigComponent extends RuleNodeConfigurationComponent {

  valuesFilterForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;
  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.valuesFilterForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.valuesFilterForm = this.fb.group({
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []],
      listKeyNames: [configuration ? configuration.listKeyNames : null, []],
      clearKeys: [configuration ? configuration.clearKeys : false, []],
      numFilter: [configuration ? configuration.numFilter : null, []],
      replaceValue: [configuration ? configuration.replaceValue : null, []],
      replaceKey: [configuration ? configuration.replaceKey : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.valuesFilterForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.valuesFilterForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.valuesFilterForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.valuesFilterForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
