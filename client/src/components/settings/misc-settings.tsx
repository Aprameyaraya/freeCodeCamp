import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { FullWidthRow } from '../helpers';

import SoundSettings from '../../components/settings/sound';
import KeyboardShortcutsSettings from '../../components/settings/keyboard-shortcuts';
import ScrollbarWidthSettings from '../../components/settings/scrollbar-width';

type MiscSettingsProps = {
  keyboardShortcuts: boolean;
  sound: boolean;
  editorLayout: boolean | null;
  toggleKeyboardShortcuts: (keyboardShortcuts: boolean) => void;
  toggleSoundMode: (sound: boolean) => void;
  resetEditorLayout: () => void;
};

// Offset to prevent top navbar from obscuring anchor target fragments
const scrollMarginStyle = { scrollMarginTop: '80px' };

const MiscSettings = ({
  keyboardShortcuts,
  sound,
  editorLayout,
  resetEditorLayout,
  toggleKeyboardShortcuts,
  toggleSoundMode
}: MiscSettingsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Spacer size='m' />
      <FullWidthRow>
        <section id='sound-settings' style={scrollMarginStyle}>
          <SoundSettings sound={sound} toggleSoundMode={toggleSoundMode} />
        </section>

        <section id='keyboard-shortcuts' style={scrollMarginStyle}>
          <KeyboardShortcutsSettings
            keyboardShortcuts={keyboardShortcuts}
            toggleKeyboardShortcuts={toggleKeyboardShortcuts}
            explain={t('settings.shortcuts-explained')?.toString()}
          />
        </section>

        <section id='scrollbar-width' style={scrollMarginStyle}>
          <ScrollbarWidthSettings />
        </section>

        <section id='reset-editor-layout' style={scrollMarginStyle}>
          <label htmlFor='reset-layout-btn'>
            {t('settings.reset-editor-layout-tooltip')}
          </label>
          <Spacer size='xs' />
          <Button
            onClick={resetEditorLayout}
            id='reset-layout-btn'
            data-playwright-test-label='reset-layout-btn'
            disabled={!editorLayout}
            aria-disabled={!editorLayout}
          >
            {t('settings.reset-editor-layout')}
          </Button>
        </section>
      </FullWidthRow>
    </>
  );
};

export default MiscSettings;