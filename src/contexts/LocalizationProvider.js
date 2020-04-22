import React, { useState } from 'react';

export const strings = new LocalizedStrings({
    en: en,
    gr: gr
});

const LocalizationProvider = (props) => {
    const [lang, setLang] = useState('gr')
    const changeLocalization = lang => {
        setLang(lang);
    }

    return (
        <div>

        </div>
    );
};

export default LocalizationProvider;