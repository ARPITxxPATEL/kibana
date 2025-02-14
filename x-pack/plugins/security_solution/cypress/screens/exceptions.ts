/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const CLOSE_ALERTS_CHECKBOX = '[data-test-subj="bulkCloseAlertOnAddExceptionCheckbox"]';

export const CLOSE_SINGLE_ALERT_CHECKBOX = '[data-test-subj="closeAlertOnAddExceptionCheckbox"]';

export const CONFIRM_BTN = '[data-test-subj="addExceptionConfirmButton"]';

export const FIELD_INPUT =
  '[data-test-subj="fieldAutocompleteComboBox"] [data-test-subj="comboBoxInput"] input';

export const FIELD_INPUT_PARENT =
  '[data-test-subj="fieldAutocompleteComboBox"] [data-test-subj="comboBoxInput"]';

export const LOADING_SPINNER = '[data-test-subj="loading-spinner"]';

export const OPERATOR_INPUT = '[data-test-subj="operatorAutocompleteComboBox"]';

export const VALUES_INPUT =
  '[data-test-subj="valuesAutocompleteMatch"] [data-test-subj="comboBoxInput"]';

export const VALUES_MATCH_ANY_INPUT =
  '[data-test-subj="valuesAutocompleteMatchAny"] [data-test-subj="comboBoxInput"]';

export const ADD_AND_BTN = '[data-test-subj="exceptionsAndButton"]';

export const ADD_OR_BTN = '[data-test-subj="exceptionsOrButton"]';

export const ADD_NESTED_BTN = '[data-test-subj="exceptionsNestedButton"]';

export const ENTRY_DELETE_BTN = '[data-test-subj="builderItemEntryDeleteButton"]';

export const CANCEL_BTN = '[data-test-subj="cancelExceptionAddButton"]';

export const EXCEPTIONS_OVERFLOW_ACTIONS_BTN =
  '[data-test-subj="sharedListOverflowCardButtonIcon"]';

export const EXCEPTIONS_TABLE = '[data-test-subj="pageContainer"]';

export const EXCEPTIONS_TABLE_SEARCH = '[data-test-subj="exceptionsHeaderSearchInput"]';

export const EXCEPTIONS_TABLE_SHOWING_LISTS = '[data-test-subj="showingExceptionLists"]';

export const EXCEPTIONS_TABLE_DELETE_BTN =
  '[data-test-subj="sharedListOverflowCardActionItemDelete"]';

export const EXCEPTIONS_TABLE_LINK_RULES_BTN =
  '[data-test-subj="sharedListOverflowCardActionItemLinkRules"]';

export const EXCEPTIONS_TABLE_EXPORT_MODAL_BTN =
  '[data-test-subj="sharedListOverflowCardActionItemExport"]';

export const EXCEPTIONS_TABLE_EXPORT_CONFIRM_BTN = '[data-test-subj="confirmModalConfirmButton"]';

export const EXCEPTIONS_TABLE_SEARCH_CLEAR =
  '[data-test-subj="allExceptionListsPanel"] button.euiFormControlLayoutClearButton';

export const EXCEPTIONS_TABLE_LIST_NAME = '[data-test-subj="exception-list-name"]';

export const EXCEPTIONS_TABLE_MODAL = '[data-test-subj="referenceErrorModal"]';

export const EXCEPTIONS_TABLE_MODAL_CONFIRM_BTN = '[data-test-subj="confirmModalConfirmButton"]';

export const EXCEPTION_ITEM_CONTAINER = '[data-test-subj="exceptionEntriesContainer"]';

export const EXCEPTION_FIELD_LIST =
  '[data-test-subj="comboBoxOptionsList fieldAutocompleteComboBox-optionsList"]';

export const EXCEPTION_FIELD_MAPPING_CONFLICTS_TOOLTIP =
  '[data-test-subj="mappingConflictsTooltip"]';

export const EXCEPTION_FIELD_MAPPING_CONFLICTS_ICON =
  '[data-test-subj="mappingConflictsWarningIcon"]';

export const EXCEPTION_FIELD_MAPPING_CONFLICTS_ACCORDION_ICON =
  '[data-test-subj="mappingConflictsAccordionIcon"]';

export const EXCEPTION_FIELD_MAPPING_CONFLICTS_DESCRIPTION =
  '[data-test-subj="mappingConflictsDescription"]';

export const EXCEPTION_FLYOUT_TITLE = '[data-test-subj="exceptionFlyoutTitle"]';

export const EXCEPTION_EDIT_FLYOUT_SAVE_BTN = '[data-test-subj="editExceptionConfirmButton"]';

export const EXCEPTION_FLYOUT_VERSION_CONFLICT =
  '[data-test-subj="exceptionsFlyoutVersionConflict"]';

export const EXCEPTION_FLYOUT_LIST_DELETED_ERROR = '[data-test-subj="errorCalloutContainer"]';

// Exceptions all items view
export const NO_EXCEPTIONS_EXIST_PROMPT =
  '[data-test-subj="exceptionItemViewerEmptyPrompts-empty"]';

export const ADD_EXCEPTIONS_BTN_FROM_EMPTY_PROMPT_BTN =
  '[data-test-subj="exceptionsEmptyPromptButton"]';

export const EXCEPTION_ITEM_VIEWER_CONTAINER = '[data-test-subj="exceptionItemContainer"]';

export const ADD_EXCEPTIONS_BTN_FROM_VIEWER_HEADER =
  '[data-test-subj="exceptionsHeaderAddExceptionBtn"]';

export const NO_EXCEPTIONS_SEARCH_RESULTS_PROMPT =
  '[data-test-subj="exceptionItemViewerEmptyPrompts-emptySearch"]';

export const EXCEPTION_ITEM_VIEWER_SEARCH = 'input[data-test-subj="exceptionsViewerSearchBar"]';

export const EXCEPTION_CARD_ITEM_NAME = '[data-test-subj="exceptionItemCardHeader-title"]';

export const EXCEPTION_CARD_ITEM_CONDITIONS =
  '[data-test-subj="exceptionItemCardConditions-condition"]';

// Exception flyout components
export const EXCEPTION_ITEM_NAME_INPUT = 'input[data-test-subj="exceptionFlyoutNameInput"]';

export const ADD_TO_SHARED_LIST_RADIO_LABEL = '[data-test-subj="addToListsRadioOption"] label';

export const ADD_TO_SHARED_LIST_RADIO_INPUT = 'input[id="add_to_lists"]';

export const SHARED_LIST_SWITCH = '[data-test-subj="addToSharedListSwitch"]';

export const ADD_TO_RULE_RADIO_LABEL = 'label [data-test-subj="addToRuleRadioOption"]';

export const ADD_TO_RULE_OR_LIST_SECTION = '[data-test-subj="exceptionItemAddToRuleOrListSection"]';

export const OS_SELECTION_SECTION = '[data-test-subj="osSelectionDropdown"]';

export const OS_INPUT = '[data-test-subj="osSelectionDropdown"] [data-test-subj="comboBoxInput"]';

// Shared Exception List Management Page
export const MANAGE_EXCEPTION_CREATE_BUTTON_MENU =
  '[data-test-subj="manageExceptionListCreateButton"]';

export const MANAGE_EXCEPTION_CREATE_BUTTON_EXCEPTION =
  '[data-test-subj="manageExceptionListCreateExceptionButton"]';

export const MANAGE_EXCEPTION_CREATE_LIST_BUTTON =
  '[data-test-subj="manageExceptionListCreateExceptionListButton"]';

export const RULE_ACTION_LINK_RULE_SWITCH = '[data-test-subj="ruleActionLinkRuleSwitch"]';

export const CREATE_SHARED_EXCEPTION_LIST_NAME_INPUT =
  'input[data-test-subj="createSharedExceptionListNameInput"]';

export const CREATE_SHARED_EXCEPTION_LIST_DESCRIPTION_INPUT =
  'textarea[data-test-subj="createSharedExceptionListDescriptionInput"]';

export const CREATE_SHARED_EXCEPTION_LIST_BTN =
  'button[data-test-subj="exception-lists-form-create-shared"]';

export const exceptionsTableListManagementListContainerByListId = (listId: string) =>
  `[data-test-subj="exceptionsManagementListCard-${listId}"]`;

export const LINKED_RULES_BADGE = '[data-test-subj="exceptionListCardLinkedRulesBadge"]';

export const MANAGE_RULES_SAVE = '[data-test-subj="manageListRulesSaveButton"]';

// Exception list management
export const EXCEPTIONS_LIST_MANAGEMENT_NAME =
  '[data-test-subj="exceptionListManagementTitleText"]';

export const EXCEPTIONS_LIST_MANAGEMENT_EDIT_NAME_BTN =
  '[data-test-subj="exceptionListManagementTitleEditIcon"]';

export const EXCEPTIONS_LIST_MANAGEMENT_EDIT_MODAL_NAME_INPUT =
  '[data-test-subj="editModalNameTextField"]';

export const EXCEPTIONS_LIST_MANAGEMENT_DESCRIPTION =
  '[data-test-subj="exceptionListManagementDescriptionText"]';

export const EXCEPTIONS_LIST_MANAGEMENT_EDIT_MODAL_DESCRIPTION_INPUT =
  '[data-test-subj="editModalDescriptionTextField"]';

export const EXCEPTIONS_LIST_EDIT_DETAILS_SAVE_BTN = '[data-test-subj="editModalSaveBtn"]';

export const EXCEPTIONS_LIST_DETAILS_HEADER =
  '[data-test-subj="exceptionListManagementPageHeader"]';
