import { DefaultValuesFormInterface } from './defaultValuesFormInterface';

export type navBarProps = Omit<
  DefaultValuesFormInterface,
  'handleSelectName' | 'handleSelectLine'
>;
