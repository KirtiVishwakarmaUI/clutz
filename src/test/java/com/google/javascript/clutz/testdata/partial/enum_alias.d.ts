// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/enum_alias.js
declare namespace ಠ_ಠ.clutz.module$exports$enum_alias {
  //!! This is broken. See https://github.com/angular/clutz/issues/862.
  enum EnumAlias {
  }
  export import ConstAlias = ಠ_ಠ.clutz.module$exports$not_visible ;
  export import ConstModAlias = ಠ_ಠ.clutz.module$exports$not_visible_mod.ModEnum ;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/enum_alias.js
declare module 'goog:enum_alias' {
  import enum_alias = ಠ_ಠ.clutz.module$exports$enum_alias;
  export = enum_alias;
}
