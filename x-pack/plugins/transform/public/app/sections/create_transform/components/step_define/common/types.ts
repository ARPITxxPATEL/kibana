/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { KBN_FIELD_TYPES } from '@kbn/field-types';
import { isPopulatedObject } from '@kbn/ml-is-populated-object';

import type { TimeRange as TimeRangeMs } from '@kbn/ml-date-picker';
import { TIME_SERIES_METRIC_TYPES } from '@kbn/ml-agg-utils';
import { EsFieldName } from '../../../../../../../common/types/fields';

import {
  PivotAggsConfigDict,
  PivotGroupByConfigDict,
  PivotGroupByConfigWithUiSupportDict,
} from '../../../../../common';
import { SavedSearchQuery } from '../../../../../hooks/use_search_items';

import { QUERY_LANGUAGE } from './constants';
import { TransformFunction } from '../../../../../../../common/constants';
import {
  LatestFunctionConfigUI,
  PivotConfigDefinition,
} from '../../../../../../../common/types/transform';
import { LatestFunctionConfig } from '../../../../../../../common/api_schemas/transforms';
import { RUNTIME_FIELD_TYPES } from '../../../../../../../common/shared_imports';

export interface ErrorMessage {
  query: string;
  message: string;
}

export interface Field {
  name: EsFieldName;
  type: KBN_FIELD_TYPES | TIME_SERIES_METRIC_TYPES.COUNTER;
}

type RuntimeType = typeof RUNTIME_FIELD_TYPES[number];

export interface RuntimeField {
  type: RuntimeType;
  script?:
    | string
    | {
        source: string;
      };
}

export type RuntimeMappings = Record<string, RuntimeField>;
export interface StepDefineExposedState {
  transformFunction: TransformFunction;
  aggList: PivotAggsConfigDict;
  groupByList: PivotGroupByConfigDict | PivotGroupByConfigWithUiSupportDict;
  latestConfig: LatestFunctionConfigUI;
  isAdvancedPivotEditorEnabled: boolean;
  isAdvancedSourceEditorEnabled: boolean;
  searchLanguage: QUERY_LANGUAGE;
  searchString: string | undefined;
  searchQuery: string | SavedSearchQuery;
  sourceConfigUpdated: boolean;
  valid: boolean;
  validationStatus: { isValid: boolean; errorMessage?: string };
  runtimeMappings?: RuntimeMappings;
  runtimeMappingsUpdated: boolean;
  isRuntimeMappingsEditorEnabled: boolean;
  timeRangeMs?: TimeRangeMs;
  isDatePickerApplyEnabled: boolean;
  /**
   * Undefined when the form is incomplete or invalid
   */
  previewRequest: { latest: LatestFunctionConfig } | { pivot: PivotConfigDefinition } | undefined;
}

export function isPivotPartialRequest(arg: unknown): arg is { pivot: PivotConfigDefinition } {
  return isPopulatedObject(arg, ['pivot']);
}

export function isLatestPartialRequest(arg: unknown): arg is { latest: LatestFunctionConfig } {
  return isPopulatedObject(arg, ['latest']);
}
