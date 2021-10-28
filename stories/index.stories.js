import React, { useMemo } from 'react';
import { action } from '@storybook/addon-actions';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
// import AutoComplete from '@mui/material/AutoComplete'
import { green } from '@mui/material/colors';
import ChipInput from '../src/ChipInput';
import CustomizedChipInput from './examples/CustomizedChipInput';
import CustomInputFormatting from './examples/CustomInputFormatting';
import ControlledChipInput from './examples/ControlledChipInput';
import AsynchronousDefaultValue from './examples/AsynchronousDefaultValue';
// import ClipboardExample from './examples/ClipboardExample'

import {
  ReactAutosuggestExample,
  ReactAutosuggestRemoteExample,
} from './examples/react-autosuggest';

export default {
  title: 'ChipInput'
};

export const WithSomeChips = () => (
  <ChipInput defaultValue={['foo', 'bar']} fullWidth onChange={action('onChange')} />
);

WithSomeChips.story = {
  name: 'with some chips',
};

export const WithManyChips = () => (
  <ChipInput
    defaultValue={[...Array(25).keys()].map((c) => `Chip ${c}`)}
    onChange={action('onChange')}
    fullWidth
  />
);

WithManyChips.story = {
  name: 'with many chips',
};

export const WithCustomStyles = () => <CustomizedChipInput />;

WithCustomStyles.story = {
  name: 'with custom styles',
};

export const WithPlaceholder = () => <ChipInput placeholder="Placeholder" fullWidth />;

WithPlaceholder.story = {
  name: 'with placeholder',
};

export const WithFloatingLabel = () => <ChipInput label="Floating label" fullWidth />;

WithFloatingLabel.story = {
  name: 'with floating label',
};

export const WithLabelAndPlaceholder = () => (
  <ChipInput label="Floating label" placeholder="Placeholder" fullWidth />
);

WithLabelAndPlaceholder.story = {
  name: 'with label and placeholder',
};

export const WithNonShrinkingFloatingLabelAndPlaceholder = () => (
  <ChipInput label="Floating label" placeholder="Placeholder" InputLabelProps={{ shrink: true }} />
);

WithNonShrinkingFloatingLabelAndPlaceholder.story = {
  name: 'with non-shrinking floating label and placeholder',
};

export const Disabled = () => (
  <ChipInput defaultValue={['foo', 'bar']} label="Disabled input" disabled fullWidth />
);

Disabled.story = {
  name: 'disabled',
};

export const ReadOnly = () => (
  <ChipInput defaultValue={['foo', 'bar']} label="Readonly input" readOnly fullWidth />
);

ReadOnly.story = {
  name: 'readOnly',
};

export const WithCustomWidth = () => (
  <ChipInput
    defaultValue={['foo', 'bar']}
    label="A chip input with a width of 321px"
    style={{ width: 321 }}
  />
);

WithCustomWidth.story = {
  name: 'with custom width',
};

export const WithCustomChips = () => (
  <ChipInput
    defaultValue={['foo', 'bar']}
    fullWidth
    chipRenderer={(
      { value, isFocused, isDisabled, isReadOnly, handleClick, handleDelete, className },
      key
    ) => (
      <Chip
        key={key}
        className={className}
        style={{
          pointerEvents: isDisabled || isReadOnly ? 'none' : undefined,
          backgroundColor: isFocused ? green[800] : green[300],
        }}
        onClick={handleClick}
        onDelete={handleDelete}
        label={value}
        avatar={<Avatar size={32}>{value[0].toUpperCase()}</Avatar>}
      />
    )}
  />
);

WithCustomChips.story = {
  name: 'with custom chips',
};

export const WithHelperText = () => <ChipInput helperText="This text is here to help you." />;

WithHelperText.story = {
  name: 'with helperText',
};

export const WithErrorStyle = () => (
  <ChipInput value={['One', 'Two']} helperText="At least three chips required." error />
);

WithErrorStyle.story = {
  name: 'with error style',
};

export const WithoutUnderline = () => (
  <ChipInput defaultValue={['foo', 'bar']} fullWidth disableUnderline />
);

WithoutUnderline.story = {
  name: 'without underline',
};

export const WithDifferentMargins = () => (
  <div>
    <ChipInput label="normal" margin="normal" style={{ float: 'left' }} />
    <ChipInput label="dense" margin="dense" style={{ float: 'left' }} />
    <ChipInput label="none" margin="none" style={{ float: 'left' }} />
  </div>
);

WithDifferentMargins.story = {
  name: 'with different margins',
};

export const WithAsynchronousDefaultValue = () => <AsynchronousDefaultValue />;

WithAsynchronousDefaultValue.story = {
  name: 'with asynchronous default value',
};

export const ControlledInput = () => <ControlledChipInput />;

ControlledInput.story = {
  name: 'controlled input',
};

export const WithControlledTextInput = () => <CustomInputFormatting />;

WithControlledTextInput.story = {
  name: 'with controlled text input',
};

export const WithFullWidthInput = () => (
  <ChipInput label="The input is always full-width here" fullWidth fullWidthInput />
);

WithFullWidthInput.story = {
  name: 'with fullWidthInput',
};

export const AddTextInputValueOnBlur = () => <ChipInput blurBehavior="add" />;

AddTextInputValueOnBlur.story = {
  name: 'add text input value on blur',
};

export const AddNumberInputValueOnBlurOrClearInputIfNotANumber = () => (
  <ChipInput
    blurBehavior="add-or-clear"
    onBeforeAdd={(value) => !Number.isNaN(parseFloat(value))}
  />
);

AddNumberInputValueOnBlurOrClearInputIfNotANumber.story = {
  name: 'add number input value on blur, or clear input if not a number',
};

export const ClearTextInputValueOnBlur = () => <ChipInput blurBehavior="clear" />;

ClearTextInputValueOnBlur.story = {
  name: 'clear text input value on blur ',
};

export const KeepTextInputValueOnBlur = () => <ChipInput blurBehavior="none" />;

KeepTextInputValueOnBlur.story = {
  name: 'keep text input value on blur ',
};

export const WithDuplicatesAllowed = () => (
  <ChipInput defaultValue={['foo', 'bar', 'foo', 'bar']} allowDuplicates />
);

WithDuplicatesAllowed.story = {
  name: 'with duplicates allowed',
};

export const WithReactAutosuggest = () => (
  <ReactAutosuggestExample label="Country search" placeholder="Search a country" fullWidth />
);

WithReactAutosuggest.story = {
  name: 'with react-autosuggest',
};

export const WithReactAutosuggestAndRemoteData = () => (
  <ReactAutosuggestRemoteExample
    label="Remote country search."
    placeholder="Search a country"
    fullWidth
  />
);

WithReactAutosuggestAndRemoteData.story = {
  name: 'with react-autosuggest and remote data',
};

export const WithReactAutosuggestAndAddOnBlur = () => (
  <ReactAutosuggestRemoteExample
    label="Remote country search."
    placeholder="Search a country"
    blurBehavior="add"
    fullWidth
  />
);

WithReactAutosuggestAndAddOnBlur.story = {
  name: 'with react-autosuggest and add on blur',
};

export const WithOutlinedVariant = () => (
  <div>
    <ChipInput variant="outlined" label="Add Tags" />
    <h2>Different Margins</h2>
    <div>
      <ChipInput variant="outlined" label="normal" margin="normal" style={{ float: 'left' }} />
      <ChipInput variant="outlined" label="dense" margin="dense" style={{ float: 'left' }} />
      <ChipInput variant="outlined" label="none" margin="none" style={{ float: 'left' }} />
    </div>
  </div>
);

WithOutlinedVariant.story = {
  name: 'with "outlined" variant',
};

export const WithOutlinedVariantFullWidth = () => (
  <ChipInput
    defaultValue={['foo', 'bar']}
    variant="outlined"
    label="Add Tags"
    fullWidth
    fullWidthInput
  />
);

WithOutlinedVariantFullWidth.story = {
  name: 'with "outlined" variant fullWidth',
};

export const WithFilledVariant = () => (
  <div>
    <ChipInput variant="filled" label="Add Tags" />
    <h2>Different Margins</h2>
    <div>
      <ChipInput variant="filled" label="normal" margin="normal" style={{ float: 'left' }} />
      <ChipInput variant="filled" label="dense" margin="dense" style={{ float: 'left' }} />
      <ChipInput variant="filled" label="none" margin="none" style={{ float: 'left' }} />
    </div>
  </div>
);

WithFilledVariant.story = {
  name: 'with "filled" variant',
};

export const WithFilledVariantFullWidth = () => (
  <ChipInput
    defaultValue={['foo', 'bar']}
    variant="filled"
    label="Add Tags"
    fullWidth
    fullWidthInput
  />
);

WithFilledVariantFullWidth.story = {
  name: 'with "filled" variant full width',
};
