# Common own scripts

All scripts here and in sub directories MUST go under the `app` namespace (which should be global and always present) with the exact same name (case sensitive) as the filename.

E.g. script `my_utils/Utils.js` should be accessed globally this way: `app.Utils`

Besides that the scripts MUST NOT pollute the global namespace.
