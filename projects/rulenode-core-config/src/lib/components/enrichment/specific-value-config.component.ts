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
  selector: 'tb-enrichment-node-specific-value-config',
  templateUrl: './specific-value-config.component.html',
  styleUrls: []
})
export class SpecificValueConfigComponent extends RuleNodeConfigurationComponent {

  specificValueForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.specificValueForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.specificValueForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, []],
      searchValue: [configuration ? configuration.searchValue : true, []],
      pt: [configuration ? configuration.pt : 1, []],
      ct: [configuration ? configuration.ct : 1, []],
      replaceKey: [configuration ? configuration.replaceKey : null, []],
      formula: [configuration ? configuration.formula : null, [Validators.required]],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      filterEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.specificValueForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.specificValueForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.specificValueForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.specificValueForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
