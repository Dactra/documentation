(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),t("p",[t("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/PermissionManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/PermissionManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/4ec2d18588a64875aa432c9a827a1849",alt:"Codacy Badge"}}),t("OutboundLink")],1),t("a",{attrs:{href:"https://styleci.io/repos/94779938",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://styleci.io/repos/94779938/shield?branch=master",alt:"StyleCI"}}),t("OutboundLink")],1),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/license",alt:"License"}}),t("OutboundLink")],1),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/downloads",alt:"Total Downloads"}}),t("OutboundLink")],1),t("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/permissionmanager",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/permissionmanager/version",alt:"Latest Stable Version"}}),t("OutboundLink")],1)]),t("p",[e._v("Permission Manager dependency for "),t("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),t("OutboundLink")],1)]),t("p",[t("a",{attrs:{href:"https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029.png",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029_thumb.png",alt:"Screenshot"}}),t("OutboundLink")],1)]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso Core"),t("OutboundLink")],1),e._v(" package comes with this package included.")]),t("p",[e._v("Depends on:")]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/Datatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datatable"),t("OutboundLink")],1),e._v(" for displaying the list of permissions")]),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/FormBuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormBuilder"),t("OutboundLink")],1),e._v(" for creating the forms when managing permissions")]),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),t("OutboundLink")],1),e._v(" for utility classes and traits")]),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/RoleManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoleManager"),t("OutboundLink")],1),e._v(" for the integration with roles")]),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("StructureManager"),t("OutboundLink")],1),e._v(" for the migrations")]),t("li",[t("a",{attrs:{href:"https://github.com/laravel-enso/TutorialManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("TutorialManager"),t("OutboundLink")],1),e._v(" for the relationship with tutorials")])])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("h1",{attrs:{id:"permission-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#permission-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Permission Manager")])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("permissions are managed based on the user role")]),t("li",[e._v("allows creating, updating and deleting of permissions for each route")]),t("li",[e._v("permits the one step creation of permissions for a resource type of route")]),t("li",[e._v("has the "),t("code",[e._v("access-route")]),e._v(" policy which can be used to check if the a user is authorized on a given route")]),t("li",[e._v("comes with the "),t("code",[e._v("VerifyRouteAccess")]),e._v(" middleware that checks against unauthorized access")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"under-the-hood"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[this._v("#")]),this._v(" Under the Hood")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[e._v("inside "),t("code",[e._v("web.php")]),e._v(" there is a route for each action within the application, and each route has the "),t("code",[e._v("name")]),e._v(" attribute defined")]),t("li",[e._v("for each route where we need to have authorization checks, we must define a permission, permission which needs to have the same name as the route")]),t("li",[e._v("routes and groups are nested, the resulting name looking something like "),t("code",[e._v("group1.group2...route")])]),t("li",[e._v("for each request we check the existence of the link between the user's role and the permission for the request's route")]),t("li",[e._v("permissions' attributes:\n"),t("ul",[t("li",[e._v("name: see above")]),t("li",[e._v("description - is human readable and is used when displaying a user's action history (on his profile page)")]),t("li",[e._v("type - may be "),t("code",[e._v("read")]),e._v(" or "),t("code",[e._v("write")]),e._v(" and is an informative flag")]),t("li",[e._v("is_default - flag which lets us know if a permission needs to be automatically allotted to any new role we create")])])]),t("li",[e._v("for routes where we don't need to have authorization checks, permissions are not mandatory, "),t("strong",[e._v("BUT")])]),t("li",[e._v("if we want to log and display the users' actions, permissions become necessary, as they're used when displaying statistics")]),t("li",[e._v("permissions are grouped together in groups, which have mainly a descriptive purpose")]),t("li",[e._v("when naming them, the same name convention is used as in the case of permissions  e.g. "),t("code",[e._v("group1.group2")])]),t("li",[e._v("permission groups are not linked directly to any other entity - with the obvious exception of permissions - nor are they used directly")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("h2",{attrs:{id:"notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);r.default=s.exports}}]);