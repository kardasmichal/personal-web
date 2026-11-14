# kardas.cz — favicon fix

Oprava pro Next.js 16 / Turbopack:
- odstraněn `app/favicon.ico`, který obsahoval RGB PNG frame a shazoval build,
- favicon je nyní servírována přes `app/icon.png` + `/favicon-96x96.png`,
- PNG soubory jsou explicitně v RGBA,
- zbytek webu zůstává beze změny.

Nahraj celý obsah tohoto balíku do kořene GitHub repozitáře a commitni změny.
